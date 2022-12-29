import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
    {/* passing the title in the navbar means we are poassing the props */}
      <Navbar title ="TextUtils.blog" Home = "Home" />
    {/* we have created the such navbar whosde title can be changed by using the props 
    - we can pass the objects also the links and many more things*/}
    <div className="container my-3">
      <Textform heading = "Enter the Text to analyze"/>

    </div>


    </>
  );
}

export default App;
