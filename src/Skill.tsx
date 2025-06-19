function Skill({ key, skill, level, color }) {
  return (
    <div key={key}  className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span> 
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
        </span>
    </div>
  );
}
export default Skill;
