import React from "react";

interface WithModalProps {
  closeModal?: () => void;
  applyBackgroundOpacity?: boolean;
}

const withModal = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & WithModalProps) => {
    const closeModal = () => {
      if (props.closeModal) {
        props.closeModal();
      }
    };

    const backgroundClasses = props.applyBackgroundOpacity
      ? "bg-black bg-opacity-50"
      : "bg-black";

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${backgroundClasses}`}
      >
        <div className="relative bg-gray-800 p-8 rounded-lg w-full max-w-md">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          >
            &times;
          </button>
          <Component {...(props as P)} closeModal={closeModal} />
        </div>
      </div>
    );
  };
};

export default withModal;
