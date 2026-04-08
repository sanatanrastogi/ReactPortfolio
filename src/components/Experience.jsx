import experience from '../data/Experience.json'
function Experience() {
    return (
        <div id="experience" className="container text-center my-5">
            <h1 className="font-weight-light fontStyle">
                My <span className="text-info"> Experience</span>
            </h1>
            <div clssName="subHeading">Where I've worked</div>
            <div className="row my-5 pt-3">
                {experience.map((e, index) => (
                    <div className="col-12 col-md-4 my-2" key={index}>
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>{e.organization}</h4>
                                </div>
                                <div className="card-text">
                                    <p>{e.position}</p>
                                    <p>{e.duration}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;