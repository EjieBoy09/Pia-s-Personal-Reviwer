import React, { useState, useRef } from "react";

const multipleChoice = [
  {
    id: 1,
    question: "The term \"gender systems\" is used in conjunction with which of the following concepts?",
    options: ["A. Individualism and collectivism", "B. Gender order and gender power order", "C. Liberal feminism and radical feminism", "D. Division of labor and occupational segregation"],
    answer: "B",
  },
  {
    id: 2,
    question: "Gender systems describe the structures and processes that:",
    options: ["A. Promote equality between men and women", "B. Explain biological differences between the sexes", "C. Generate and uphold gender inequality in society", "D. Define cultural variations in gender expression"],
    answer: "C",
  },
  {
    id: 3,
    question: "According to the lesson, gender systems are based on two principles. What are they?",
    options: ["A. Feminism and intersectionality", "B. Division of labor and male dominance", "C. The separation of genders and male superiority", "D. Gender norms and cultural beliefs"],
    answer: "C",
  },
  {
    id: 4,
    question: "The separation of genders as a principle of the gender system is best illustrated by:",
    options: ["A. The existence of matriarchal societies", "B. Professions being split along gender lines", "C. Equal representation in the government", "D. Women holding the majority of political offices"],
    answer: "B",
  },
  {
    id: 5,
    question: "Based on the infographic in the lesson, which profession had the HIGHEST percentage of male workers?",
    options: ["A. Metal workers at 96%", "B. Drivers and mobile plant operators at 96%", "C. Builders at 97%", "D. Science and engineering technicians at 83%"],
    answer: "C",
  },
  {
    id: 6,
    question: "Based on the infographic, which profession had the highest percentage of female workers?",
    options: ["A. Teachers at 71%", "B. Office clerks at 80%", "C. Cleaners at 84%", "D. Personal carers at 89%"],
    answer: "D",
  },
  {
    id: 7,
    question: "Male superiority as a principle of the gender system is reflected in which of the following?",
    options: ["A. Women holding the majority of economic and political positions of power", "B. Institutional systems of patriarchy, majority of governmental representation by men, and economic and political positions of power held by men", "C. Equal distribution of governmental seats between men and women", "D. The elimination of gender norms in public life"],
    answer: "B",
  },
  {
    id: 8,
    question: "According to the lesson, patriarchy is sustained through which of the following?",
    options: ["A. Economic competition and biological evolution", "B. Gender norms, cultural beliefs, institutional policies, and social rewards and punishments", "C. Educational achievement and intellectual superiority", "D. Cultural variations and individualism"],
    answer: "B",
  },
  {
    id: 9,
    question: "In a barangay, a young woman is discouraged by her family from running for local office because \"politics is a man's world.\" Her church reinforces this belief in its teachings, and the local government has no policies protecting women's political participation. This situation is best described as an example of:",
    options: ["A. Cultural variation in gender expression", "B. Patriarchy being sustained through gender norms, cultural beliefs, and institutional policies", "C. Individualism overriding collective values", "D. The separation of genders as a biological principle"],
    answer: "B",
  },
  {
    id: 10,
    question: "According to the table in the lesson, how does the FAMILY shape gender roles?",
    options: ["A. Through subject tracking and teacher expectations", "B. Through division of labor and caregiving roles", "C. Through moral teachings on gender behavior", "D. Through occupational segregation"],
    answer: "B",
  },
  {
    id: 11,
    question: "According to the table, how does EDUCATION shape gender roles?",
    options: ["A. Through division of labor and caregiving roles", "B. Through occupational segregation", "C. Through policies affecting gender rights", "D. Through subject tracking and teacher expectations"],
    answer: "D",
  },
  {
    id: 12,
    question: "According to the table, how does RELIGION shape gender roles?",
    options: ["A. Through gender stereotypes and representations", "B. Through occupational segregation", "C. Through moral teachings on gender behavior", "D. Through division of labor and caregiving roles"],
    answer: "C",
  },
  {
    id: 13,
    question: "According to the table, the Economy and Work shape gender roles through:",
    options: ["A. Subject tracking", "B. Moral teachings", "C. Occupational segregation", "D. Policies affecting gender rights"],
    answer: "C",
  },
  {
    id: 14,
    question: "According to the table, the MEDIA shapes gender roles through:",
    options: ["A. Division of labor and caregiving roles", "B. Moral teachings on gender behavior", "C. Subject tracking and teacher expectations", "D. Gender stereotypes and representations"],
    answer: "D",
  },
  {
    id: 15,
    question: "According to the table, GOVERNMENT and LAW shape gender roles through:",
    options: ["A. Gender stereotypes and representations", "B. Policies affecting gender rights", "C. Occupational segregation", "D. Moral teachings on gender behavior"],
    answer: "B",
  },
  {
    id: 16,
    question: "The Sociology of Gender is defined in the lesson as the study of:",
    options: ["A. The biological differences between males and females", "B. How society influences understandings and differences between masculinity and femininity", "C. How governments create laws that enforce gender roles", "D. The psychological development of gender identity"],
    answer: "B",
  },
  {
    id: 17,
    question: "Which of the following is identified in the lesson as a manifestation of male superiority?",
    options: ["A. Equal representation of men and women in government", "B. Women holding majority of governmental representation", "C. Glass ceiling in professional jobs", "D. Increased reproductive freedom for all genders"],
    answer: "C",
  },
  {
    id: 18,
    question: "Clara has been working in a large corporation for 15 years and consistently outperforms her male colleagues. Despite her qualifications and track record, she has been passed over for senior executive positions multiple times, while less experienced male coworkers are promoted ahead of her. Which concept from the lesson best explains the barrier Clara is experiencing?",
    options: ["A. Occupational segregation", "B. Gender order", "C. Glass ceiling", "D. Collectivism"],
    answer: "C",
  },
  {
    id: 19,
    question: "Which of the following is listed under the advantages men hold on the male superiority scale in the lesson?",
    options: ["A. Perceived weakness and frailty", "B. Lack of positive representation in media", "C. Perceived moral and intellectual superiority", "D. Slut shaming"],
    answer: "C",
  },
  {
    id: 20,
    question: "Which of the following is listed as a disadvantage women face under male superiority in the lesson?",
    options: ["A. Majority of governmental representation", "B. Economic and political positions of power", "C. Institutional systems of patriarchy", "D. Sexual and domestic abuse"],
    answer: "D",
  },
  {
    id: 21,
    question: "Rape culture, as presented in the lesson, is an example of:",
    options: ["A. A natural outcome of biological differences", "B. A manifestation of male superiority and patriarchal society", "C. A cultural variation that varies widely across societies", "D. An outcome of symbolic interactionism"],
    answer: "B",
  },
  {
    id: 22,
    question: "The pyramid diagram in the lesson categorizes \"Rape Culture\" into three levels. Which of the following is at the BASE of the pyramid?",
    options: ["A. Explicit Violence", "B. Removal of Autonomy", "C. Victimization", "D. Degradation"],
    answer: "C",
  },
  {
    id: 23,
    question: "Which level of the Rape Culture pyramid contains behaviors such as \"Boys will be boys,\" rape jokes, and victim blaming?",
    options: ["A. Explicit Violence", "B. Degradation", "C. Removal of Autonomy", "D. Victimization"],
    answer: "D",
  },
  {
    id: 24,
    question: "During a school orientation, a male student makes a rape joke in front of the class and several peers laugh along. A female student who reports the incident is told by a faculty member to \"not be too sensitive\" and that \"boys will just be boys.\" Based on the lesson's Rape Culture pyramid, which level does this behavior fall under?",
    options: ["A. Explicit Violence", "B. Removal of Autonomy", "C. Degradation", "D. Victimization"],
    answer: "D",
  },
  {
    id: 25,
    question: "At the TOP of the Rape Culture pyramid is:",
    options: ["A. Victimization", "B. Degradation", "C. Removal of Autonomy", "D. Explicit Violence, including rape and murder"],
    answer: "D",
  },
];

