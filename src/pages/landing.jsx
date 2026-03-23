import React, { useState, useRef } from "react";

const multipleChoice = [
  {
    id: 1,
    question: "Which of the following BEST describes the term \"sex\"?",
    options: ["A. The social roles and behaviors expected of men and women", "B. The biological characteristics including hormones, chromosomes, and genitalia", "C. How a person identifies themselves in relation to social roles", "D. The way a person physically communicates their gender identity"],
    answer: "B",
  },
  {
    id: 2,
    question: "What does \"gender\" refer to according to the lesson?",
    options: ["A. The chromosomal makeup of a person", "B. The physical anatomy assigned at birth", "C. How a person identifies in relation to normalized social roles, behaviors, and attributes", "D. The sexual orientation of an individual"],
    answer: "C",
  },
  {
    id: 3,
    question: "Maria grew up in a province where she was taught that women should stay home and care for the family, while men go out to work. She later discovered these expectations differ across countries. What concept does this best illustrate?",
    options: ["A. Biological determinism", "B. Social construction of gender", "C. Symbolic interactionism", "D. Sexual orientation"],
    answer: "B",
  },
  {
    id: 4,
    question: "Which type of status is obtained involuntarily or by birth?",
    options: ["A. Achieved status", "B. Ascribed status", "C. Master status", "D. Occupational status"],
    answer: "B",
  },
  {
    id: 5,
    question: "A person who earns a college degree is an example of:",
    options: ["A. Ascribed status", "B. Achieved status", "C. Inherited status", "D. Natural status"],
    answer: "B",
  },
  {
    id: 6,
    question: "At a family gathering, a young man greets every elder with \"po\" and \"opo.\" No law requires this — he simply learned it growing up. What type of social norm is this?",
    options: ["A. Law", "B. Taboo", "C. Folkway", "D. More"],
    answer: "C",
  },
  {
    id: 7,
    question: "Which type of social norm is formally inscribed at the state or federal level?",
    options: ["A. Folkway", "B. More", "C. Taboo", "D. Law"],
    answer: "D",
  },
  {
    id: 8,
    question: "Violating a taboo results in:",
    options: ["A. A mild social correction", "B. Extreme disgust or social rejection", "C. Legal punishment only", "D. Praise from the community"],
    answer: "B",
  },
  {
    id: 9,
    question: "During lunch, Ramon's officemate eats food normally reserved only for funerals. Everyone in the room looks visibly disturbed and uncomfortable. What type of social norm is most likely being violated?",
    options: ["A. Folkway", "B. Law", "C. More", "D. Taboo"],
    answer: "D",
  },
  {
    id: 10,
    question: "Gender expression refers to:",
    options: ["A. A person's chromosomal sex", "B. Who a person is romantically attracted to", "C. The way a person physically communicates their gender identity", "D. The legal identity assigned at birth"],
    answer: "C",
  },
  {
    id: 11,
    question: "Which of the following is NOT one of the key gender-related concepts discussed in the lesson?",
    options: ["A. Gender identity", "B. Gender expression", "C. Gender fluency", "D. Gender role"],
    answer: "C",
  },
  {
    id: 12,
    question: "The social construction of gender means that:",
    options: ["A. Gender is determined solely by biology", "B. Gender roles are fixed and universal", "C. Gender is created and maintained through social interactions and cultural practices", "D. Only women construct gender identities"],
    answer: "C",
  },
  {
    id: 13,
    question: "Which sociological theory views society as a set of interrelated parts working together to produce stability?",
    options: ["A. Conflict Theory", "B. Symbolic Interactionism", "C. Functionalist Theory", "D. Feminist Theory"],
    answer: "C",
  },
  {
    id: 14,
    question: "Ana notices that in her workplace, male colleagues are consistently promoted faster than equally qualified female colleagues. A sociologist analyzing this pattern would most likely use which theory?",
    options: ["A. Functionalist Theory", "B. Symbolic Interactionism", "C. Conflict Theory", "D. Feminist Theory"],
    answer: "C",
  },
  {
    id: 15,
    question: "Symbolic Interactionism focuses on:",
    options: ["A. The economic roots of gender inequality", "B. How gender roles contribute to social stability", "C. Everyday interactions and the symbolic meanings people attach to them", "D. The political empowerment of women"],
    answer: "C",
  },
  {
    id: 16,
    question: "Feminist theories primarily focus on:",
    options: ["A. Economic competition between social classes", "B. The social, economic, and political position of women and men in society", "C. How symbols reinforce gender norms", "D. The biological determinism of gender"],
    answer: "B",
  },
  {
    id: 17,
    question: "Which social institution is considered the PRIMARY agent of gender socialization?",
    options: ["A. Media", "B. Education", "C. Family", "D. Workplace"],
    answer: "C",
  },
  {
    id: 18,
    question: "A school encouraging boys to lead sports and girls to lead arts and crafts is an example of:",
    options: ["A. Biological determinism", "B. Gender-typed socialization in education", "C. Patriarchal law enforcement", "D. Symbolic interaction in the workplace"],
    answer: "B",
  },
  {
    id: 19,
    question: "Patriarchy is best described as:",
    options: ["A. A society where women hold most of the political power", "B. A social system in which men hold primary power in social, political, and economic life", "C. Equal distribution of power between men and women", "D. A government run by the elderly"],
    answer: "B",
  },
  {
    id: 20,
    question: "Since childhood, Carlo was always told by his parents that boys don't cry and must be the strong, silent provider of the family. Which of the following best describes what Carlo is experiencing?",
    options: ["A. Ascribed status assignment", "B. Gender socialization within the family", "C. Symbolic interactionism in the workplace", "D. Conflict theory in practice"],
    answer: "B",
  },
  {
    id: 21,
    question: "Gender identity refers to:",
    options: ["A. The physical attributes of a person", "B. An individual's internal sense of their own gender", "C. The gender role a society assigns to a person", "D. A person's sexual orientation"],
    answer: "B",
  },
  {
    id: 22,
    question: "Which of the following best illustrates the concept of the Sociological Imagination?",
    options: ["A. A man who dresses in feminine clothing for self-expression", "B. A woman experiencing workplace discrimination as a reflection of systemic gender inequality", "C. A child choosing their own toys", "D. A teacher assigning homework"],
    answer: "B",
  },
  {
    id: 23,
    question: "According to the lesson's gender stereotypes table, women are often stereotyped as:",
    options: ["A. Highly competent and assertive", "B. Fast decision-makers", "C. Indecisive and incompetent", "D. Strong organizational leaders"],
    answer: "C",
  },
  {
    id: 24,
    question: "Which of the following refers to who a person is attracted to physically, emotionally, or romantically?",
    options: ["A. Gender identity", "B. Gender expression", "C. Sexual orientation", "D. Biological sex"],
    answer: "C",
  },
  {
    id: 25,
    question: "In a sociology class, a student argues that pink is \"for girls\" and blue is \"for boys.\" Her professor responds that these color associations were not always gendered and vary across cultures. The professor's point best supports which claim?",
    options: ["A. Gender is biologically fixed", "B. Gender is a social construct", "C. Gender roles are universal and unchanging", "D. Biology determines all gender behavior"],
    answer: "B",
  },
];

