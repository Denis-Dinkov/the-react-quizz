export default function Progress({
  currentQuestionIndex,
  questionsLength,
  points,
  maxPossiblePoints,
  answer
}) {
  return (
    <header className="progress">
      <progress max={questionsLength} value={currentQuestionIndex + Number(answer !== null)} />
      <p>
        Question <strong>{currentQuestionIndex + 1}</strong> / {questionsLength}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}
