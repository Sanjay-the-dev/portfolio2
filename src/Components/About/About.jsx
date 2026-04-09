import React, { useEffect } from 'react'
import './About.css'
import { useRef } from 'react'
/* import theme_pattern from '../../assets/main assets/theme_pattern.svg' */


const About = () => {

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


        <div ref={sectionRef} id='About' className='About'>
            <div className="about-titlew position-relative">
                <h5 className='display-1 text-primary position-relative vw-100 text-center overflow-hidden'>
                    About Me <span className='anim title-slide-down '>-</span> <span className='anim title-slide-up'>-</span>
                </h5>
            </div>
            <div className="about-section">
                <div className="about-card anim fade-in">
                    <div className="about-para">
                        <p>
                            I work across both frontend and backend, with a strong focus on building responsive interfaces using React and Next.js, along with experience in API integration and system workflows.
                        </p>
                        <p>
                            During my internship, I worked on live projects where I contributed to feature
                            development, fixed bugs, and improved overall application performance. I was
                            involved in integrating APIs, handling real-world issues, and understanding
                            how production systems work.
                        </p>
                        <p>
                            I also gained exposure to backend systems, working with FastAPI and handling
                            basic API logic, along with deployment tools like NGINX, PM2, and DigitalOcean.
                            This experience helped me understand how frontend and backend work together
                            in real-world applications.
                        </p>
                        <p>
                            I’m continuously improving my skills by building projects and focusing on
                            writing clean, efficient, and maintainable code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About