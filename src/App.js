import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="devPhoto.JPG" alt="Amedeka" />
      <div>
        <h2></h2>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      {" "}
      <h1>Amedeka Tamatode</h1>
      <p>
        Full stack web developer and student at Udemy. When not coding or
        studing a course, I like to play with my youngest one, to cook (and
        eat), or to just enjoy the Madison sun at lake Mendota.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="Skill-list">
      <Skill skill="React" emoji="👦🏾" color="orangered" />
      <Skill skill="JavaScript" emoji="💪🏾" color="yellow" />
      <Skill skill="HTML & CSS" emoji="💪🏾" color="orange" />
      <Skill skill="GIT & Github" emoji="💪🏾" color="green" />
      <Skill skill="Swift" emoji="👶🏾" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji} </span>
      <span> </span>
    </div>
  );
}

export default App;
