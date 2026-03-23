import React, { useState, useRef } from "react";

const multipleChoice = [
  {
    id: 1,
    question: "What are the three main categories of explanations for gender differences discussed in this lesson?",
    options: ["A. Biological, Sociological, Political", "B. Psychoanalytic, Developmental, Cultural", "C. Evolutionary, Cognitive, Behavioral", "D. Hormonal, Emotional, Environmental"],
    answer: "B",
  },
  {
    id: 2,
    question: "Freud's theory on gender falls under which category of explanations?",
    options: ["A. Cultural explanations", "B. Developmental explanations", "C. Psychoanalytic explanations", "D. Biological explanations"],
    answer: "C",
  },
  {
    id: 3,
    question: "According to Freud's Five Psychosexual Stages, during which stage does the infant's pleasure center on the mouth and suckling?",
    options: ["A. Anal Stage", "B. Phallic Stage", "C. Oral Stage", "D. Latency Stage"],
    answer: "C",
  },
  {
    id: 4,
    question: "In Freud's Five Psychosexual Stages, the Anal Stage occurs at what age range?",
    options: ["A. Birth to 12 months", "B. 1 to 3 years", "C. 3 to 6 years", "D. 7 to 11 years"],
    answer: "B",
  },
  {
    id: 5,
    question: "During the Anal Stage of Freud's psychosexual development, the child's pleasure focuses on:",
    options: ["A. The mouth and suckling", "B. The genitals", "C. The anus and elimination", "D. Social and intellectual skills"],
    answer: "C",
  },
  {
    id: 6,
    question: "A mother notices that her 2-year-old son throws tantrums every time she tries to toilet train him. He seems to derive satisfaction from controlling when and where he eliminates. According to Freud's psychosexual stages, which stage is this child currently in?",
    options: ["A. Oral Stage", "B. Anal Stage", "C. Phallic Stage", "D. Latency Stage"],
    answer: "B",
  },
  {
    id: 7,
    question: "During the Phallic Stage, the child's pleasure focuses on:",
    options: ["A. The mouth", "B. The anus", "C. Intellectual development", "D. The genitals"],
    answer: "D",
  },
  {
    id: 8,
    question: "Which two psychosexual conflicts occur during the Phallic Stage?",
    options: ["A. Oral fixation and anal retention", "B. Oedipus complex (boys) and Electra complex (girls)", "C. Latency and genital awakening", "D. Penis envy and castration anxiety only"],
    answer: "B",
  },
  {
    id: 9,
    question: "The concept of \"penis envy\" in Freud's theory is associated with which stage?",
    options: ["A. Oral Stage", "B. Anal Stage", "C. Phallic Stage", "D. Genital Stage"],
    answer: "C",
  },
  {
    id: 10,
    question: "A psychology student is observing a 4-year-old boy who constantly tries to sit beside his mother, mimics his father's behavior, and becomes visibly upset when his father receives more of his mother's attention. Based on Freud's psychosexual theory, what conflict is this child most likely experiencing?",
    options: ["A. Electra complex", "B. Penis envy", "C. Oedipus complex", "D. Anal fixation"],
    answer: "C",
  },
  {
    id: 11,
    question: "The Latency Stage in Freud's psychosexual development occurs at what age range?",
    options: ["A. 1 to 3 years", "B. 3 to 6 years", "C. 7 to 11 years", "D. Puberty onward"],
    answer: "C",
  },
  {
    id: 12,
    question: "Freud described the Latency Stage as:",
    options: ["A. A time of sexual reawakening", "B. An interlude", "C. A period of oral fixation", "D. A time of Electra complex resolution"],
    answer: "B",
  },
  {
    id: 13,
    question: "The Genital Stage in Freud's psychosexual development begins at:",
    options: ["A. 3 to 6 years", "B. 7 to 11 years", "C. Puberty onward", "D. Birth to 12 months"],
    answer: "C",
  },
  {
    id: 14,
    question: "According to Freud, during the Genital Stage, the source of sexual pleasure becomes:",
    options: ["A. The mouth", "B. The anus", "C. Someone outside of the family", "D. The parent of the opposite sex"],
    answer: "C",
  },
  {
    id: 15,
    question: "The Genital Stage is described as:",
    options: ["A. An interlude", "B. A time of anal fixation", "C. A time of sexual reawakening", "D. A period of social development only"],
    answer: "C",
  },
  {
    id: 16,
    question: "Which of the following is the correct ORDER of Freud's Five Psychosexual Stages?",
    options: ["A. Anal, Oral, Phallic, Genital, Latency", "B. Oral, Anal, Phallic, Latency, Genital", "C. Oral, Phallic, Anal, Latency, Genital", "D. Phallic, Oral, Anal, Latency, Genital"],
    answer: "B",
  },
  {
    id: 17,
    question: "What does Freud's first implication state about gender and sexuality?",
    options: ["A. Gender is entirely determined by biology", "B. Freud dislocates gender and sexuality from the realm of biology", "C. Gender and sexuality are the same thing", "D. Gender is formed only during the Genital Stage"],
    answer: "B",
  },
  {
    id: 18,
    question: "According to the implications of Freudian Theory, Freud links gender identity to:",
    options: ["A. Social class", "B. Cultural practices", "C. Sexual orientation", "D. Brain structure"],
    answer: "C",
  },
  {
    id: 19,
    question: "Freud's third implication states that he restates traditional gender stereotypes as if they were:",
    options: ["A. Unnecessary social constructs", "B. Biological facts to be rejected", "C. Badges of successful negotiation of a perilous journey", "D. Random outcomes of development"],
    answer: "C",
  },
  {
    id: 20,
    question: "In Freudian theory, the Oedipus complex applies to:",
    options: ["A. Girls", "B. Boys", "C. Both boys and girls equally", "D. Neither boys nor girls"],
    answer: "B",
  },
  {
    id: 21,
    question: "In Freudian theory, the Electra complex applies to:",
    options: ["A. Boys", "B. Girls", "C. Both boys and girls equally", "D. Neither boys nor girls"],
    answer: "B",
  },
  {
    id: 22,
    question: "The Oedipus and Electra complexes both occur during which stage of Freud's development?",
    options: ["A. Oral Stage", "B. Anal Stage", "C. Phallic Stage", "D. Latency Stage"],
    answer: "C",
  },
  {
    id: 23,
    question: "Which of the following represents the three layers of the mind in Freudian theory?",
    options: ["A. Thinking, Feeling, Behaving", "B. Id, Ego, Superego", "C. Conscious, Subconscious, Behavior", "D. Memory, Perception, Intelligence"],
    answer: "B",
  },
  {
    id: 24,
    question: "In Freud's model of the mind, the Id is located in the:",
    options: ["A. Conscious mind", "B. Preconscious mind", "C. Unconscious mind", "D. Rational mind"],
    answer: "C",
  },
  {
    id: 25,
    question: "A therapist is treating a teenage boy who recently began pursuing romantic interests outside his family. He shows a reawakened interest in intimate relationships and is beginning to form bonds with peers of the opposite sex. According to Freud's psychosexual stages, which stage best describes this boy's current development?",
    options: ["A. Anal Stage", "B. Latency Stage", "C. Phallic Stage", "D. Genital Stage"],
    answer: "D",
  },
];

