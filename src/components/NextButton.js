export default function NextButton({
  dispatch,
  answer,
  currentQuestionIndex,
  questionsLength,
}) {
  console.log(answer === null);
  if (answer === null) return;

  if (currentQuestionIndex < questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (currentQuestionIndex === questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
