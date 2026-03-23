import React, { useState } from "react";

function Sidebar({ activeLesson, setActiveLesson }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#a855f7",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "8px 12px",
          fontSize: "13px",
          fontWeight: "600",
          boxShadow: "0 2px 8px rgba(168,85,247,0.3)",
        }}
      >
        {isOpen ? "✕ Close" : "☰ Lessons"}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className="flex flex-col rounded-md p-4"
        style={{
          backgroundColor: "rgba(245, 245, 245, 1)",
          width: "200px",
          minHeight: "100vh",
          // Mobile: slide in from left
          position: window.innerWidth < 768 ? "fixed" : "relative",
          top: window.innerWidth < 768 ? "0" : "auto",
          left: window.innerWidth < 768 ? (isOpen ? "0" : "-220px") : "auto",
          zIndex: window.innerWidth < 768 ? 45 : "auto",
          transition: "left 0.3s ease",
          paddingTop: window.innerWidth < 768 ? "70px" : "16px",
          boxShadow: window.innerWidth < 768 && isOpen ? "4px 0 12px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <h2 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#a855f7" }}>
          Lessons
        </h2>
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => {
                setActiveLesson(num);
                setIsOpen(false);
              }}
              className="text-sm font-medium text-left px-3 py-2 rounded-md transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: activeLesson === num ? "#d8b4fe" : "transparent",
                color: activeLesson === num ? "#7e22ce" : "#6b7280",
                fontWeight: activeLesson === num ? "700" : "500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = activeLesson === num ? "#d8b4fe" : "#f3e8ff";
                e.currentTarget.style.color = activeLesson === num ? "#7e22ce" : "#a855f7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = activeLesson === num ? "#d8b4fe" : "transparent";
                e.currentTarget.style.color = activeLesson === num ? "#7e22ce" : "#6b7280";
              }}
            >
              Lesson {num}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;