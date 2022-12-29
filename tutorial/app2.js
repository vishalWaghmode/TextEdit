import logo from './logo.svg';
import './App.css';

//in jsx we use function call rather then using the the class call 
function App() {
  return (  
    //return function is used in jsx where the all code is written in the return function on;ly and not outside of the code
    //we cannot use the more then one tags in the jsx for using more then two tags we use <> <\> tag
    //tags like h1 and div are the tags
    <>
    <h1>This is vishal</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React with vishal 
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
