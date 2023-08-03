import education from "../data/education";
import practicalSkills from "../data/practicalSkill";
import softSkills from "../data/softskill";
import workExp from "../data/workExp";

const BodySection = () => {
  return (
    <>
      <div className="body-wrapper flex flex-row border border-red-500 w-[1440px] p-10 pl-[150px]">
        <section className="left flex-2 mr-10">
          <div className="skill-set mb-[100px]">
            <span className="text-secondary text-[18px] font-bold">
              Skill Set
            </span>
            <ul className="text-[20px] my-5">
              {practicalSkills.map((skill) => {
                return (
                  <div key={skill.id}>
                    <li>{skill.skill}</li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="soft-skill mb-[100px]">
            <span className="text-secondary text-[18px] font-bold">
              Soft Skill
            </span>
            <ul className="text-[20px] my-5">
              {softSkills.map((skill) => {
                return (
                  <>
                    <li key={skill.id} className="font-bold">
                      {skill.skill}
                    </li>
                    <p>{skill.description}</p>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="work-link mb-[100px]">
            <span className="text-secondary text-[18px] font-bold">
              Recent Work
            </span>
            <ul className="text-[20px] my-5 text-primary">
              <li>
                <a>A work</a>
              </li>
              <li>
                <a>B work</a>
              </li>
              <li>
                <a>C work</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="right flex-1">
          <div className="about-me">
            <span className="text-[36px] font-black">About Me</span>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem voluptatum, quibusdam optio vero ex veniam ipsum
              perspiciatis fugiat odit non quas eveniet iste sed, voluptate
              nulla accusantium quod dolorem corporis?
            </p>
          </div>
          <div className="experience">
            <span className="text-[36px] font-black">Experience</span>
            <ul>
              {workExp.map((work) => {
                return (
                  <>
                    <li key={work.id}>
                      <div className="flex flex-row justify-between text-[18px]">
                        <span className="text-secondary font-bold">
                          {work.name} - {work.role}
                        </span>
                        <span>{work.date}</span>
                      </div>
                      <p className="text-[20px] my-5">{work.description}</p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="education">
            <span className="text-[36px] font-black">Education</span>
            <ul>
              {education.map((edu) => {
                return (
                  <>
                    <li
                      className="flex flex-row justify-between text-secondary text-[18px] font-bold my-7"
                      key={edu.id}
                    >
                      <p>
                        {edu.degree}
                        <br />
                        {edu.name}
                      </p>
                      <p className="text-text text-[18px] font-normal">
                        Graduated : {edu.date}
                      </p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default BodySection;
