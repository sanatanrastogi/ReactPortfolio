import works from '../data/Work.json';
function Work() {
    return (
        <div id="work" className="container text-center my-5">
            <h1 className="font-weight-light fontStyle">
                My <span className="text-info"> Work</span>
            </h1>
            <div className="subHeading"> Projects done by me </div>
            <div className="row my-5 pt-3">
                {works.map((w, index) => (
                    <div className="col-12 col-md-4 my-2" key={index}>
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>{w.name}</h4>
                                </div>
                                <div className="card-text">
                                    {w.description}
                                </div>
                            </div>
                            <a href={w.link} className="stretched-link"></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
}

export default Work;