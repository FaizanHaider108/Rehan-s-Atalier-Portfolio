import React from 'react'
import "../css/Reasons.css"
import Arrow from "../../assets/Arrow-2.png"
import icons1 from "../../assets/icon-1.png"
import icon2 from "../../assets/computer.png"
import icon3 from "../../assets/bulb.png"
import search from "../../assets/search.png"
import paint from "../../assets/paint.png"
import heart from "../../assets/heart.png"
import network from "../../assets/network.png"
import Resume from "../../assets/Resume.pdf"
const Reasons = () => {
    return (
        <div className='main'>
            <div className="Reasons">
                <div className="Reasons-head">
                    <img src={ Arrow } alt="" />
                    <h1 style={ { "fontWeight": "300" } }>wHY SHOULD YOu HIRE ME</h1>
                </div>
                <div className="Reasons-head-2">
                    <img src={ Arrow } alt="" />
                    <h1 style={ { "fontWeight": "300" } }>wHY Me</h1>
                </div>
                <div className="reasons-para">
                    <p>it's important to look for a combination of technical skills, strong tenets, and personal qualities when <br />hiring a UI/UX designer for your project. Here are some key things about me as a UI/UX designer:</p>
                </div>
                {/* para */ }
                <div className="main-flex">
                <div className='reason-flex-box'>
                    <div className="reason-box-1">
                        <div className="box">
                            <div className="box-icon">
                                <img src={ icons1 } alt="" />
                                <h2>Intuitive and User-Centered Design</h2>
                            </div>
                            <div className="box-desc">
                                <p>My strongest tenet is being a good Intuitive designer. My goal is to make the user experience as seamless and natural as possible by keeping the visual hierarchy consistent to guide users through the product. I also try to reduce the amount of cognitive load required of the user by providing clear feedback and confirmation of user actions.</p>
                            </div>

                        </div>
                        <div className="box">
                            <div className="box-icon">
                                <img src={ icon3 } alt="" />
                                <h2>Problem-Solving Skills</h2>
                            </div>
                            <div className="box-desc">
                                <p>I try to approach design problems with a problem-solving mindset, here’s where my electrical engineering degree really shines. I tackle user’s pain points by using empathy, creative thinking, and iterative prototyping to arrive at effective solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reason-box-1">
                        <div className="box">
                            <div className="box-icon">
                                <img src={ icon2 } alt="" />
                                <h2>Technical Skills</h2>
                            </div>
                            <div className="box-desc">
                                <p>I am fully proficient with the tools such as Adobe XD, Figma, and Adobe Illustrator required for this job. I keep myself updated with the design trends and guidelines and find new ways to optimize my workflow by learning the newest features of the tools I use. I work closely with the devs to implement my designs.</p>
                            </div>

                        </div>
                        <div className="box">
                            <div className="box-icon">
                                <img src={ search } alt="" />
                                <h2>Attention to Detail</h2>
                            </div>
                            <div className="box-desc">
                                <p>I don’t know whether to call this my skill or my weakness but I have a keen eye for detail and pixel perfection, I try my best to create precise and well-crafted designs that are visually appealing and easy to use.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reason-box-1">
                        <div className="box">
                            <div className="box-icon">
                                <img src={ paint } alt="" />
                                <h2>Visual and Graphic Design Skills</h2>
                            </div>
                            <div className="box-desc">
                                <p>As a UI/UX designer I have a strong visual design sense, with knowledge of typography, color theory, layout, iconography, design systems, animation and interaction design, branding and identity, composition, and user interface design.</p>
                            </div>

                        </div>
                        <div className="box">
                            <div className="box-icon">
                                <img src={ heart } alt="" />
                                <h2>Passion and Curiosity</h2>
                            </div>
                            <div className="box-desc">
                                <p>I am passionate about my work and constantly curious about new design trends and technologies, always striving to learn and improve my skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="reason-box-1">
                        <div className="box">
                            <div className="box-icon">
                                <img src={ network } alt="" />
                                <h2>Collaboration and Communication Skills</h2>
                            </div>
                            <div className="box-desc">
                                <p>As a UI/UX designer I try to communicate effectively with other members of the team, such as developers, product managers, and stakeholders, and able to work collaboratively to achieve project goals.</p>
                            </div>

                        </div>

                    </div>
                </div>

                {/*  Expreince and Education section*/ }
                <section className='education'>
                    <div className="education-card">
                        <div className="cards">
                            <div className="Experience-head">
                            <img src={ Arrow } alt="" />
                            <h1 style={ { "fontWeight": "300" } }>
                            Experience
                            </h1>
                        </div>
                            <div className="card">
                                <h1>Global Digital Marketing</h1>
                                <p>UI/UX Designer, Content Writer • June 2023 - Present</p>
                                <span>I partner with content writers and editors to understand their needs and goals, and then translate those into designs that help them create and deliver high-quality content.</span>
                            </div>
                              <div className="card">
                                <h1>RI Software</h1>
                                <p>Senior Product Designer • March 2023 - June 2023 </p>
                                <span>Led a team of designers in the design of the UX and UI of RI Software, a SaaS collaboration and project management platform for businesses of all sizes and industries.</span>
                            </div>
                              <div className="card">
                                <h1>Freelance</h1>
                                <p>UI/UX, Product Designer • Mar 2018 - June 2023 </p>
                                <span>Successfully designed and delivered user experiences and user interfaces for a variety of projects, including mobile apps, websites, and e-commerce platforms.</span>
                            </div>
                              <div className="card">
                                <h1>Govt. Technical Training Institute (TEVTA)</h1>
                                <p>Visiting Lecturer (Electrical) • Feb 2016 - Feb 2018</p>
                                <span>Taught calculus mathematics to Diploma of Associate Engineering students after completing my engineering degree.</span>
                            </div>
                              <div className="card">
                                <h1>Govt. Technical Training Institute (TEVTA)</h1>
                                <p>Visiting Lecturer (Electrical) • Feb 2016 - Feb 2018</p>
                                <span>Taught calculus mathematics to Diploma of Associate Engineering students after completing my engineering degree.</span>
                            </div>
                              <div className="card">
                                <h1>Riz Solutions</h1>
                                <p>Data Entry and Service Operator • May 2014 - Dec 2015</p>
                                <span>Accurately and efficiently entered large amounts of data into various systems and databases.</span>
                            </div>

                            <div className="Download-btn">
                                <a href={Resume} download={Resume}>Resume</a>
                               <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>

                    </div>
                    <div className="experience-card">
                         <div className="cards">
                           <div className="Experience-head">
                            <img src={ Arrow } alt="" />
                            <h1 style={ { "fontWeight": "300" } }>
                            Education
                            </h1>
                        </div>
                            <div className="card">
                                <h1>Bachelor’s in Electrical Engineering</h1>
                                <p>Hamdard University, Pakistan</p>
                                <span>2012 - 2016</span>
                            </div>
                            
                              <div className="card-2">
                                <div className="card-2-heading">
                            <img src={ Arrow } alt="" />
                                    <h1>Certifications</h1>
                                </div>
                                 <div className="card-content">
                                        <h2>Responsive Web Design in Adobe XD</h2>
                                        <p>Google, Offered on Coursera</p>
                                        <span>Completed on Sep 29, 2022</span>
                                    </div>
                            </div>
                           
                             <div className="card-2">
                                <div className="card-2-heading">
                            <img src={ Arrow } alt="" />
                                    <h1>Skills</h1>
                                </div>
                                 <div className="card-content">
                                    <h2>General</h2>
                                    <div className="tabs-section">
                                        <span className="tabs">UX Design</span>
                                        <span className="tabs">Product Design</span>
                                        <span className="tabs">User Research</span>
                                        <span className="tabs">Branding</span>
                                        <span className="tabs">Rapid Prototyping</span>
                                        <span className="tabs">Storyboarding</span>
                                        <span className="tabs">Usability Testing</span>
                                        <span className="tabs">Wireframing</span>
                                        <span className="tabs">Information Architecture</span>
                                    </div>
                                </div>
                                {/*  */}
                                 <div className="card-content">
                                    <h2>Design</h2>
                                    <div className="tabs-section">
                                        <span className="tabs">Figma</span>
                                        <span className="tabs">Adode Creative Suite</span>
                                        <span className="tabs">Adobe XD</span>
                                        <span className="tabs">Illustrator</span>
                                 </div>
                                </div>
                                
                                {/*  */}

                                  <div className="card-content">
                                    <h2>Soft Skills</h2>
                                    <div className="tabs-section">
                                        <span className="tabs">Collaboration with Developers</span>
                                        <span className="tabs">Proficiency in English Language</span>
                                        <span className="tabs">Empathizing with the Stakeholder</span>
                                        <span className="tabs">Communication Skills</span>
                                 </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                </section>
        </div>
            </div>
        </div>
    )
}

export default Reasons