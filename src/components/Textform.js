//we have created the website which can convert the lowercase letters into the uppercase letters


import React,{useState} from "react";
export default function Textform(props) {

  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();//we will use the to upper case function of javascript to upper case the letters
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();//we will use the to upper case function of javascript to upper case the letters
    setText(newText);
    props.showAlert("Converted to Lowercasecase","success");
  }
  const handleClearClick = ()=>{
    let newText = ("");//we will use the to upper case function of javascript to upper case the letters
    setText(newText);
    props.showAlert("Text has been cleared","success");
  }
  const handleCopyClick = ()=> {
    var text = document.getElementById("myBox");
    text.select();

    // text.setSelectionRange(0, 9999); no njeed of giving the range as we have to copy the whole text area
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied !","success");
  }
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces.","success");
  }
  const handleOnChange = (event)=>{
    // console.log("On change.");//it will show in console
    setText(event.target.value);//this will allow us to enter the new value and the settext will get udate and due to which the text will also get update

  }



  //2 - hooks are wworked without making any class this is the importance of the hook
  // const [count, setCount] = useState(0);
  //3- it should always be in the function

  //we can update the text using the settext 
  // useState hook is used 
  const [text, setText] = useState("");//as we have the text in our text area we will use the text 
  //4- for update of the state we cannot directly update we have to create the update function for dfoing soo
  // setText("vishal is good boy")
  // text ="new text";wrong way
  
  
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      {/* mb-2 statds for the margin bottom */}
      <h4 className="mb-2">{props.heading}</h4>
      <div className="mb-3">
        {/* <label for="myBox"></label> */}
        {/* in below syntax we have used the 2 curly brackets one showing the javascript and another for the object */}
        {/* <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      {/* disabled used as if thenlenghth wiloll become zeero the all the buttons will become disabled */}
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to clipboard</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      {/* filter: for those element its true it will be in an array otherwise it will be get emoved from the array */}
      <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} charcters</p>
      <p>{ 0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
}
