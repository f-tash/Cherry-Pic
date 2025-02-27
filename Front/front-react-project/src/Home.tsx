import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        
        alignItems: "center",
        backgroundImage: `url('/Cherry-Pic/background.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontFamily: "'Pacifico', cursive" ,textShadow: "2px 2px 4px #ffffff", color: "Black", fontSize: "48px", marginTop: "20vh" }}>
        Cherry Pic
      </h1>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link
              to="/photo-list"
              style={{
                display: "block",
                fontSize: "24px",
                padding: "20px",
                margin: "10px 0",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
              }}
            >
              Go to Photo Page
            </Link>
          </li>
          <li>
            <Link
              to="/input"
              style={{
                display: "block",
                fontSize: "24px",
                padding: "20px",
                margin: "10px 0",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
              }}
            >
              Go to Input Page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
