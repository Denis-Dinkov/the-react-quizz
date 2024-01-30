export default function StartScreen({questionsLength}) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{questionsLength} question to test your React mastery</h3>
      <button>Let's start</button>
    </div>
  )
}