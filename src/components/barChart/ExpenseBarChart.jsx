import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const CATEGORY_ORDER = ["food", "entertainment", "travel"];

const ExpenseBarChart = ({ expenseList }) => {
  const dataMap = expenseList.reduce((acc, item) => {
    const category = item.category;
    const price = Number(item.price) || 0;
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  const chartData = CATEGORY_ORDER.map((cat) => ({
    category: cat + "-",
    value: dataMap[cat] || 0,
  }));

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "10px",
        outline: "none",
      }}
    >
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          layout="vertical"
          data={chartData}
          barSize={20}
          margin={{ top: 10, right: 15, left: 80, bottom: 10 }}
        >
          <XAxis type="number" hide />
          <YAxis
            dataKey="category"
            type="category"
            width={80}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="value" fill="#8784D2" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBarChart;
