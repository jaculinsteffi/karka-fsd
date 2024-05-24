import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardComponent from "./component/CardComponent";
import CardInfo from "./component/CardInfo";
import './App.css'

function App() {
  const cardData = [
    {
      name: "HTML",
      title: "Markup Language",
      description:
        "HTML is a markup language that describe the structure of web pages"
    },
    {
      name: "CSS",
      title: "Styling Language",
      description:
        "CSS is a Style sheet language which is used to describe the look and formatting of a document written in markup language."
    },
    {
      name: "JAVASCRIPT",
      title: "Programming Language",
      description:
        "Javascript is a programming language that adds interactivity to web pages"
    },
    {
      name: "REACT",
      title: "Javascript Library",
      description:
        "React is a JavaScript-based UI development library for building user interfaces based on components."
    }
  ];

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element=<CardComponent data={cardData} /> />
          <Route path="/info/:name" element=<CardInfo data={cardData} /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
