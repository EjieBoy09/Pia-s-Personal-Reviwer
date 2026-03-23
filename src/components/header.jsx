import React, { useState } from "react";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full flex items-center justify-between shadow-md py-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.80)", backdropFilter: "blur(8px)", paddingLeft: "16px", paddingRight: "16px" }}
      >
          {/* Title - Left */}
          <h1
            className="text-2xl font-extrabold tracking-tight select-none"
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

          {/* About Button - Right */}
          <button
            onClick={() => setShowAbout(true)}
            className="text-sm font-semibold px-4 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer"
            style={{
              borderColor: "#a855f7",
              color: "#a855f7",
              backgroundColor: "transparent",
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
            About
          </button>
      </header>

      {/* About Modal */}
      {showAbout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          onClick={() => setShowAbout(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-center font-bold mb-2" style={{ color: "#a855f7" }}>
              About 💖
            </h2>
            <p className="text-gray-600 text-md">
              This is a reviewer app made with love ihhhh charot— just for my babi. 🌸
            </p>
            <button
              onClick={() => setShowAbout(false)}
              className="mt-5 w-full py-2 rounded-full text-white text-sm font-semibold transition cursor-pointer"
              style={{ background: "linear-gradient(90deg, #f472b6, #a855f7)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}