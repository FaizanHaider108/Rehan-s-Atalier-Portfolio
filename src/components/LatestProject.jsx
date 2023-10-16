import React from 'react'
import "../../src/components/css/LatestProject.css"
import PixelCMS from "../../src/assets/PixelCMS.png"
import projext2 from "../assets/project-2.png"
import Arrow from "../assets/Arrow-2.png"
import Arrow2 from "../assets/Arrowup.png"
import project3 from "../assets/LUMIERE EVENTS Mockup Image.png"
import project1 from "../assets/LUMIERE EVENTS Mockup Image.png"
import luxmi from "../assets/LUXMI.png"
import CarProject from "../assets/car-project.png"

// mobile project
import project001 from "../MobileAssets/project1.png"
import project002 from "../MobileAssets/project2.png"
import project003 from "../MobileAssets/project3.png"
import project004 from "../MobileAssets/project4.png"
import project005 from "../MobileAssets/project5.png"

const LatestProject = () => {
  return (
      <div className='main'>
          <div className="latest-projects">
              <div className="featured-head">
                    <img src={ Arrow } alt="" />
                    <h1>Other Projects</h1>
           </div>
        <div className="latest-project-container">
          <div className="container-1">
            <div className="container-3">
              <a href="https://xd.adobe.com/view/0acd6f63-e324-4f0e-a205-da1985eb893e-5f9e/" target='_blank'>
                <img src={PixelCMS} alt="" />
              </a>
            </div>
            <div className="container-4">
              <div className="container-7">
                <a href="https://www.figma.com/file/zuDeN9Q7Q3tktB8weBTIWb/islamopedia-Website?type=design&node-id=0%3A1&mode=design&t=QQC9o6qcLU7nUz6T-1" target='_blank'>
            <img src={projext2} alt="" />
            </a>
              </div>
              <div className="container-8">
                <a href="https://xd.adobe.com/view/0a1b6cf4-c865-4f2a-9269-8d25970fae2f-5f48/" target='blank'>
                <img src={project3} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className='container-2'>
            <div className="conatiner-5">
              <a href="https://xd.adobe.com/view/0859a167-277c-45bb-85fe-4188577d2032-5d0a/" target='blank'>
              <img src={luxmi} alt="" />
              </a>
            </div>
            <div className="conatiner-6">
              <a href="https://www.figma.com/file/J517R8RdN2ynCJSznL4r8Q/Elads-Car-Title-Loan-Website?type=design&node-id=0%3A1&mode=design&t=t5mH9IQ5SfOn7uKW-1" target='_blank'>
                <img src={ CarProject } alt="" />
                </a>
            </div>
          </div>
        </div>
        
        <div className="mobile-latest-project">
          <div className="mobile-container-1">
            <div className="mobile-card">
              <img src={project001} alt="" />
             
              <div className="link">
                <a href="https://xd.adobe.com/view/0a1b6cf4-c865-4f2a-9269-8d25970fae2f-5f48/" target='blank'>
                  interactive Prototype
                <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
             <div className="mobile-card">
              <img src={project003} alt="" />
              <div className="link">
                <a href="https://xd.adobe.com/view/0859a167-277c-45bb-85fe-4188577d2032-5d0a/" target='blank'>
                  interactive Prototype
                <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
             <div className="mobile-card">
              <img src={project005} alt="" />
              <div className="link">
                <a href="https://www.figma.com/file/J517R8RdN2ynCJSznL4r8Q/Elads-Car-Title-Loan-Website?type=design&node-id=0%3A1&mode=design&t=t5mH9IQ5SfOn7uKW-1" target='blank'>
                  interactive Prototype
                <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-container-1">
             <div className="mobile-card">
              <img src={project002} alt="" />
              <div className="link">
                <a href="https://xd.adobe.com/view/0acd6f63-e324-4f0e-a205-da1985eb893e-5f9e/" target='blank'>
                  interactive Prototype
                <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
             <div className="mobile-card">
              <img src={project004} alt="" />
              <div className="link">
                <a href="https://www.figma.com/file/zuDeN9Q7Q3tktB8weBTIWb/islamopedia-Website?type=design&node-id=0%3A1&mode=design&t=QQC9o6qcLU7nUz6T-1" target='blank'>
                  interactive Prototype
                <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
          </div>
    </div>
  )
}

export default LatestProject