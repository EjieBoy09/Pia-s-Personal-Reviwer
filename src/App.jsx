import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import StaticPage from "./pages/static";
import LandingPage from "./pages/landing";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Lesson2 from "./lessons/lesson2";
import Lesson3 from "./lessons/lesson3";
import Lesson4 from "./lessons/lesson4";
import Lesson5 from "./lessons/lesson5";
import Lesson6 from "./lessons/lesson6";

function App() {
  const [activeLesson, setActiveLesson] = useState(1);

  const renderLesson = () => {
    if (activeLesson === 1) return <LandingPage setActiveLesson={setActiveLesson} />;
    if (activeLesson === 2) return <Lesson2 setActiveLesson={setActiveLesson} />;
    if (activeLesson === 3) return <Lesson3 setActiveLesson={setActiveLesson} />;
    if (activeLesson === 4) return <Lesson4 setActiveLesson={setActiveLesson} />;
    if (activeLesson === 5) return <Lesson5 setActiveLesson={setActiveLesson} />;
    if (activeLesson === 6) return <Lesson6 setActiveLesson={setActiveLesson} />;
    return <LandingPage setActiveLesson={setActiveLesson} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaticPage />} />
        <Route
          path="/landing"
          element={
            <>
              <Header />
              <div className="flex">
                <Sidebar activeLesson={activeLesson} setActiveLesson={setActiveLesson} />
                {renderLesson()}
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;