const identification = [
  { id: 26, question: "This sociologist introduced the concept of the Sociological Imagination, connecting personal troubles with public issues.", answer: "C. Wright Mills" },
  { id: 27, question: "A position in a social system that one attains involuntarily or by birth.", answer: "Ascribed Status" },
  { id: 28, question: "A position earned through merit or personal choices.", answer: "Achieved Status" },
  { id: 29, question: "The type of social norm that stems from and organizes casual interactions.", answer: "Folkway" },
  { id: 30, question: "The type of social norm that is formally inscribed at the state or federal level.", answer: "Law" },
  { id: 31, question: "A strong negative norm whose violation results in extreme disgust from society.", answer: "Taboo" },
  { id: 32, question: "The biological characteristics of a person, typically designated by hormones, chromosomes, and genitalia.", answer: "Sex" },
  { id: 33, question: "An individual's internal, personal sense of their own gender.", answer: "Gender Identity" },
  { id: 34, question: "The way a person physically communicates their gender identity through appearance and behavior.", answer: "Gender Expression" },
  { id: 35, question: "The set of behaviors, activities, and attributes that society considers appropriate for a particular gender.", answer: "Gender Role" },
  { id: 36, question: "Lena was born into a wealthy and influential family in her city. Without any personal effort, she is automatically regarded as someone of high social standing. What type of status does Lena hold?", answer: "Ascribed Status" },
  { id: 37, question: "The sociological theory that argues society is characterized by competition and dominance of some groups over others.", answer: "Conflict Theory" },
  { id: 38, question: "The sociological theory that focuses on how people use symbols and everyday interactions to understand the world around them.", answer: "Symbolic Interactionism" },
  { id: 39, question: "A body of theories that explain the social, economic, and political position of women and men in society, focusing on gender issues.", answer: "Feminist Theories" },
  { id: 40, question: "A social system in which men hold primary power and predominate in roles of political leadership, moral authority, and social privilege.", answer: "Patriarchy" },
  { id: 41, question: "The social institution considered the primary agent of gender socialization where children first learn gender roles.", answer: "Family" },
  { id: 42, question: "The process by which society assigns meanings, roles, and behaviors to individuals based on their perceived gender.", answer: "Social Construction of Gender" },
  { id: 43, question: "The type of social norm that structures the difference between right and wrong.", answer: "Mores" },
  { id: 44, question: "The field of sociology that examines how gender shapes human behavior, relationships, and social structures.", answer: "Sociology of Gender" },
  { id: 45, question: "Since she was a child, Dana has always felt attracted to both men and women. This aspect of her identity — who she is drawn to emotionally and romantically — is referred to as what?", answer: "Sexual Orientation" },
];

const trueFalse = [
  { id: 46, question: "Sex and gender are the same concept and can be used interchangeably.", answer: "FALSE" },
  { id: 47, question: "C. Wright Mills introduced the concept of the Sociological Imagination.", answer: "TRUE" },
  { id: 48, question: "An ascribed status is a position one earns through merit or personal choices.", answer: "FALSE" },
  { id: 49, question: "Jun was raised in a household where his parents treated his brother and sister exactly the same — giving them the same chores, toys, and opportunities regardless of gender. This means Jun grew up in an environment that challenges traditional gender socialization.", answer: "TRUE" },
  { id: 50, question: "According to Conflict Theory, gender inequality is a product of social competition and power imbalances, not a natural occurrence.", answer: "TRUE" },
];

function LandingPage({ setActiveLesson }) {
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
    setActiveLesson(2);
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
  }}
  >
      
      <h1 className="text-xl font-bold mb-8" style={{ color: "#a855f7" }}>Lesson 1: Understanding Gender Concepts And Social Structure Long Quiz</h1>

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
                    Continue to Lesson 2 →
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

export default LandingPage;