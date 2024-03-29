export default function StartScreen({ questionsLength, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{questionsLength} question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>Let's start</button>
    </div>
  )
}