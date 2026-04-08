import EducationDetails from '../data/educationDetails.json';
function Education() {
    return (
        <div className="bg-white w-100">
            <div className="container text-center my-5">
                <h1 className="font-weight-light">
                    My 
                    <span className="text-info">
                        &nbsp;Education Qualifications
                    </span>
                </h1>
                <div className="row my-5 pt-3 fontStyle" style={{ fontSize: "16px" }} id="Education">
                    {EducationDetails.map((ed, index) => (
                        <div className="col-12 col-md-4 my-2" key={index}>
                            <div>
                                <h3>{ed.Name}</h3>
                            </div>
                            <div>
                                {ed.Institute} <br />
                                {ed.Duration} <br />
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
  );
}

export default Education;