const identification = [
  { id: 26, question: "The three main categories of explanations for gender differences covered in this lesson.", answer: "Psychoanalytic, Developmental, Cultural" },
  { id: 27, question: "The psychologist whose theory of psychosexual stages is central to the psychoanalytic explanation of gender.", answer: "Sigmund Freud" },
  { id: 28, question: "The first stage of Freud's psychosexual development where the infant's pleasure centers on the mouth and suckling.", answer: "Oral Stage" },
  { id: 29, question: "The second stage of Freud's psychosexual development, occurring from ages 1 to 3, where pleasure focuses on the anus and elimination.", answer: "Anal Stage" },
  { id: 30, question: "The third stage of Freud's psychosexual development, occurring from ages 3 to 6, where pleasure focuses on the genitals.", answer: "Phallic Stage" },
  { id: 31, question: "The psychosexual stage described as \"an interlude\" where the child represses sexual interest and develops social and intellectual skills.", answer: "Latency Stage" },
  { id: 32, question: "The final stage of Freud's psychosexual development, beginning at puberty, described as a time of sexual reawakening.", answer: "Genital Stage" },
  { id: 33, question: "The psychosexual conflict experienced by boys during the Phallic Stage, involving attraction to the mother and rivalry with the father.", answer: "Oedipus Complex" },
  { id: 34, question: "The psychosexual conflict experienced by girls during the Phallic Stage, involving attraction to the father.", answer: "Electra Complex" },
  { id: 35, question: "The Freudian concept, experienced by girls, of desiring what boys anatomically have.", answer: "Penis Envy" },
  { id: 36, question: "Freud's first implication — he removes gender and sexuality from this domain.", answer: "The realm of biology" },
  { id: 37, question: "According to Freud's second implication, he links gender identity to this.", answer: "Sexual orientation" },
  { id: 38, question: "According to Freud's third implication, traditional gender stereotypes are described as the badges of this.", answer: "Successful negotiation of a perilous journey" },
  { id: 39, question: "The three components of Freud's structural model of the mind.", answer: "Id, Ego, Superego" },
  { id: 40, question: "The part of the mind that is entirely unconscious and represents primal drives and desires in Freud's model.", answer: "Id" },
  { id: 41, question: "The part of the mind that mediates between the Id and the external world, operating in both the conscious and preconscious in Freud's model.", answer: "Ego" },
  { id: 42, question: "The part of the mind that represents the internalized moral standards and ideals in Freud's structural model.", answer: "Superego" },
  { id: 43, question: "The age range during which the Phallic Stage occurs in Freud's psychosexual development.", answer: "3 to 6 years" },
  { id: 44, question: "The age range during which the Latency Stage occurs in Freud's psychosexual development.", answer: "7 to 11 years" },
  { id: 45, question: "The activity described in the pre-lesson warm-up, which aimed to raise awareness of this common social problem in thinking about gender.", answer: "Gender stereotyping" },
];

const trueFalse = [
  { id: 46, question: "In Freud's psychosexual theory, the Oral Stage is the first stage and occurs from birth to 12 months.", answer: "TRUE" },
  { id: 47, question: "The Electra complex is the psychosexual conflict experienced by boys during the Phallic Stage.", answer: "FALSE" },
  { id: 48, question: "According to one of the implications of Freudian theory, Freud dislocates gender and sexuality from the realm of biology.", answer: "TRUE" },
  { id: 49, question: "The Latency Stage in Freud's psychosexual development is described as a time of sexual reawakening.", answer: "FALSE" },
  { id: 50, question: "Freud links gender identity to sexual orientation as part of the implications of his psychoanalytic theory.", answer: "TRUE" },
];

function Lesson3({ setActiveLesson }) {
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
    setActiveLesson(4);
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

      <h1 className="text-xl font-bold mb-8" style={{ color: "#a855f7" }}>Lesson 3: Psychoanalytic, Developmental And Cultural Explanations For Gender Differences Long Quiz</h1>

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
                    Continue to Lesson 4 →
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

export default Lesson3;