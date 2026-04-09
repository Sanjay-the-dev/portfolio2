import React, { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
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

  return (
    <div ref={sectionRef} id='Experience' className='experience-section'>
      <div className="section-title">
        <h5 className='display-1 text-primary position-relative vw-100 text-center overflow-hidden'>
          Experience<p className='anim title-slide-down '>-</p> <p className='anim title-slide-up'>-</p>
        </h5>
      </div>

      <div className="experience-container">
        <div className="experience-card anim fade-in-up">
          <div className="exp-header">
            <div className="exp-company-info">
              <h3 className="exp-role">Springreen</h3>
              <h4 className="exp-company"> Fullstack Developer (intern) </h4>
            </div>
            <div className="exp-duration">
              <span>Jan 2026 - Mar 2026</span>
            </div>
          </div>

          <div className="exp-content">
            <ul className="exp-list">
              <li>Contributed to the development, optimization, and deployment of 3 production-level applications: <strong>Slow Motor Rides</strong>, <strong>CA flow</strong> and <strong>Vihas furnitures</strong>.</li>
              <li>Built and enhanced critical business modules including invoice automation, payment gateway <strong>(Razorpay)</strong> integration with webhook handling.</li>
              <li>Deployed and maintained production environments using <strong>PM2, Nginx, DigitalOcean, and Cloudflare</strong>, resolving server-level issues and ensuring high availability and stability.</li>
              <li>Collaborated directly with clients to understand requirements, translate business needs into technical solutions, and implement high-quality feature enhancements.</li>
            </ul>
          </div>

          <div className="exp-tech-tags">
            <span>React.js</span>
            <span>Next.js</span>
            <span>FastAPI</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>PM2</span>
            <span>Nginx</span>
            <span>DigitalOcean</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
