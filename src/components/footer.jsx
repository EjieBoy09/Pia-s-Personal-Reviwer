import React from "react";

function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderTop: "2px solid #e9d5ff",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left - Title */}
          <div className="flex flex-col gap-2">
            <h2
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
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mt-1">
              Your ultimate study companion, crafted with love and dedication. Study hard, ace it all! 🌸
            </p>
          </div>

          {/* Center - Contact */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-sm font-bold uppercase tracking-widest pb-2"
              style={{ color: "#a855f7", borderBottom: "1px solid #e9d5ff" }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500 flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 cursor-default">
                <span>✉️</span> babisreviewer@email.com
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 cursor-default">
                <span>📍</span> Quezon City, Philippines
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 cursor-default">
                <span>📞</span> +63 912 345 6789
              </p>
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-sm font-bold uppercase tracking-widest pb-2"
              style={{ color: "#a855f7", borderBottom: "1px solid #e9d5ff" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-5 mt-1">

              {/* Facebook */}
              <a
                href="#"
                title="Facebook"
                style={{ display: "inline-block", transition: "all 0.2s", color: "#9ca3af" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#1877F2"; e.currentTarget.style.transform = "translateY(-3px) scale(1.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                title="Instagram"
                style={{ display: "inline-block", transition: "all 0.2s", color: "#9ca3af" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#E1306C"; e.currentTarget.style.transform = "translateY(-3px) scale(1.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                title="Twitter"
                style={{ display: "inline-block", transition: "all 0.2s", color: "#9ca3af" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#1DA1F2"; e.currentTarget.style.transform = "translateY(-3px) scale(1.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.213 5.578 5.95-5.578zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-4 text-center" style={{ borderTop: "1px solid #e9d5ff" }}>
          <p className="text-sm text-gray-400">
            © 2025 <span style={{ color: "#a855f7", fontWeight: "600" }}>Babi's Reviewer</span>. All rights reserved. Made with 💖
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;