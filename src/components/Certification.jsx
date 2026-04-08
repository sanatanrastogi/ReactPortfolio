import Certifications from '../data/Certification.json';
//import image from '../../public/pdfs/'

function Certification() {
    return (
        <>
            <h1 id="certifications" className="font-weight-light text-center my-3 pt-5 fontStyle">
                My <span className="text-info"> Certification Courses </span>
            </h1>

            <div className="text-center subHeading">
                My knowledge accredited by certifications
            </div>

            <div className="container">
                <div className="row text-center">
                    {Certifications.map((c, index) => (
                        <div className="col-12 col-md-4 py-5" key={index}>
                            <div className="card shadow h-100">

                                <img
                                    className="card-img-top zoom"
                                    src={`/images/${c.image}`}
                                    alt={`${c.name} Certificate`}
                                />

                                <div className="card-body">
                                    <div className="card-text">
                                        <h4>{c.name}</h4>
                                    </div>

                                    <div className="card-text fontStyle">
                                        {c.provider}
                                    </div>

                                    <a
                                        href={`/pdfs/${c.pdf}`}
                                        className="text-info"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={`${c.name} Certificate`}
                                    >
                                        View Certificate
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Certification;