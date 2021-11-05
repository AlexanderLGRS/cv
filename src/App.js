// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   return (

//     <div className="App">
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me +
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Click me -
//       </button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo"
import SkillsSection from "./components/SkillsSection";
import AcademicSection from "./components/AcademicSection";
import ExperieceSection from "./components/ExperienceSection";
import ReturnButton from "./components/ReturnButton";


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SkillsSection />
        <AcademicSection />
        <ExperieceSection />
        <ReturnButton />
      </React.Fragment>
    )
  }
}