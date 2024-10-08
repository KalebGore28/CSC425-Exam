
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const WelcomePage = () => {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  const mainDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    linearGradient: 'to right, #f12711, #f5af19',
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8wpi5pw', 'template_l5r223g', e.target, 'PM56TrCybF05MBdwr')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        window.location.reload();
      }, (error) => {
        console.log('Error sending email:', error.text);
      });
  };


  const textBoxStyles = {
    width: '200px',
    height: '30px',
    marginBottom: '10px',
  }


  return (
    <div style={mainDiv}>
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker You Are Inz</p>

      <form onSubmit={handleSubmit}>
        <p>Enter your username</p>
        <input type="text" name="username" placeholder='Username' style={textBoxStyles} />
        <p>Enter your email</p>
        <input type="text" name="email" placeholder='Email' style={textBoxStyles} />
        <p>Enter your first name</p>
        <input type="text" name="first_name" placeholder='First Name' style={textBoxStyles} />
        <p>Enter your last name</p>
        <input type="text" name="last_name" placeholder='Last Name' style={textBoxStyles} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={goToHomePage}>HOME</button>
    </div>
  );
};

export default WelcomePage;