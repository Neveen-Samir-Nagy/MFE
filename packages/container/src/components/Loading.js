import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "16px",
    backgroundColor: "#fff",
  },
  spinner: {
    width: "60px",
    height: "60px",
    border: "6px solid #e5e5e5",
    borderTop: "6px solid #1976d2",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    fontWeight: 500,
  },
};

const Loading = () => (
  <>
    <style>
      {`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
    </style>

    <div style={styles.container}>
      <div style={styles.spinner} />
      <p style={styles.text}>Loading...</p>
    </div>
  </>
);

export default Loading;