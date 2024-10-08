
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();

  const goToWelcomePage = () => {
    navigate('/welcome'); // Navigate to the Welcome page
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //check answers and make sure they are correct
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;

    if (q1 === 'a' && q2 === 'c' && q3 === 'c') {
      goToWelcomePage();
    } else {
      alert('Incorrect Answers');
    }
  }

  const mainDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    linearGradient: 'to right, #f12711, #f5af19',
  }
 
    return (
      <div style={mainDiv}>
      <h1>You have landed</h1>
      <p>Welcome Potential Hackers</p>
      {/* add a quiz form here */}
      <form onSubmit={handleSubmit}>
        <p>Take the Quiz</p>
        <p>Question 1: What is the purpose of a RESTful API?</p>
        <div>
          <input type="radio" id="q1a" name="q1" value="a" />
          <label htmlFor="q1a">To provide a way for clients to interact with server-side resources using HTTP methods</label>
        </div>
        <div>
          <input type="radio" id="q1b" name="q1" value="b" />
          <label htmlFor="q1b">To create a user interface for web applications</label>
        </div>
        <div>
          <input type="radio" id="q1c" name="q1" value="c" />
          <label htmlFor="q1c">To manage database migrations</label>
        </div>

        <p>Question 2: Which of the following is a NoSQL database?</p>
        <div>
          <input type="radio" id="q2a" name="q2" value="a" />
          <label htmlFor="q2a">MySQL</label>
        </div>
        <div>
          <input type="radio" id="q2b" name="q2" value="b" />
          <label htmlFor="q2b">PostgreSQL</label>
        </div>
        <div>
          <input type="radio" id="q2c" name="q2" value="c" />
          <label htmlFor="q2c">MongoDB</label>
        </div>

        <p>Question 3: What is the primary use of Node.js?</p>
        <div>
          <input type="radio" id="q3a" name="q3" value="a" />
          <label htmlFor="q3a">To style web pages</label>
        </div>
        <div>
          <input type="radio" id="q3b" name="q3" value="b" />
          <label htmlFor="q3b">To handle client-side scripting</label>
        </div>
        <div>
          <input type="radio" id="q3c" name="q3" value="c" />
          <label htmlFor="q3c">To build server-side applications using JavaScript</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    );
  };
  
  export default QuizPage;
  
  