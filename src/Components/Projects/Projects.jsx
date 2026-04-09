import React, { useState } from 'react'
import './projects.css'
import { useRef, useEffect } from 'react'
/* import theme_pattern from '../../assets/main assets/theme_pattern.svg' */
import project_img1 from '../../assets/Project Images/e-commerce-img.png'
import project_img2 from '../../assets/Project Images/wellness-img.png'
import project_img3 from '../../assets/Project Images/jewellery-shop-img.png'
import project_img4 from '../../assets/Project Images/DMA.png'
import project_img5 from '../../assets/Project Images/slowmoto.jpeg'
import project_img6 from '../../assets/Project Images/hmps.png'
import project_img7 from '../../assets/Project Images/vihas.png'


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projectsData = [

    {
      id: 1,
      title: 'Rithvika Digital Marketing Agency',
      image: project_img4,
      link: 'https://rithvika-dma.netlify.app',
      type: 'Freelance Work',
      shortDesc: 'Interactive digital marketing agency website with complex animations and serverless pipeline',
      fullDesc: 'A web application providing a seamless browsing experience with interactive animations, detailed service offerings, and a serverless contact pipeline optimized for desktop and mobile users.',
      technologies: 'React.js, Tailwind CSS, Framer Motion, EmailJS, Node.js, Vite',
      features: [
        'Dynamic user interface with complex scroll-triggered animations and modern styling',
        'Comprehensive service and testimonial display with fast, single-page routing',
        'Serverless contact pipeline utilizing real-time third-party form handling',
        'Instant client engagement tools including a persistent floating WhatsApp widget',
        'Optimized web performance with conditional animation rendering and responsive design'
      ]
    },
    {
      id: 5,
      title: 'Slow Motor Rides',
      image: project_img5,
      link: null,
      type: 'Company Work',
      shortDesc: 'UI enhancement, multilingual support, and production deployment on DigitalOcean',
      fullDesc: 'A professional platform optimized for smooth user experience, featuring UI refinements, mobile responsiveness, updated tour content, and stabilized production deployment using PM2 and Nginx on DigitalOcean.',
      technologies: 'Next.js, Tailwind CSS, PM2, Nginx, Strapi, DigitalOcean',
      role: 'Full Stack Developer',
      challenges: [
        { title: 'Navbar Layout', solution: 'Re-structured responsive Tailwind classes and optimized flex/grid alignment for mobile screens.' },
        { title: 'Page Navigation', solution: 'Debugged routing configuration in Next.js and corrected link handling for seamless transitions.' },
        { title: 'Multilingual Support', solution: 'Integrated language toggle logic and structured content for both English and German translation support.' },
        { title: 'Performance Optimization', solution: 'Replaced outdated images with optimized versions and implemented efficient image handling for faster loading.' },
        { title: 'Deployment Configuration', solution: 'Configured PM2 with Nginx reverse proxy on DigitalOcean for a stable and scalable hosting environment.' }
      ],
      achievements: [
        'Improved mobile responsiveness and UI consistency across all components',
        'Implemented bilingual support with a real-time language toggle',
        'Successfully added detailed and structured tour information pages',
        'Optimized overall system delivery and built a stable production pipeline',
        'Stabilized DigitalOcean deployment ensuring better uptime and performance'
      ]
    },
    {
      id: 6,
      title: 'CA Flow Board',
      image: project_img6,
      link: null,
      type: 'Company Work',
      shortDesc: 'Enterprise task & invoice management with automated billing and Razorpay integration',
      fullDesc: 'A robust task management and automated invoice system designed to improve operational workflow. Features billing automation, payment tracking, employee performance monitoring, and real-time status updates.',
      technologies: 'React.js, Node.js, MongoDB, Razorpay, Cloudflare Tunnel, REST APIs',
      role: 'Full Stack Developer',
      challenges: [
        { title: 'Recurring Billing', solution: 'Refactored complex calculation logic and implemented validation checks to fix GST and recurring due date issues.' },
        { title: 'Payment Sync', solution: 'Integrated Razorpay webhook handling and implemented status verification logic for real-time updates.' },
        { title: 'Task Filtering', solution: 'Improved query logic and optimized MongoDB filters to resolve inconsistencies in task reporting.' },
        { title: 'Secure Deployment', solution: 'Resolved Cloudflare tunnel routing issues and configured environment variables for secure client-server deployment.' },
        { title: 'Data Integrity', solution: 'Debugged schema validation and optimized database queries to eliminate MongoDB inconsistencies.' }
      ],
      achievements: [
        'Developed comprehensive invoice modules with automated GST and recurring billing',
        'Integrated Razorpay payment gateway with automatic payment status updates',
        'Implemented automated Email and SMS notifications for payment confirmations',
        'Developed 3 custom employee performance report modules for operational insights',
        'Reduced task creation time and improved accuracy through workflow optimization'
      ]
    },
    {
      id: 7,
      title: 'Vihas Furniture',
      image: project_img7,
      link: null,
      type: 'Company Work',
      shortDesc: 'Scalable E-Commerce platform with dynamic filtering, cart optimization and auth workflows',
      fullDesc: 'A full-featured e-commerce platform focused on user experience and clean architecture. Features dynamic category listing, advanced filtering mechanisms, optimized cart operations, and secure authentication.',
      technologies: 'Next.js, FastAPI, MongoDB, Python, TailwindCSS, REST APIs',
      role: 'Full Stack Developer',
      challenges: [
        { title: 'Image Rendering', solution: 'Refactored image handling logic and corrected API response mapping between backend and frontend.' },
        { title: 'Filtering Mechanisms', solution: 'Optimized backend query structures and improved condition handling for accurate product filtering results.' },
        { title: 'Data Synchronization', solution: 'Synchronized frontend state management with backend APIs to eliminate cart and landing page mismatches.' },
        { title: 'Production Port Binding', solution: 'Updated server configuration and environment variables to resolve 0.0.0.0 port binding issues for stable hosting.' },
        { title: 'Bulk Operations', solution: 'Validated schema mappings and optimized batch operations to prevent failures during large product updates.' }
      ],
      achievements: [
        'Successfully implemented dynamic category listings and advanced product filtering',
        'Significantly reduced product loading times and frontend rendering delays',
        'Stabilized the authentication system with improved validation and password handling',
        'Enhanced the admin panel for streamlined category and product management',
        'Developed top-selling and offer-based product sections to boost user engagement'
      ]
    },

    {
      id: 2,
      title: 'E-Commerce Platform',
      image: project_img1,
      link: 'https://e-commerce7265.netlify.app',
      type: 'Self Project',
      shortDesc: 'Full-featured e-commerce with product filtering, cart management and mobile optimization',
      fullDesc: 'Full-featured e-commerce platform providing seamless shopping experience with product browsing, category filtering, and cart management optimized for desktop and mobile users.',
      technologies: 'React.js, JavaScript (ES6+), Bootstrap, React Router, Vite',
      features: [
        'Product browsing with dynamic filtering and search functionality',
        'Detailed product information display with images and pricing',
        'Shopping cart system with real-time quantity management and calculations',
        'Persistent cart data storage using localStorage',
        'Optimized performance with efficient state management and responsive design'
      ]
    },
    {
      id: 3,
      title: 'Wellness & Habit Tracker',
      image: project_img2,
      link: 'https://wellness-and-habit-tracker.netlify.app',
      type: 'Self Project',
      shortDesc: 'Comprehensive habit tracking app with analytics dashboard and theme customization',
      fullDesc: 'Comprehensive habit tracking application enabling users to monitor daily activities with real-time analytics dashboard, weekly progress visualization, and theme customization for optimal user engagement.',
      technologies: 'React.js, Redux Toolkit, Bootstrap, Recharts',
      features: [
        'Daily habit tracking with Redux global state management',
        'Persistent data storage using localStorage',
        'Weekly progress visualization using Bar Charts (Recharts)',
        'Dark/Light theme switcher with dynamic styling'
      ]
    },
    {
      id: 4,
      title: 'Jewellery Shop Website',
      image: project_img3,
      link: 'https://jewellery-shop3.netlify.app/',
      type: 'Self Project',
      shortDesc: 'Professional jewelry shop with lazy loading and optimized performance',
      fullDesc: 'Professional jewelry shop website with optimized performance through lazy loading, infinite scroll functionality, and responsive design. Implements IntersectionObserver API for efficient image loading and smooth user interactions.',
      technologies: 'HTML5, CSS3, JavaScript (ES6+), Bootstrap',
      features: [
        'Professional visual design with HTML5, CSS3, and Bootstrap',
        'Performance optimization through image lazy loading with IntersectionObserver API',
        'Smooth animations and optimized transitions for enhanced user experience'
      ]
    },
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <div ref={sectionRef} id='Projects' className='projects'>

      <div className="project-title">
        <h5 className='display-1 text-primary position-relative vw-100 text-center overflow-hidden' >Projects<p className='anim title-slide-down '>-</p> <p className='anim title-slide-up'>-</p></h5>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card ${selectedProject?.id === project.id ? 'active' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            {project.type && (
              <span className={`project-badge ${project.type.toLowerCase().replace(' ', '-')}`}>
                {project.type}
              </span>
            )}
            {project.image && (
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-short-desc">{project.shortDesc}</p>

              <div className="card-footer-simple">
                <span className="explore-btn">
                  Explore Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <h2 className="modal-title">{selectedProject.title}</h2>

              <div className="modal-section">
                <h4>Description</h4>
                <p className="modal-desc">{selectedProject.fullDesc}</p>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <p className="modal-tech">{selectedProject.technologies}</p>
              </div>

              {selectedProject.challenges && (
                <div className="modal-section">
                  <h4>Challenges & Solutions</h4>
                  <div className="modal-challenges">
                    {selectedProject.challenges.map((challenge, idx) => (
                      <div key={idx} className="challenge-item">
                        <strong>{challenge.title}:</strong> {challenge.solution}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.achievements && (
                <div className="modal-section">
                  <h4>Key Achievements</h4>
                  <ul className="modal-list">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.features && (
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-footer">
                {selectedProject.duration && (
                  <p className="modal-meta">
                    <span className='TheGreen'>Duration:</span> {selectedProject.duration}
                  </p>
                )}
                {selectedProject.role && (
                  <p className="modal-meta">
                    <span className='TheGreen'>Role:</span> {selectedProject.role}
                  </p>
                )}
              </div>

              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="card-link">
                  View Live Project →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects;