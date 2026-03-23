import React, { useState, useRef } from "react";

const multipleChoice = [
  {
    id: 1,
    question: "What is the primary focus of Biological Theories of Gender?",
    options: ["A. Cultural practices that shape gender roles", "B. Biological characteristics that differentiate men and women", "C. Social institutions that reinforce gender norms", "D. Psychological development of gender identity"],
    answer: "B",
  },
  {
    id: 2,
    question: "Which of the following are the three subtopics under Biological Theories of Gender?",
    options: ["A. Feminism, Conflict Theory, Functionalism", "B. Evolutionary Psychology, Brain Research, Sex Hormones", "C. Socialization, Education, Media", "D. Chromosomes, Culture, Religion"],
    answer: "B",
  },
  {
    id: 3,
    question: "Dr. Reyes is giving a lecture and explains that a lion's aggressive hunting behavior and a peacock's colorful feathers both stem from the same underlying force — the drive to survive and reproduce. She connects this to how human males and females also develop different temperaments over time. Which biological theory best supports Dr. Reyes' explanation?",
    options: ["A. Social learning theory", "B. Feminist theory", "C. Evolutionary Psychology", "D. Cultural theory"],
    answer: "C",
  },
  {
    id: 4,
    question: "According to Edward Wilson's argument, all creatures \"obey\" what principle?",
    options: ["A. The cultural principle", "B. The socialization principle", "C. The biological principle", "D. The developmental principle"],
    answer: "C",
  },
  {
    id: 5,
    question: "Edward Wilson is identified in the lesson as:",
    options: ["A. A sociologist and feminist", "B. An American Biologist and Naturalist", "C. A developmental psychologist", "D. A political scientist"],
    answer: "B",
  },
  {
    id: 6,
    question: "A researcher studying animal behavior notices that male birds tend to be more colorful and perform elaborate displays to attract mates, while females tend to be more selective in choosing partners. The researcher argues this pattern mirrors human gender differences and is not a result of social conditioning but of something deeper rooted in survival. Which biological theory best explains the researcher's argument?",
    options: ["A. Gender is purely a product of culture", "B. Gender differences are shaped by evolutionary selection pressures", "C. Gender is randomly assigned at birth", "D. Gender roles are taught only through education"],
    answer: "B",
  },
  {
    id: 7,
    question: "The Brain Research subtopic under Biological Theories discusses which concept?",
    options: ["A. The difference between achieved and ascribed status", "B. The \"HIS\" brain and \"HER\" brain", "C. The effect of media on gender", "D. The role of family in gender socialization"],
    answer: "B",
  },
  {
    id: 8,
    question: "Marco excels in mathematics competitions, solving complex equations quickly and constructing logical arguments with ease. His teacher says his strengths are consistent with how a particular side of the brain functions. Which hemisphere is being referred to?",
    options: ["A. Right hemisphere", "B. Left hemisphere", "C. Both hemispheres equally", "D. The frontal lobe only"],
    answer: "B",
  },
  {
    id: 9,
    question: "Sofia is a painter who relies heavily on intuition when creating her artwork. She also has a strong sense of empathy and often expresses her emotions through her crafts. According to Brain Research, which hemisphere is most dominant in Sofia's creative and emotional strengths?",
    options: ["A. Left hemisphere", "B. Right hemisphere", "C. The temporal lobe only", "D. Neither hemisphere"],
    answer: "B",
  },
  {
    id: 10,
    question: "Who led the MRI brain scan study involving 90 volunteers to examine brain volume and shapes across genders and sexual orientations?",
    options: ["A. Edward Wilson", "B. C. Wright Mills", "C. Ivanka Savic", "D. Sigmund Freud"],
    answer: "C",
  },
  {
    id: 11,
    question: "In the brain scan study by Ivanka Savic, how many volunteers participated?",
    options: ["A. 50", "B. 75", "C. 90", "D. 100"],
    answer: "C",
  },
  {
    id: 12,
    question: "The group of 90 volunteers in Ivanka Savic's study consisted of:",
    options: ["A. 30 heterosexuals and 30 homosexuals of each gender", "B. 25 heterosexuals and 20 homosexuals of each gender", "C. 40 heterosexuals and 10 homosexuals of each gender", "D. 45 heterosexuals and 5 homosexuals of each gender"],
    answer: "B",
  },
  {
    id: 13,
    question: "What brain structure was specifically examined in Ivanka Savic's MRI study?",
    options: ["A. The cerebellum", "B. The frontal cortex", "C. The amygdala", "D. The hippocampus"],
    answer: "C",
  },
  {
    id: 14,
    question: "What tool did Ivanka Savic's team use to study the brain differences in their research?",
    options: ["A. CT scans", "B. X-ray imaging", "C. MRI scans", "D. Ultrasound"],
    answer: "C",
  },
  {
    id: 15,
    question: "Under Sex Hormones, the lesson discusses chromosomal influences. What chromosomal combination is associated with females?",
    options: ["A. XY", "B. YY", "C. XX", "D. XO"],
    answer: "C",
  },
  {
    id: 16,
    question: "Under Sex Hormones, what chromosomal combination is associated with males?",
    options: ["A. XX", "B. XY", "C. YX", "D. YY"],
    answer: "B",
  },
  {
    id: 17,
    question: "Sex Hormones as a biological theory of gender emphasizes the role of:",
    options: ["A. Cultural values in determining gender", "B. Chromosomal and hormonal influences in differentiating the sexes", "C. Peer pressure in shaping gender identity", "D. Educational systems in reinforcing gender roles"],
    answer: "B",
  },
  {
    id: 18,
    question: "Biological Theories of Gender are described in the lesson as:",
    options: ["A. The most comprehensive explanation of gender", "B. An initial attempt at explaining gender", "C. The final and definitive word on gender differences", "D. A purely sociological approach to gender"],
    answer: "B",
  },
  {
    id: 19,
    question: "Which of the following correctly lists the THREE categories of theories of gender development presented in this lesson?",
    options: ["A. Psychological, Sociological, Political", "B. Biological, Developmental, Cultural", "C. Evolutionary, Educational, Economic", "D. Personal, Social, Political"],
    answer: "B",
  },
  {
    id: 20,
    question: "Which scientist is most associated with the concept of the \"biological principle\" as applied to gender?",
    options: ["A. Ivanka Savic", "B. Sigmund Freud", "C. Edward Wilson", "D. C. Wright Mills"],
    answer: "C",
  },
  {
    id: 21,
    question: "Evolutionary Psychology falls under which category of gender theories?",
    options: ["A. Cultural Theories", "B. Developmental Theories", "C. Biological Theories", "D. Feminist Theories"],
    answer: "C",
  },
  {
    id: 22,
    question: "Brain Research as a subtopic of Biological Theories focuses on:",
    options: ["A. How schools teach gender roles", "B. Differences in brain structure and function between genders", "C. How laws enforce gender norms", "D. How media shapes gender expectations"],
    answer: "B",
  },
  {
    id: 23,
    question: "The \"HIS\" brain and \"HER\" brain concept relates to which biological subtopic?",
    options: ["A. Sex Hormones", "B. Evolutionary Psychology", "C. Brain Research", "D. Chromosomal Influences"],
    answer: "C",
  },
  {
    id: 24,
    question: "A newborn is brought to a genetics laboratory for a chromosomal screening. The results reveal the baby carries two X chromosomes. Based on the lesson's discussion of Sex Hormones and chromosomal influences, what biological sex does this chromosomal combination indicate?",
    options: ["A. Male, because two sex chromosomes indicate dominance", "B. Intersex, because two identical chromosomes are irregular", "C. Female, because the XX combination is associated with biological females", "D. The chromosomal result alone cannot determine biological sex"],
    answer: "C",
  },
  {
    id: 25,
    question: "Based on the lesson, Biological Theories of Gender attempt to explain gender differences by focusing on:",
    options: ["A. Social and environmental factors", "B. Religious and moral frameworks", "C. Biological characteristics that differentiate men and women", "D. Economic and political structures"],
    answer: "C",
  },
];

const identification = [
  { id: 26, question: "The three subtopics that fall under Biological Theories of Gender.", answer: "Evolutionary Psychology, Brain Research, Sex Hormones" },
  { id: 27, question: "The American Biologist and Naturalist who argued that all creatures \"obey\" the biological principle.", answer: "Edward Wilson" },
  { id: 28, question: "The biological theory that argues all temperamental differences derive from biological development under the pressure of evolutionary selection.", answer: "Evolutionary Psychology" },
  { id: 29, question: "The term used by Edward Wilson to describe the principle that all living creatures are governed by in determining their temperament and differences.", answer: "The Biological Principle" },
  { id: 30, question: "The biological subtopic that examines the \"HIS\" brain and \"HER\" brain and differences in brain structure between genders.", answer: "Brain Research" },
  { id: 31, question: "The researcher who led the MRI study examining the brain volume and shapes of heterosexual and homosexual participants.", answer: "Ivanka Savic" },
  { id: 32, question: "The imaging technology used by Ivanka Savic's team to study brain differences.", answer: "MRI Scans" },
  { id: 33, question: "The brain structure that was the focus of Ivanka Savic's gender and brain research.", answer: "The Amygdala" },
  { id: 34, question: "The total number of volunteers in Ivanka Savic's brain study.", answer: "90 volunteers" },
  { id: 35, question: "The chromosomal combination that identifies biological females.", answer: "XX" },
  { id: 36, question: "The chromosomal combination that identifies biological males.", answer: "XY" },
  { id: 37, question: "The biological subtopic that deals with chromosomal influences and differentiates males from females based on genetic makeup.", answer: "Sex Hormones / Chromosomal Influences" },
  { id: 38, question: "The three broad categories of theories of gender development discussed in this lesson.", answer: "Biological, Developmental, Cultural" },
  { id: 39, question: "The side of the brain associated with analytical thinking, numbers, language, reasoning, and logic.", answer: "Left Hemisphere" },
  { id: 40, question: "The side of the brain associated with emotional intelligence, imagination, expression, art awareness, intuition, and creativity.", answer: "Right Hemisphere" },
  { id: 41, question: "The description given in the lesson for Biological Theories of Gender — they are considered this kind of attempt at explaining gender.", answer: "An initial attempt" },
  { id: 42, question: "The field of study, introduced by Edward Wilson, that examines how evolutionary pressures shape personality and behavior differences between men and women.", answer: "Evolutionary Psychology" },
  { id: 43, question: "The biological factors — specifically chromosomes and hormones — that the Sex Hormones subtopic argues are responsible for differentiating males from females.", answer: "Chromosomal and hormonal influences" },
  { id: 44, question: "The type of scans used in Ivanka Savic's study to examine differences in the overall volume and shapes of brains.", answer: "MRI Scans" },
  { id: 45, question: "The subject of Ivanka Savic's research that looked at how brain structure may differ across gender and sexual orientation.", answer: "Brain volume and shapes across gender and sexual orientation" },
];

const trueFalse = [
  { id: 46, question: "Biological Theories of Gender focus on cultural practices and social interactions to explain differences between men and women.", answer: "FALSE" },
  { id: 47, question: "Edward Wilson argued that all temperamental differences among creatures derive from biological development under the pressure of evolutionary selection.", answer: "TRUE" },
  { id: 48, question: "Ivanka Savic used MRI scans to examine the overall volume and shapes of brains among heterosexual and homosexual participants.", answer: "TRUE" },
  { id: 49, question: "According to chromosomal influences, females are identified by the XY chromosome combination.", answer: "FALSE" },
  { id: 50, question: "The three subtopics under Biological Theories of Gender are Evolutionary Psychology, Brain Research, and Sex Hormones.", answer: "TRUE" },
];

function Lesson2({ setActiveLesson }) {
  const [mcAnswers, setMcAnswers] = useState({});
  const [idAnswers, setIdAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(null);
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);
  const [error, setError] = useState("");

  const mcRefs = useRef({});
  const idRefs = useRef({});
  const tfRefs = useRef({});

  const handleMcChange = (id, value) => setMcAnswers((prev) => ({ ...prev, [id]: value }));
  const handleIdChange = (id, value) => setIdAnswers((prev) => ({ ...prev, [id]: value }));
  const handleTfChange = (id, value) => setTfAnswers((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = () => {
    const unansweredMC = multipleChoice.filter((q) => !mcAnswers[q.id]);
    const unansweredID = identification.filter((q) => !idAnswers[q.id]?.trim());
    const unansweredTF = trueFalse.filter((q) => !tfAnswers[q.id]);

    if (unansweredMC.length > 0 || unansweredID.length > 0 || unansweredTF.length > 0) {
      setError("Please answer all questions before submitting.");

      let firstRef = null;
      if (unansweredMC[0]) firstRef = mcRefs.current[unansweredMC[0].id];
      else if (unansweredID[0]) firstRef = idRefs.current[unansweredID[0].id];
      else if (unansweredTF[0]) firstRef = tfRefs.current[unansweredTF[0].id];

      if (firstRef) firstRef.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setError("");
    let correct = 0;
    multipleChoice.forEach((q) => { if (mcAnswers[q.id] === q.answer) correct++; });
    identification.forEach((q) => { if (idAnswers[q.id]?.trim().toLowerCase() === q.answer.toLowerCase()) correct++; });
    trueFalse.forEach((q) => { if (tfAnswers[q.id]?.trim().toUpperCase() === q.answer) correct++; });
    setScore(correct);
    setShowModal(true);
    setShowWrongAnswers(false);
  };

  const handleRetake = () => {
    setMcAnswers({});
    setIdAnswers({});
    setTfAnswers({});
    setScore(null);
    setShowModal(false);
    setShowWrongAnswers(false);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextLesson = () => {
    setShowModal(false);
    setActiveLesson(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowWrongAnswers(false);
  };

  const totalQuestions = multipleChoice.length + identification.length + trueFalse.length;
  const wrongMC = multipleChoice.filter((q) => mcAnswers[q.id] !== q.answer);
  const wrongID = identification.filter((q) => idAnswers[q.id]?.trim().toLowerCase() !== q.answer.toLowerCase());
  const wrongTF = trueFalse.filter((q) => tfAnswers[q.id]?.trim().toUpperCase() !== q.answer);

  const buttonStyle = { borderColor: "#a855f7", color: "#fff", backgroundColor: "#a855f7" };
  const buttonHoverOn = (e) => { e.currentTarget.style.backgroundColor = "#9333ea"; e.currentTarget.style.borderColor = "#9333ea"; };
  const buttonHoverOff = (e) => { e.currentTarget.style.backgroundColor = "#a855f7"; e.currentTarget.style.borderColor = "#a855f7"; };

  return (
    <div className="flex-1 p-8 min-h-screen relative"
     style={{
    background: "linear-gradient(135deg, #fdf4ff 0%, #f5f0ff 40%, #fce7f3 100%)",
  }}>

      <h1 className="text-xl font-bold mb-8" style={{ color: "#a855f7" }}>Lesson 2: Theories of Gender Development in Women and Men Long Quiz</h1>

      {/* PART I - Multiple Choice */}
      <h2 className="text-sm font-bold uppercase tracking-widest mb-1 text-gray-500">Part I: Multiple Choice</h2>
      <p className="text-xs text-gray-400 mb-4">Directions: Choose the letter of the best answer.</p>
      <div className="flex flex-col gap-6 mb-10">
        {multipleChoice.map((q, index) => (
          <div key={q.id} ref={(el) => (mcRefs.current[q.id] = el)}>
            <p className="text-sm font-medium text-gray-700 mb-2">{index + 1}. {q.question}</p>
            <div className="flex flex-col gap-1 w-full">
              {q.options.map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer w-full">
                  <input
                    type="radio"
                    name={`mc-${q.id}`}
                    value={option.charAt(0)}
                    checked={mcAnswers[q.id] === option.charAt(0)}
                    onChange={() => handleMcChange(q.id, option.charAt(0))}
                    className="accent-purple-500"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PART II - Identification */}
      <h2 className="text-sm font-bold uppercase tracking-widest mb-1 text-gray-500">Part II: Identification</h2>
      <p className="text-xs text-gray-400 mb-4">Directions: Identify what is being described in each item.</p>
      <div className="flex flex-col gap-6 mb-10">
        {identification.map((q, index) => (
          <div key={q.id} ref={(el) => (idRefs.current[q.id] = el)}>
            <p className="text-sm font-medium text-gray-700 mb-2">{index + 26}. {q.question}</p>
            <input
              type="text"
              value={idAnswers[q.id] || ""}
              onChange={(e) => handleIdChange(q.id, e.target.value)}
              placeholder="Your answer..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full max-w-md outline-none focus:border-purple-400 transition-all duration-200"
            />
          </div>
        ))}
      </div>

      {/* PART III - True or False */}
      <h2 className="text-sm font-bold uppercase tracking-widest mb-1 text-gray-500">Part III: True or False</h2>
      <p className="text-xs text-gray-400 mb-4">Directions: Write TRUE if the statement is correct and FALSE if it is incorrect.</p>
      <div className="flex flex-col gap-6 mb-10">
        {trueFalse.map((q, index) => (
          <div key={q.id} ref={(el) => (tfRefs.current[q.id] = el)}>
            <p className="text-sm font-medium text-gray-700 mb-2">{index + 46}. {q.question}</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="radio" name={`tf-${q.id}`} value="TRUE" checked={tfAnswers[q.id] === "TRUE"} onChange={() => handleTfChange(q.id, "TRUE")} className="accent-purple-500" />
                True
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="radio" name={`tf-${q.id}`} value="FALSE" checked={tfAnswers[q.id] === "FALSE"} onChange={() => handleTfChange(q.id, "FALSE")} className="accent-purple-500" />
                False
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Error Message + Submit Button */}
      <div className="flex flex-col items-end gap-2 mt-6">
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button
          onClick={handleSubmit}
          className="text-sm font-semibold px-5 py-2 rounded-md border transition-all duration-200 cursor-pointer"
          style={buttonStyle}
          onMouseEnter={buttonHoverOn}
          onMouseLeave={buttonHoverOff}
        >
          Submit
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 w-full max-w-lg md:max-w-2xl flex flex-col items-center gap-5"
            style={{ position: "relative" }}
          >

            {/* X Close Button */}
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#f3f4f6",
                color: "#6b7280",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#e9d5ff"; e.currentTarget.style.color = "#a855f7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f3f4f6"; e.currentTarget.style.color = "#6b7280"; }}
            >
              ✕
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-center" style={{ color: "#a855f7" }}>Results</h2>

            {!showWrongAnswers ? (
              <>
                <p className="text-gray-600 text-base md:text-lg text-center">
                  Your Score: <span className="font-bold" style={{ color: "#a855f7" }}>{score} / {totalQuestions}</span>
                </p>
                <div className="flex gap-6">
                  <p className="text-base md:text-lg text-gray-500">✅ Correct: {score}</p>
                  <p className="text-base md:text-lg text-gray-500">❌ Incorrect: {totalQuestions - score}</p>
                </div>

                <button
                  onClick={() => setShowWrongAnswers(true)}
                  className="w-full text-sm md:text-base font-semibold px-5 py-2.5 rounded-md border transition-all duration-200 cursor-pointer"
                  style={buttonStyle}
                  onMouseEnter={buttonHoverOn}
                  onMouseLeave={buttonHoverOff}
                >
                  Review Wrong Answers
                </button>

                <div className="flex gap-3 w-full">
                  <button
                    onClick={handleRetake}
                    className="flex-1 text-sm md:text-base font-semibold px-5 py-2.5 rounded-md border transition-all duration-200 cursor-pointer"
                    style={buttonStyle}
                    onMouseEnter={buttonHoverOn}
                    onMouseLeave={buttonHoverOff}
                  >
                    Retake
                  </button>
                  <button
                    onClick={handleNextLesson}
                    className="flex-1 text-sm md:text-base font-semibold px-5 py-2.5 rounded-md border transition-all duration-200 cursor-pointer"
                    style={buttonStyle}
                    onMouseEnter={buttonHoverOn}
                    onMouseLeave={buttonHoverOff}
                  >
                    Continue to Lesson 3 →
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-4 w-full max-h-96 md:max-h-[500px] overflow-y-auto">
                  {wrongMC.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase text-gray-400 mb-2">Multiple Choice</p>
                      {wrongMC.map((q) => (
                        <div key={q.id} className="mb-3">
                          <p className="text-sm md:text-base font-medium text-gray-700">{q.id}. {q.question}</p>
                          <p className="text-sm md:text-base text-red-400">Your answer: {mcAnswers[q.id] || "No answer"}</p>
                          <p className="text-sm md:text-base text-green-500">Correct answer: {q.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {wrongID.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase text-gray-400 mb-2">Identification</p>
                      {wrongID.map((q) => (
                        <div key={q.id} className="mb-3">
                          <p className="text-sm md:text-base font-medium text-gray-700">{q.id}. {q.question}</p>
                          <p className="text-sm md:text-base text-red-400">Your answer: {idAnswers[q.id] || "No answer"}</p>
                          <p className="text-sm md:text-base text-green-500">Correct answer: {q.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {wrongTF.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase text-gray-400 mb-2">True or False</p>
                      {wrongTF.map((q) => (
                        <div key={q.id} className="mb-3">
                          <p className="text-sm md:text-base font-medium text-gray-700">{q.id}. {q.question}</p>
                          <p className="text-sm md:text-base text-red-400">Your answer: {tfAnswers[q.id] || "No answer"}</p>
                          <p className="text-sm md:text-base text-green-500">Correct answer: {q.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {wrongMC.length === 0 && wrongID.length === 0 && wrongTF.length === 0 && (
                    <p className="text-sm md:text-base text-gray-500 text-center">🎉 No wrong answers!</p>
                  )}
                </div>
                <button
                  onClick={() => setShowWrongAnswers(false)}
                  className="w-full text-sm md:text-base font-semibold px-5 py-2.5 rounded-md border transition-all duration-200 cursor-pointer"
                  style={buttonStyle}
                  onMouseEnter={buttonHoverOn}
                  onMouseLeave={buttonHoverOff}
                >
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Lesson2;