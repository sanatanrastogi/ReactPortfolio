function AboutMe() {
    return (
        <div id="about" className="bg-light my-5">
            <div className="container text-center py-5">
                <h1 className="font-weight-light">
                    <span className="text-info fontStyle">
                        About
                    </span> me
                </h1>
                <div style={{ fontStyle: "18px" }} className="text-center">
                    Who I am — a short description about me
                </div>
                <div className="row pt-5 pl-5 pr-5 fontStyle">
                    <p style={{ textAlign: "justify" }}>
                        <b>✓ </b> I'm <b>Sanatan Rastogi,</b>
                        born and brought up in Kanpur, and I'm a software engineer at Eduquity Career Technologies in Noida, Uttar Pradesh. At the Jagran Institute of Management, I earned a master's degree in computer applications. I earned a bachelor's degree in computer applications from the Axis Institute of Higher Education. I'm a confident, self-driven individual. I'm a leader that can adjust to any situation, work well with others in groups, and adapt to any situation.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                        <b>✓ </b>My area of expertise is .NET full-stack development. I have experience working on multiple projects with various technologies, and I also have strong communication & leadership skills.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;