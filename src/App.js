
import './App.css';
import Timer from './Timer/Timer';



function App() {

  const cb =()=>{
    console.log('Timer Exxpired');
  }
  return (
    <div className="App">
      <h2>Hey Welcome</h2>
      <Timer duration={2*60 * 1000} cb={cb} />
    </div>
  );
}

export default App;
