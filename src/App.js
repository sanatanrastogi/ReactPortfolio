import React from 'react';
import Navbar from '../src/component/basics/navbar.js';
import EduDetail from '../src/component/basics/EduDetail.js';
import TechDetail from '../src/component/basics/techDetail.js';
import ExpDetail from '../src/component/basics/expDetail.js';

const App = () => {
    return (
        <>
            <Navbar />
            {/* <!--Title Section--> */}

            <div className="container">
                <div className="row text-center align-items-center my-5 py-5">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid rounded-circle"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            alt="Dummyimage" width="300px" height="150px" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="font-weight-light" style={{ fontSize: "50px", fontFamily: "'Trebuchet MS', sans-serif" }}>Hi,<br />I
                            am <span className="text-info">Sanatan Rastogi</span></div>
                        <h4 className="font-weight-light" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>A Developer</h4>
                    </div>
                </div>
            </div>

            {/* <!--Education Section--> */}

            <div className="bg-white w-100">
                <div className="container text-center my-5">
                    <h1 className="font-weight-light" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>My<span className="text-info">
                        Education Qualifications</span></h1>
                    <div className="row my-5 pt-3" style={{ fontFamily: "'Trebuchet MS', sans-serif;fontSize: 16px" }}>
                        <EduDetail />
                    </div>
                </div>
            </div>

            {/* <!--Technical Skills--> */}

            <a name="skills"></a>
            <div className="bg-light w-100 mt-5">
                <div className="container text-center py-5">
                    <h1 className="font-weight-light" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>My<span className="text-info">
                        Technical Skills</span></h1>
                    <div style={{ fontSize: "18px" }}>I design, develop and deliver with these weapons</div>
                    <div className="row my-md-5 py-md-3 mt-4">
                        <TechDetail />
                    </div>
                </div>
            </div>

            {/* <!--About me Section--> */}
            <a name="about"></a>

            <div className="bg-light my-5">
                <div className="container text-center py-5">
                    <h1 className="font-weight-light">
                        <span className="text-info" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                            About me
                        </span>
                    </h1>
                    <div style={{ fontSize: 18, textAlign: "center" }}>
                        What I'm, A short description about me
                    </div>
                    <div className="row pt-5 pl-5 pr-5" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
                        <p className="text-justify">
                            <b>✓ </b> I'm <b>Sanatan Rastogi,</b> born and brought up in Kanpur and I am a software developer at Kanpur Plastipack Pvt. Ltd. in Kanpur, Uttar Pradesh. At the Jagran Institute of Management, I earned a master's degree in computer applications. I earned a bachelor's degree in computer applications from the Axis Institute of Higher Education. I'm a confident, self-driven individual. I am a leader that can adjust to any situation, work well with others in groups, and adapt to any situation.
                        </p>
                        <p className="text-justify">
                            <b>✓ </b>My area of expertise is full stack development. I have experience working on multiple projects with various technologies, and I have strong communication skills.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!--Work Section--> */}
            <a name="work"></a>

            <div className="container text-center my-5">
                <h1 className="font-weight-light" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>My<span className="text-info">
                    Work</span></h1>
                <div style={{ fontSize: "18px" }}>Projects and Internships done by me</div>
                <div className="row my-5 pt-3">
                    <ExpDetail />
                </div>
            </div>

            {/* <!--Footer--> */}
            <a name="contact"></a>
            <footer>
                <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
                    <div className="py-4" style={{fontFamily: "'Trebuchet MS', sans-serif"}}>
                        <h2 className="text-light">Contact Me</h2>
                        <h5 className="text-muted pt-3">
                            <span className="text-info">
                                <a href="tel:+918957467119" target="_blank">+91 8957467119</a>
                            </span>
                        </h5>
                        <h5 className="text-muted">
                            <span className="text-info">
                                <a href="mailto:rastogisanatan@gmail.com" target="_blank">rastogisanatan@gmail.com</a>
                            </span>
                        </h5>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/sanatanrastogi">
                            <i className="fab fa-linkedin-in text-light d-block h1"></i>
                        </a>
                    </div>
                    <div className="text-muted py-1">
                        <span id="clk"></span>
                        <p>Copyright © Sanatan Rastogi 2022</p>
                    </div>
                </div>
            </footer>

        </>
    );
};
export default App;