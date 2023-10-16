import React from 'react'
import Arrow from "../assets/Arrow-2.png"
import "../components/css/Faetured.css"
import Broad from "../../src/assets/Broad.png"
import ArrowUp from "../../src/assets/Arrowup.png"
import Joyrid from "../../src/assets/Joyriid.png"
import JenConnect from "../../src/assets/GemConnects.png"
import Smartbot from "../../src/assets/SmartBOT.jpg"
// motion
import { motion } from "framer-motion"
// varient
import { fadeIn } from "../varient.js";
const Featured = () => {
    return (
        <div className='main' id="portfolio">
            <div className="featured-head">
                <img src={ Arrow } alt="" />
                <h1 style={ { "fontWeight": "300" } }>Featured Projects</h1>
            </div>


            <div className='featured-section'>

                {/* desktop side */ }
                <div className="projects">

                    <motion.div
                        variants={ fadeIn( 'left', 0.3 ) }
                        initial='hidden'
                        whileInView={ 'show' }
                        viewport={ { once: true, amount: 0.7 } }
                        className="project-1">
                        <div className="project-contant">
                            <div
                                variants={ fadeIn( 'up', 0.3 ) }
                                initial='hidden'
                                whileInView={ 'show' }
                                viewport={ { once: false, amount: 0.7 } }
                                className="project-desc">
                                <h2>BROAD</h2>
                                <p>As a UI/UX Designer for Broad, I delivered a user-friendly and visually appealing interface for the route optimization engine, taking into account the needs of logistics and transportation companies. My approach to the project involved:</p>
                            </div>
                            <div className="Project-list">
                                <ul>
                                    <li>Conducting user research to understand the needs and pain points of users.</li>
                                    <li>Designing wireframes and prototypes to test and refine the user experience.</li>
                                    <li>Creating high-fidelity mockups and visuals to communicate the design to stakeholders.</li>
                                    <li>Working with developers to implement the design and ensure a smooth user experience.</li>
                                </ul>
                            </div>
                            <div className="Broad-links">
                                <div className="link-1">
                                    <a href="https://www.behance.net/gallery/153871677/UIUX-Design-for-Broad-Route-Optimization-Engine"
                                        target='blank'
                                    >Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link-1">
                                    <a href="https://xd.adobe.com/view/71623cff-6df4-47e6-a6f9-ea1fba3dd53f-2431/?fullscreen"
                                        target='blank'
                                    >Interactive Prototype
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="image-side">
                            <div className="project-img">
                                <img src={ Broad } alt="" />
                            </div>
                            <div className="tags-section">
                                <div className='tags'>
                                    <span>Product Design</span>
                                </div>
                                <div className='tags'>
                                    <span>Brand Identity</span>
                                </div>
                                <div className='tags'>
                                    <span>Wireframing</span>
                                </div>
                                <div className='tags'>
                                    <span>Interactive prototype</span>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={ fadeIn( 'right', 0.3 ) }
                        initial='hidden'
                        whileInView={ 'show' }
                        viewport={ { once: true, amount: 0.7 } }
                        className="project-1">

                        <div className="image-side">
                            <div className="project-img">
                                <img src={ Joyrid } alt="" />
                            </div>
                            <div className="tags-section">
                                <div className='tags'>
                                    <span>Web Design</span>
                                </div>
                                <div className='tags'>
                                    <span>Mobile App Design</span>
                                </div>
                                <div className='tags'>
                                    <span>Brand Identity</span>
                                </div>
                                <div className='tags'>
                                    <span>Interactive prototype</span>
                                </div>

                            </div>
                        </div>
                        <div className="project-contant">
                            <div className="project-desc">
                                <h2>JOYRIID</h2>
                                <p>As a Product Designer and Brand Identity Designer for JOYRIID, I took a user-centered approach to design both the website and mobile app for renters and customers. I conducted research to understand the needs and pain points of both users, and then designed wireframes, prototypes, and high-fidelity mockups to test and refine the user experience. I also worked with developers to ensure that the design was implemented smoothly. My deliverables included:</p>
                            </div>
                            <div className="Project-list">
                                <ul>
                                    <li>A user-centered design for both the website and mobile app for renters and customers.</li>
                                    <li>A clear and concise user interface that made it easy for renters and customers to find and book available vehicles, communicate with vehicle owners, and manage their rental experience.</li>
                                    <li>A well-organized and easy-to-use dashboard for both renters and customers to track their activity and manage their accounts.</li>
                                </ul>
                            </div>
                            <div className="Broad-links">
                                <div className="link-1">
                                    <a href="https://www.behance.net/gallery/115569703/Joyriid-Website-UI-UX-Project" target='blank'>Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link-1">
                                    <a href="https://xd.adobe.com/view/de1eea14-50fe-4a2e-bb95-8690dabc1fa9-8b4d/" target='blank'>Interactive Prototype Web
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link-1">
                                    <a href="https://xd.adobe.com/view/cb5a8746-043d-4c83-96c4-4d03727efb01-9e09/?fullscreen" target='blank'>Interactive Prototype App
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        variants={ fadeIn( 'left', 0.3 ) }
                        initial='hidden'
                        whileInView={ 'show' }
                        viewport={ { once: true, amount: 0.7 } }
                        className="project-1">
                        <div className="project-contant">
                            <div className="project-desc">
                                <h2>GEMCONNECTS</h2>
                                <p>As a Product Designer and Brand Identity Designer for GemConnects, I designed both the e-commerce and auction sections of the platform for buyers and sellers. I took a user-centered approach, conducting research to understand the needs and pain points of both users. I then designed wireframes, prototypes, and high-fidelity mockups to test and refine the user experience. I also worked with developers to ensure that the design was implemented smoothly. My deliverables included:</p>
                            </div>
                            <div className="Project-list">
                                <ul>
                                    <li>A user-centered design for both the e-commerce and auction sections of the platform.</li>
                                    <li>A clear and concise user interface that made it easy for buyers and sellers to find and purchase products, or list and sell products.</li>
                                    <li>A well-organized and easy-to-use dashboard for both buyers and sellers to track their activity and manage their accounts.</li>
                                </ul>
                            </div>
                            <div className="Broad-links">
                                <div className="link-1">
                                    <a href="https://www.behance.net/gallery/166835325/Web-Design-for-GemConnects" target='blank'>Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link-1">
                                    <a href="https://xd.adobe.com/view/eed30ae1-89eb-4655-8f47-2b9518ae7031-bb80/" target='blank'>Interactive Prototype
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="image-side">
                            <div className="project-img">
                                <img src={ JenConnect } alt="" />
                            </div>
                            <div className="tags-section">
                                <div className='tags'>
                                    <span>Product Design</span>
                                </div>
                                <div className='tags'>
                                    <span>Brand Identity</span>
                                </div>
                                <div className='tags'>
                                    <span>Wireframing</span>
                                </div>
                                <div className='tags'>
                                    <span>Interactive prototype</span>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                    variants={ fadeIn( 'right', 0.3 ) }
                        initial='hidden'
                        whileInView={ 'show' }
                        viewport={ { once: true, amount: 0.7 } }
                        className="project-1">

                        <div className="image-side">
                            <div className="project-img">
                                <img src={ Smartbot } alt="" />
                            </div>
                            <div className="tags-section">
                                <div className='tags'>
                                    <span>Web Design</span>
                                </div>
                                <div className='tags'>
                                    <span>Mobile App Design</span>
                                </div>
                                <div className='tags'>
                                    <span>Brand Identity</span>
                                </div>
                                <div className='tags'>
                                    <span>Interactive prototype</span>
                                </div>

                            </div>
                        </div>
                        <div className="project-contant">
                            <div className="project-desc">
                                <h2>SMARTBOT</h2>
                                <p>As a Product Designer and Brand Identity Designer for SmartBOT, I took a user-centered approach to design the website for both customers and vendors. I conducted research to understand the needs and pain points of both users, and then designed wireframes, prototypes, and high-fidelity mockups to test and refine the user experience. I also worked with developers to ensure that the design was implemented smoothly. My deliverables included:</p>
                            </div>
                            <div className="Project-list">
                                <ul>
                                    <li>A user-centered design for both customers and vendors.</li>
                                    <li>A clear and concise user interface that made it easy for customers to find and hire the right vendor for their automation needs, and for vendors to find new clients and opportunities.</li>
                                    <li>A well-organized and easy-to-use dashboard for both customers and vendors to track their activity and manage their accounts</li>
                                </ul>
                            </div>
                            <div className="Broad-links">
                                <div className="link-1">
                                    <a href="https://www.behance.net/gallery/137728775/UIUX-Design-for-SmartBOT" target='blank'>Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link-1">
                                    <a href="https://xd.adobe.com/view/b4eaddeb-6491-4a69-9f87-1f3eadf5856d-e1b9/" target='blank'>Interactive Prototype
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>

                            </div>
                        </div>

                    </motion.div>

                </div>

                {/* mobile side */ }
                <div className="mobile-projects">

                    <div className='mobile-project'>
                        <div className="mobile-heading">
                            <h3>BROAD</h3>
                        </div>
                        <div className="mobile-img">
                            <img src={ Broad } alt="" />
                        </div>
                        <div className="mobile-contant">
                            <p className="mobile-para">
                                As a UI/UX Designer for Broad, I delivered a user-friendly and visually appealing interface for the route optimization engine, taking into account the needs of logistics and transportation companies. My approach to the project involved:
                            </p>
                            <div className="mobilelist">
                                <ul>
                                    <li>Conducting user research to understand the needs and pain points of users.</li>
                                    <li>Designing wireframes and prototypes to test and refine the user experience.</li>
                                    <li>Creating high-fidelity mockups and visuals to communicate the design to stakeholders.</li>
                                    <li>Working with developers to implement the design and ensure a smooth user experience.</li>
                                </ul>
                            </div>
                            <div className="contant-links">
                                <div className="link">
                                    <a href="https://www.behance.net/gallery/153871677/UIUX-Design-for-Broad-Route-Optimization-Engine" target='blank'>Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://xd.adobe.com/view/71623cff-6df4-47e6-a6f9-ea1fba3dd53f-2431/?fullscreen" target='blank'>Interactive Prototype
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mobile-project'>
                        <div className="mobile-heading">
                            <h3>JOYRID</h3>
                        </div>
                        <div className="mobile-img">
                            <img src={ Joyrid } alt="" />
                        </div>
                        <div className="mobile-contant">
                            <p className="mobile-para">
                                As a Product Designer and Brand Identity Designer for JOYRIID, I took a user-centered approach to design both the website and mobile app for renters and customers. I conducted research to understand the needs and pain points of both users, and then designed wireframes, prototypes, and high-fidelity mockups to test and refine the user experience. I also worked with developers to ensure that the design was implemented smoothly. My deliverables included:
                            </p>
                            <div className="mobilelist">
                                <ul>
                                    <li>A user-centered design for both the website and mobile app for renters and customers.</li>
                                    <li>A clear and concise user interface that made it easy for renters and customers to find and book available vehicles, communicate with vehicle owners, and manage their rental experience</li>
                                    <li>A well-organized and easy-to-use dashboard for both renters and customers to track their activity and manage their accounts.</li>
                                </ul>
                            </div>
                            <div className="contant-links">
                                <div className="link">
                                    <a href="https://www.behance.net/gallery/115569703/Joyriid-Website-UI-UX-Project" target='blank'>Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://xd.adobe.com/view/de1eea14-50fe-4a2e-bb95-8690dabc1fa9-8b4d/" target='blank'>Interactive Prototype Web
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://xd.adobe.com/view/cb5a8746-043d-4c83-96c4-4d03727efb01-9e09/?fullscreen" target='blank'>Interactive Prototype App
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mobile-project'>
                        <div className="mobile-heading">
                            <h3>GEMCONNECTS</h3>
                        </div>
                        <div className="mobile-img">
                            <img src={ JenConnect } alt="" />
                        </div>
                        <div className="mobile-contant">
                            <p className="mobile-para">
                                As a Product Designer and Brand Identity Designer for GemConnects, I designed both the e-commerce and auction sections of the platform for buyers and sellers. I took a user-centered approach, conducting research to understand the needs and pain points of both users. I then designed wireframes, prototypes, and high-fidelity mockups to test and refine the user experience. I also worked with developers to ensure that the design was implemented smoothly. My deliverables included:
                            </p>
                            <div className="mobilelist">
                                <ul>
                                    <li>A user-centered design for both the e-commerce and auction sections of the platform.</li>
                                    <li>A clear and concise user interface that made it easy for buyers and sellers to find and purchase products, or list and sell products.</li>
                                    <li>A well-organized and easy-to-use dashboard for both buyers and sellers to track their activity and manage their accounts</li>
                                </ul>
                            </div>
                            <div className="contant-links">
                                <div className="link">
                                    <a href="https://www.behance.net/gallery/166835325/Web-Design-for-GemConnects" target='blank'>Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://xd.adobe.com/view/eed30ae1-89eb-4655-8f47-2b9518ae7031-bb80/" target='blank'>Interactive Prototype
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mobile-project'>
                        <div className="mobile-heading">
                            <h3>SMARTBOT</h3>
                        </div>
                        <div className="mobile-img">
                            <img src={ Smartbot } alt="" />
                        </div>
                        <div className="mobile-contant">
                            <p className="mobile-para">
                                As a Product Designer and Brand Identity Designer for SmartBOT, I took a user-centered approach to design the website for both customers and vendors. I conducted research to understand the needs and pain points of both users, and then designed wireframes, prototypes, and high-fidelity mockups to test and refine the user experience. I also worked with developers to ensure that the design was implemented smoothly. My deliverables included:
                            </p>
                            <div className="mobilelist">
                                <ul>
                                    <li>A user-centered design for both customers and vendors.</li>
                                    <li>A clear and concise user interface that made it easy for customers to find and hire the right vendor for their automation needs, and for vendors to find new clients and opportunities.</li>
                                    <li>A well-organized and easy-to-use dashboard for both customers and vendors to track their activity and manage their accounts</li>
                                </ul>
                            </div>
                            <div className="contant-links">
                                <div className="link">
                                    <a href="https://www.behance.net/gallery/137728775/UIUX-Design-for-SmartBOT" target="_blank">Case Study
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://xd.adobe.com/view/b4eaddeb-6491-4a69-9f87-1f3eadf5856d-e1b9/" target='blank'>Interactive Prototype
                                        <img src={ ArrowUp } alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured 