import { useEffect, useState } from "react";

function Navbar() {
    const [active, setActive] = useState("Title");

    // 🔹 Smooth scroll handler
    const handleClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        // close navbar on mobile
        const nav = document.getElementById("collapseNav");
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
        }
    };

    // 🔹 Detect active section on scroll
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const onScroll = () => {
            let current = "Title";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 80;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top shadow-sm">
            <div className="container my-2">

                {/* Brand */}
                <a href="#Title" className="navbar-brand fw-bold text-dark">
                    Sanatan Rastogi
                </a>

                {/* Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNav"
                    aria-controls="collapseNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="collapseNav">
                    <div className="navbar-nav ms-auto">

                        {[
                            { id: "Title", label: "Home" },
                            { id: "skills", label: "Skills" },
                            { id: "certifications", label: "Certifications" },
                            { id: "experience", label: "Experience" },
                            { id: "work", label: "Work" },
                            { id: "about", label: "About" },
                            { id: "contact", label: "Contact" },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleClick(e, item.id)}
                                className={`nav-link ${active === item.id
                                        ? "text-info fw-semibold"
                                        : "text-dark"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Resume */}
                        <a
                            href="/pdfs/SanatanRastogi.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link text-dark"
                        >
                            Resume
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;