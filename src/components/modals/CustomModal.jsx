import React from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const CustomModal = ({ children, isModalOpen }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          // marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "2rem",
          backgroundColor: "#EFEFEFD9",
          borderRadius: "15px",
        },
        overlay: {
          backgroundColor: " #FFFFFFC4",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default CustomModal;
