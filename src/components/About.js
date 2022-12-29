import React from "react";

export default function About(props) {
  //  myStyle is a javascript object
  //by using the usestate we can work further to chnge the darkmode by clickingon the button
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode ==='dark'?'white':'#330099',
    backgroundColor: props.mode ==='dark'?'#330099':'white',
    // border: '2px solid',
    // borderColor: props.mode ==='dark'?'white':'#330099'
  }




  // useState
  // const [BtnText, setBtnText] = useState("Enable dark mode");


  // use to set the dark mode in the conatiner
  //togglesstyle is tyhe arrow fumction which we haave declared on onclicking the buttoon
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable light mode");
  //     // console.log("enable light mode");
  //   } else {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable dark mode");
  //     // console.log("enable dark mode")
  //   }
  // };

  return (
    <div classNameName="container" style={{color: props.mode ==='dark'?'white':'#330099'}}>
      <h2 classNameName="my-3">About US</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>
              Analyze Your Text
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text analyzer</strong> is a tool that allows you to find
              the most used words and texts in a sentence. This text analyzer
              can also tell the number of characters with space, number of
              characters without space, number of all words, number of unique
              words & most common words in a paragraph.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>
                Free to Use
              </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text Analyzer</strong> It is totally free to use
              site.Where no charges are been taken for the editing or
              modification of the text. Check the number of characters, spaces,
              words, sentences, paragraphs, shortest and longest words used in
              your text or article.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>
              Browser Compatible
              </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text Analyzer</strong> is compatible in any browser like
              chrome, microsoft, Safari, Firefox, Aloha,etc. It suits to count
              the words and text int the blogs, facebook, and many more
              applications or websites.
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="conatiner my-3">
      <button type="button" onClick={toggleStyle} className="btn btn-primary my-3" style={myStyle}>
        Enable dark mode
      </button>

      </div> */}
    </div>
  );
}
