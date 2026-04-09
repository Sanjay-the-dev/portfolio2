import React, { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const anim_elements = sectionRef.current.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: "0.2" })

    anim_elements.forEach((element) => observer.observe(element))
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "ReactJs", "NextJs", "React Router", "Redux Toolkit"]
    },
    {
      title: "UI & Styling",
      skills: ["Tailwind CSS", "Bootstrap", "Recharts (Data Visualization)", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "Strapi"]
    },
    {
      title: "Testing",
      skills: ["Unit Test Case (Jest)"]
    },
    {
      title: "Deployments",
      skills: ["Netlify", "DigitalOcean (VPS)", "Cloudflare", "PM2", "Nginx", "Git & GitHub"]
    }
  ];

  return (
    <div ref={sectionRef} id='Skills' className='skills-section'>
      <div className="section-title">
        <h5 className='display-1 text-primary position-relative vw-100 text-center overflow-hidden'>
          My Skills<span className='anim title-slide-down '>-</span> <span className='anim title-slide-up'>-</span>
        </h5>
      </div>

      <div className="skills-grid-container">
        {skillCategories.map((category, index) => (
          <div key={index} className={`skill-category-card anim fade-in-up delay-${index}`}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-blob-container">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <span className="skill-dot"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
