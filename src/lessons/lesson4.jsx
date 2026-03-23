import React, { useState, useRef } from "react";

const multipleChoice = [
  {
    id: 1,
    question: "Which of the following are the three Social Theories on Gender discussed in the lesson?",
    options: ["A. Evolutionary Psychology, Brain Research, Sex Hormones", "B. Structural Functionalist Theory, Symbolic Interactionism, Gender Conflict Theory", "C. Liberal Feminism, Socialist Feminism, Radical Feminism", "D. Individualism, Collectivism, Cultural Variations"],
    answer: "B",
  },
  {
    id: 2,
    question: "Structural Functionalist Theory understands human behavior as:",
    options: ["A. A product of individual choices and free will", "B. Part of systems that help keep society organized and functioning", "C. A reflection of biological characteristics", "D. A result of conflict between dominant and subordinate groups"],
    answer: "B",
  },
  {
    id: 3,
    question: "According to Structural Functionalist Theory, a gendered division of labor is considered:",
    options: ["A. Oppressive and unjust", "B. A result of capitalism", "C. Functional", "D. A cultural variation"],
    answer: "C",
  },
  {
    id: 4,
    question: "In a sociology class, a professor explains that in many households, fathers are expected to be the breadwinners while mothers manage childcare and domestic responsibilities. The professor argues this arrangement exists not because of oppression, but because it allows the family unit to run smoothly and remain stable. Which social theory best supports the professor's argument?",
    options: ["A. Gender Conflict Theory", "B. Radical Feminism", "C. Structural Functionalist Theory", "D. Symbolic Interactionism"],
    answer: "C",
  },
  {
    id: 5,
    question: "According to the lesson, Symbolic Interaction Theory is especially useful for those seeking to understand:",
    options: ["A. The economic roots of gender inequality", "B. The biological basis of gender differences", "C. The social significance of sex and gender", "D. The political structures that enforce gender norms"],
    answer: "C",
  },
  {
    id: 6,
    question: "Gender Conflict Theory views gender as:",
    options: ["A. A biological fact that determines social roles", "B. A cultural tradition that varies across societies", "C. A structural system that distributes power and privilege to some and disadvantage to others", "D. A personal choice with no social consequences"],
    answer: "C",
  },
  {
    id: 7,
    question: "Which of the following concepts are associated with Gender Conflict Theory?",
    options: ["A. Division of labor and complementary traits", "B. Individualism and collectivism", "C. Intersectionality and Feminism", "D. Brain research and sex hormones"],
    answer: "C",
  },
  {
    id: 8,
    question: "Feminism, as defined in the lesson, is:",
    options: ["A. The belief that women are superior to men", "B. The support of social equality for all genders, in opposition to patriarchy and sexism", "C. A political movement focused only on voting rights", "D. The rejection of all gender identities"],
    answer: "B",
  },
  {
    id: 9,
    question: "Liberal Feminism is associated with which of the following in the lesson?",
    options: ["A. Eliminating gender entirely", "B. Viewing capitalism as the root of patriarchy", "C. Advocating for laws such as expanded maternity leave and pro-worker bills", "D. Rejecting all forms of government regulation"],
    answer: "C",
  },
  {
    id: 10,
    question: "Socialist Feminism views which economic system as the foundation of patriarchy?",
    options: ["A. Feudalism", "B. Socialism", "C. Capitalism", "D. Mercantilism"],
    answer: "C",
  },
  {
    id: 11,
    question: "A women's rights advocate argues that the root cause of gender inequality is not simply culture or biology, but the economic system itself — specifically the way it allows the wealthy to exploit both workers and women to maintain power. She calls for full economic restructuring as the solution. Which strand of feminism best represents her position?",
    options: ["A. Liberal Feminism", "B. Radical Feminism", "C. Socialist Feminism", "D. Cultural Feminism"],
    answer: "C",
  },
  {
    id: 12,
    question: "Radical Feminism argues that to reach gender equality, society must:",
    options: ["A. Reform existing laws gradually", "B. Promote liberal economic policies", "C. Eliminate gender as we know it", "D. Embrace traditional family structures"],
    answer: "C",
  },
  {
    id: 13,
    question: "Anthropologist Marvin Harris traced the origins of male domination to:",
    options: ["A. Chromosomal differences between males and females", "B. The imperatives of warfare in primitive society", "C. The social construction of gender through media", "D. The division of labor in industrial societies"],
    answer: "B",
  },
  {
    id: 14,
    question: "According to Marvin Harris, male dominance is LOWER when:",
    options: ["A. Men control political and ideological resources", "B. Women are restricted from the workforce", "C. Men and women work together", "D. Societies adopt capitalist systems"],
    answer: "C",
  },
  {
    id: 15,
    question: "According to Marvin Harris, male dominance is MORE PRONOUNCED when:",
    options: ["A. Women participate equally in decision-making", "B. Men and women share domestic responsibilities", "C. Men control political and ideological resources", "D. Societies adopt collectivist values"],
    answer: "C",
  },
  {
    id: 16,
    question: "Which of the following thinkers discussed private property and the materialism of male domination?",
    options: ["A. Talcott Parsons", "B. Marvin Harris", "C. Friedrich Engels", "D. Edward Wilson"],
    answer: "C",
  },
  {
    id: 17,
    question: "Friedrich Engels' contribution to the topic of gender differentiation is summarized in the lesson as:",
    options: ["A. Tracing male domination to warfare", "B. Arguing that boys and girls need complementary traits", "C. \"Owning Women\" — linking private property to male domination over women", "D. Advocating for full economic equality"],
    answer: "C",
  },
  {
    id: 18,
    question: "Which of the following is NOT listed as a Gender Cultural Practice in the lesson?",
    options: ["A. Female genital mutilation", "B. Sex bias", "C. Selective abortion", "D. Symbolic interactionism"],
    answer: "D",
  },
  {
    id: 19,
    question: "The four Gender Cultural Practices discussed in the lesson are:",
    options: ["A. Warfare, dowry, feminism, intersectionality", "B. Female genital mutilation, sex bias, selective abortion, dowry", "C. Collectivism, individualism, cultural norms, cultural variations", "D. Liberal feminism, socialist feminism, radical feminism, intersectionality"],
    answer: "B",
  },
  {
    id: 20,
    question: "In a certain community, families who cannot afford a large dowry payment are pressured to abort female fetuses to avoid financial burden during future marriage arrangements. A sociologist studying this practice would most likely classify it under which gender cultural practice?",
    options: ["A. Sex bias", "B. Dowry", "C. Selective abortion / Female Foeticide", "D. Female genital mutilation"],
    answer: "C",
  },
  {
    id: 21,
    question: "The Cultural Influences section of the lesson identifies which of the following subtopics?",
    options: ["A. Warfare, capitalism, private property", "B. Individualism, collectivism, our norms, cultural variations, culture", "C. Liberal feminism, socialist feminism, radical feminism", "D. Division of labor, intersectionality, feminism"],
    answer: "B",
  },
  {
    id: 22,
    question: "In the context of Cultural Influences, \"collectivism\" refers to:",
    options: ["A. The belief that individual rights override group interests", "B. A cultural orientation that prioritizes the group over the individual", "C. The elimination of cultural traditions", "D. A feminist approach to economic equality"],
    answer: "B",
  },
  {
    id: 23,
    question: "The pre-lesson activity in this topic asked students to guess the gender of a person based on:",
    options: ["A. Their physical appearance and chromosomes", "B. Occupation, relationship status, hobbies, tastes, and interests", "C. Their age and biological sex", "D. Their educational background only"],
    answer: "B",
  },
  {
    id: 24,
    question: "The purpose of the pre-lesson guessing activity was to:",
    options: ["A. Measure students' knowledge of biology", "B. Demonstrate that gender cannot be guessed", "C. Raise awareness of gender stereotyping in our thinking", "D. Teach students about cultural variations in gender"],
    answer: "C",
  },
  {
    id: 25,
    question: "Ana is a Black woman working in a corporation. She notices that she faces workplace discrimination not only because she is a woman, but also because of her race and economic background — experiencing multiple layers of disadvantage that her white female colleagues do not face. Which concept under Gender Conflict Theory best explains Ana's situation?",
    options: ["A. Division of labor", "B. Intersectionality", "C. Radical Feminism", "D. Cultural variation"],
    answer: "B",
  },
];

