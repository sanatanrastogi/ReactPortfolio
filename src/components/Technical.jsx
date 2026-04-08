import Skills from '../data/Skill.json'
function Technical() {
    return (
        <div id="skills" className="bg-light w-100 mt-5">
            <div className="container text-center py-5">
                <h1 className="font-weight-light fontStyle">
                    My
                    <span className="text-info">
                        &nbsp;Technical Skills
                    </span>
                </h1>
                <div className="subHeading">I design, develop and deliver with these weapons</div>
                <div className="row mt-4">
                    {Skills.map((ts, index) => (
                        <div className="col-6 col-md-3 my-5" key={index}>
                            <img
                                className="rounded"
                                src={ts.src}
                                alt={`${ts.name} skill icon`}
                                width="100"
                                height="100"
                                loading="lazy"
                            />
                            {/* ★ Stars */}
                            <div className="mt-2">
                                {[1, 2, 3].map((starIndex) => (
                                    <span
                                        key={starIndex}
                                        className={starIndex <= ts.star ? "text-info" : "text-muted"}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Technical;