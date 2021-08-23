import React from 'react'
import picture from '../assets/mypicture.jpg'
import CV from '../assets/TarasKiricenkoCV.docx'
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

const AboutMe = () => {

  return (
    <>
      <div className="col-9 mx-auto mt-4">
        <div className="row g-0">
          <div className="col-lg-5">
            <img src={picture} className="img-fluid rounded" alt="mypicture" />
          </div>
          <div className="col-lg-7">
            <div className="card-body pb-0">  
              <h5 className="card-title fw-bold">About Me || <OverlayTrigger id="trigger"
              placement="bottom"
              trigger={['hover', 'focus']}
              overlay={(
                <Popover style={{ marginLeft: "2rem", marginTop: "1rem" }} className="green">
                  <Popover.Content>
                    Yep, it is right here...
                </Popover.Content>
                </Popover>
              )}>
              <a href={CV} rel="noreferrer" className="hidealink">Download My CV</a></OverlayTrigger></h5>
              <br></br>
              <p className="card-text">I started my professional life as a teacher and shortly after I joined the hospitality industry, made a fast progression to leading roles. <br></br><br></br>I made a career change to Software Engineering, because I enjoy creating logical connections and fixtures between ideas and reality. I believe this industry will bring that to my life. I joined a Software Engineering Immersive course to get a grip on JavaScript and MERN. <br></br><br></br>I am looking forward to joining a supportive, well structured team with both learning and progression opportunities where I could enhance my new skills.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe