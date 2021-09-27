import Navbar from './components/Navbar'
import hex from './img/hex.svg';
import student from './img/student.svg';
import Contact from './components/Contact';

function App({ logo }) {
  return (
    <div style={{position: 'static'}}>
      <div className="hex-one"><img src={hex} alt='background hex'></img></div>
      <div className="hex-two"><img src={hex} alt='background hex'></img></div>
      <div className="hex-three"><img src={hex} alt='background hex'></img></div>
      <div className="hex-four"><img src={hex} alt='background hex'></img></div>

      <Navbar logo={logo}/>

      <h1><span className="title">devhub</span></h1>
      <div className="student"><img src={student} alt="student"></img></div>

      <Contact/>
    </div>
  );
}

export default App;
