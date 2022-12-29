import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //This checks whether the dark mode is enable or not
  //function is been written for switching the darkmode os the navbar

  //making the state for the alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    //type is the various types of the alers in the bootstrap
    setAlert({
      msg: message,
      //here we are showing the meassage as msg
      type: type,
    });
    //logic for dismissing the alert after every 2 sec
    //setTimeout is used to et the time after every 2 sec it will make the setAlert as null means will disabled it
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#330099";

      // setting an alert when we turn on the dark mode
      showAlert("The dark mode has been enabled", "success");

      // if we want to chnge the title according to the mode then we can o the following things
      // document.title = "Textutils - dark mode";

      //when we want to pop up something after particular interva like we doin showing error
      // setInterval(() => {
      //   document.title = "textutil is soo amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install textutil now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = 'black'
      showAlert("The light mode has been enabled", "success");
      // document.title = "Textutils - Light mode";
    }
  };

  return (
    <>
      <Router>
        {/* passing the title in the navbar means we are poassing the props */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* //alert useState is been called here */}
        {/* we have created the such navbar whosde title can be changed by using the props 
    - we can pass the objects also the links and many more things*/}
        <div className="container my-3">
          <Switch>
            {/* when we use exact it do the exact matching and if not used nit will partially match */}
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <Textform
                showAlert={showAlert}
                heading="Try Textutils - Word counter, Charcter counter, Remove extra spaces "
                mode={mode}
              />
            </Route>
          </Switch>
          {/* to see the alerts for all the functions in the textform we will add the showalert function */}
        </div>
      </Router>
    </>
  );
}

export default App;
