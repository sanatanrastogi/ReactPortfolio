import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

function Contact() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="contact">
            <div className="container-fluid text-center" style={{ backgroundColor: "#000" }}>
                <div className="row pt-4">
                    <div className="col-12 pb-2">
                        <h2 className="text-light">Contact Me</h2>
                    </div>
                    <div className="col-7 col-sm-6 text-end text-light">
                        <p className="text-muted">
                            <a href="tel:+918957467119" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                +91 8957467119
                            </a> <br />
                            <a href="mailto:rastogisanatan@gmail.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                rastogisanatan@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="col-5 col-sm-6 text-start" style={{ paddingTop: "0.4rem" }}>
                        <a
                            href="https://www.linkedin.com/in/sanatanrastogi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sanatan Rastogi's Linkedin Account"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-light h1" />
                        </a>
                        <a
                            href="https://github.com/sanatanrastogi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sanatan Rastogi's GitHub Account"
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-light h1 pl-3" />
                        </a>
                        <a
                            href="https://learn.microsoft.com/en-us/users/sanatanrastogi-0881/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Sanatan Rastogi's microsoft learn Account"
                        >
                            <FontAwesomeIcon icon={faMicrosoft} className="text-light h1 pl-3" />
                        </a>
                    </div>
                    <div className="col-12 text-light">
                        <span>{time}</span>
                        <p>Copyright © Sanatan Rastogi {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;