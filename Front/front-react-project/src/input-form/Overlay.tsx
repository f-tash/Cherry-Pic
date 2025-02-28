import React from "react";

const LoadingOverlay: React.FC = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.25)", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 50,
            }}
        >
            <div
                style={{
                    width: "4rem",
                    height: "4rem",
                    border: "4px solid #FF75B6", 
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }}
            ></div>
            <style>
                {`
                    @keyframes spin {
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default LoadingOverlay;
