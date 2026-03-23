import React from "react";
import staticImage from "../images/static.png";
import { useNavigate } from "react-router-dom";

function StaticPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${staticImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blurry background div wrapping the button */}
      <div
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.55)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "16px",
          padding: "48px 64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h1
          className="text-3xl font-extrabold tracking-tight select-none"
          style={{
            background: "linear-gradient(90deg, #f472b6, #a855f7, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Georgia', serif",
          }}
        >
          Reviewer For My Babi 💖
        </h1>
        <p className="text-sm font-medium" style={{ color: "#6b7280" }}>
          Your ultimate study companion, made with love 🌸
          <p className="italic">Prof. Ejie Boy Cute Gamlanga. Cute, Pogi, Loyal, Walang Pera</p>
        </p>
        <button
          onClick={() => navigate("/landing")}
          style={{
            backgroundColor: "transparent",
            color: "#a855f7",
            border: "2px solid #a855f7",
            padding: "10px 28px",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s ease, color 0.2s ease",
            marginTop: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#a855f7";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#a855f7";
          }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}

export default StaticPage;