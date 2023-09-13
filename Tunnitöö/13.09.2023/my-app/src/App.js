import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The big bad <code>React.js</code> page :O 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
        <a
          className="App-link"
          href="https://chat.openai.com/"
          target= "_blank"
          rel= "noopener noreferrer"
        >
          Need help 
        </a>
      </header>
    </div>
  );
}

export default App;
