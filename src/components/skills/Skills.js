import { Fragment } from "react/cjs/react.production.min";
import { StyledSkills } from "./Skills.styled";
import { mainSkills, otherSkills } from "../../constants";

const Skills = () => {
  return (
    <Fragment>
      <StyledSkills>
        <section className="main-skills">
          <h4 className="heading">The Main Technologies I Use</h4>
          <div className="card">
            <ul>
              {mainSkills.map((skill) => {
                return (
                  <li key={skill.title}>
                    <img src={skill.logo} alt={skill.title} />
                    <span>{skill.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <h4 className="heading">Other Technologies</h4>
          <div className="card">
            <ul>
              {otherSkills.map((skill) => {
                return (
                  <li key={skill.title}>
                    <img src={skill.logo} alt={skill.title} />
                    <span>{skill.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </StyledSkills>
    </Fragment>
  );
};

export default Skills;
