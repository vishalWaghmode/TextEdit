  // import logo from './logo.svg';
  import './App.css'; //using the import we can import all tyhe css fromn the other file 

  let name = "Vishal";//it will not make the vishal name as tghe bold it will directly print the whole name or the letters present in it because it does not use the externel HTML
  // let name = "<b>Vishal<\b>";//it will not make the vishal name as tghe bold it will directly print the whole name or the letters present in it because it does not use the externel HTML
  function App() {
    return (  
      <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>contact us</li>
      </nav>
      <div className="container">
        {/* jsx is same like the htmnl only some syntex are been changed and we can take the varible using the jsx */}
        {/* we can use the object,variable sand soo many things like image to upload thtough the js */}
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore omnis sapiente odit, neque magnam quibusdam maxime laboriosam! Rerum saepe sint facilis hic?
        </p>
          
      </div>
      </>

    );
  }

  export default App;
