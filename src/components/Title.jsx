function Title() {
    return (
        <div className="container">
            <div className="row text-center align-items-center my-5 py-5" id="Title">
                <div className="col-12 col-md-6">
                    <img
                        className="img-fluid rounded-circle"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        alt="Profile photo placeholder — Sanatan Rastogi"
                        width="300"
                        height="150"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <div className="font-weight-light fontstyle" style={{ fontSize: "50px" }} >
                        Hi,<br />I'm
                        <span className="text-info"> Sanatan Rastogi</span>
                    </div>
                    <h4 className="font-weight-light fontStyle"> A Full Stack Developer </h4>
                </div>
            </div>
        </div>
    );
};

export default Title;