const identification = [
  { id: 26, question: "The term used alongside \"gender order\" and \"gender power order\" to describe structures and processes that generate and uphold gender inequality.", answer: "Gender Systems" },
  { id: 27, question: "The two principles on which gender systems are based, as stated in the lesson.", answer: "The separation of genders and male superiority" },
  { id: 28, question: "The first principle of the gender system, illustrated in the lesson through professions split along gender lines.", answer: "The separation of genders" },
  { id: 29, question: "The second principle of the gender system, reflected in institutions of patriarchy, majority governmental representation by men, and men holding economic and political power.", answer: "Male superiority" },
  { id: 30, question: "The four mechanisms through which patriarchy is sustained, as listed in the lesson.", answer: "Gender norms, cultural beliefs, institutional policies, and social rewards and punishments" },
  { id: 31, question: "The social institution that shapes gender roles through division of labor and caregiving roles.", answer: "Family" },
  { id: 32, question: "The social institution that shapes gender roles through subject tracking and teacher expectations.", answer: "Education" },
  { id: 33, question: "The social institution that shapes gender roles through moral teachings on gender behavior.", answer: "Religion" },
  { id: 34, question: "The social institution that shapes gender roles through occupational segregation.", answer: "Economy / Work" },
  { id: 35, question: "The social institution that shapes gender roles through gender stereotypes and representations.", answer: "Media" },
  { id: 36, question: "The social institution that shapes gender roles through policies affecting gender rights.", answer: "Government / Law" },
  { id: 37, question: "The definition of Sociology of Gender as given in the lesson.", answer: "The study of how society influences understandings and differences between masculinity and femininity" },
  { id: 38, question: "The term that refers to the invisible barrier that prevents women from rising to top positions in professional environments, as mentioned in the lesson.", answer: "Glass ceiling" },
  { id: 39, question: "The advantage men hold under male superiority as described in the lesson involving their perceived standing in moral and intellectual terms.", answer: "Perceived moral and intellectual superiority" },
  { id: 40, question: "The form of abuse listed on the female side of the male superiority scale, referring to violence within the household or intimate relationships.", answer: "Sexual and domestic abuse" },
  { id: 41, question: "The bottom level of the Rape Culture pyramid, which includes behaviors such as rape jokes, victim blaming, and sexist attitudes.", answer: "Victimization" },
  { id: 42, question: "The middle level of the Rape Culture pyramid, which includes behaviors such as cat calls, threats/stalking, and \"up-skirt\" photos.", answer: "Degradation" },
  { id: 43, question: "The second-highest level of the Rape Culture pyramid, which includes behaviors such as dosing, statutory rape, and sexual coercion.", answer: "Removal of Autonomy" },
  { id: 44, question: "The top level of the Rape Culture pyramid, which includes rape, incest, and murder.", answer: "Explicit Violence" },
  { id: 45, question: "The six social institutions identified in the lesson as shaping gender roles.", answer: "Family, Education, Religion, Economy/Work, Media, Government/Law" },
];

const trueFalse = [
  { id: 46, question: "Gender systems are based on two principles: the separation of genders and male superiority.", answer: "TRUE" },
  { id: 47, question: "According to the lesson, patriarchy is sustained solely through institutional policies and has nothing to do with cultural beliefs or gender norms.", answer: "FALSE" },
  { id: 48, question: "The Sociology of Gender is defined as the study of how society influences understandings and differences between masculinity and femininity.", answer: "TRUE" },
  { id: 49, question: "According to the lesson's table, the media shapes gender roles through occupational segregation.", answer: "FALSE" },
  { id: 50, question: "The glass ceiling is listed in the lesson as a manifestation of male superiority within professional jobs.", answer: "TRUE" },
];

function Lesson6() {
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

      <h1 className="text-xl font-bold mb-8" style={{ color: "#a855f7" }}>Lesson 6: Gendered Family and Classroom Long Quiz</h1>

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
                    onClick={handleCloseModal}
                    className="flex-1 text-sm md:text-base font-semibold px-5 py-2.5 rounded-md border transition-all duration-200 cursor-pointer"
                    style={buttonStyle}
                    onMouseEnter={buttonHoverOn}
                    onMouseLeave={buttonHoverOff}
                  >
                    Finish 🎉
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

export default Lesson6;