const identification = [
  { id: 26, question: "The three Social Theories on Gender discussed in this lesson.", answer: "Structural Functionalist Theory, Symbolic Interactionism, Gender Conflict Theory" },
  { id: 27, question: "The social theory that understands human behavior as part of systems that help keep society organized and functioning.", answer: "Structural Functionalist Theory" },
  { id: 28, question: "The sociologist associated with Structural Functionalist Theory who argued that boys and girls are socialized to take on complementary traits to maintain stable productive family units.", answer: "Talcott Parsons" },
  { id: 29, question: "The key concept within Structural Functionalist Theory that refers to the assignment of different tasks and roles to different genders.", answer: "Division of Labor" },
  { id: 30, question: "The social theory described in the lesson as very useful for understanding the social significance of sex and gender.", answer: "Symbolic Interactionism" },
  { id: 31, question: "The social theory that views gender as a structural system distributing power and privilege to some and disadvantage to others.", answer: "Gender Conflict Theory" },
  { id: 32, question: "The two key concepts associated with Gender Conflict Theory as listed in the lesson.", answer: "Intersectionality and Feminism" },
  { id: 33, question: "The definition of feminism as given in the lesson.", answer: "The support of social equality for all genders, in opposition to patriarchy and sexism" },
  { id: 34, question: "The strand of feminism associated with advocating for legal and policy changes such as expanded maternity leave and pro-worker bills.", answer: "Liberal Feminism" },
  { id: 35, question: "The strand of feminism that views capitalism as the foundation of patriarchy and advocates for full economic equality in the socialist tradition.", answer: "Socialist Feminism" },
  { id: 36, question: "The strand of feminism that argues society must eliminate gender entirely to achieve gender equality.", answer: "Radical Feminism" },
  { id: 37, question: "The anthropologist who traced the origins of male domination to the imperatives of warfare in primitive society.", answer: "Marvin Harris" },
  { id: 38, question: "According to Marvin Harris, male dominance is lower when this condition exists.", answer: "When men and women work together" },
  { id: 39, question: "According to Marvin Harris, male dominance is more pronounced when men control these two types of resources.", answer: "Political and ideological resources" },
  { id: 40, question: "The thinker associated with private property and the materialism of male domination, discussed under the concept of \"Owning Women.\"", answer: "Friedrich Engels" },
  { id: 41, question: "The four Gender Cultural Practices identified in the lesson.", answer: "Female genital mutilation, Sex bias, Selective abortion, Dowry" },
  { id: 42, question: "The gender cultural practice also referred to as \"Female Foeticide\" in the lesson.", answer: "Selective Abortion / Female Foeticide" },
  { id: 43, question: "The five subtopics listed under Cultural Influences in this lesson.", answer: "Individualism, Collectivism, Our norms, Cultural Variations, Culture" },
  { id: 44, question: "The cultural orientation that prioritizes individual rights and independence over group belonging.", answer: "Individualism" },
  { id: 45, question: "The cultural orientation that prioritizes the group and collective well-being over the individual.", answer: "Collectivism" },
];

const trueFalse = [
  { id: 46, question: "Structural Functionalist Theory argues that a gendered division of labor is functional for society.", answer: "TRUE" },
  { id: 47, question: "Talcott Parsons argued that boys and girls should be socialized identically to achieve gender equality.", answer: "FALSE" },
  { id: 48, question: "Gender Conflict Theory views gender as a structural system that distributes power and privilege unequally.", answer: "TRUE" },
  { id: 49, question: "Radical Feminism advocates for gradual legal reforms as the primary path to achieving gender equality.", answer: "FALSE" },
  { id: 50, question: "According to Marvin Harris, male dominance is more pronounced when men control political and ideological resources.", answer: "TRUE" },
];

function Lesson4({ setActiveLesson }) {
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
    setActiveLesson(5);
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

      <h1 className="text-xl font-bold mb-8" style={{ color: "#a855f7" }}>Lesson 4: The Social And Anthropological Construction Of Gender Long Quiz</h1>

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
                    Continue to Lesson 5 →
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

export default Lesson4;