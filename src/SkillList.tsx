import Skill from "./Skill";
function SkillList(){
    const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
  return (
    <div className="skill-list">
        {skills.map((skill) => (
          <Skill 
            key={skill.skill}
            skill={skill.skill}
            level={skill.level}
            color={skill.color}
          />
        ))}
    </div>
  );
}
export default SkillList;