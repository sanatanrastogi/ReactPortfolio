import Navbar from './components/Navbar'
import Title from './components/Title';
import Education from './components/Education';
import Technical from './components/Technical';
import Certification from './components/Certification';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Work from './components/Work';
import Experience from './components/Experience';
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Title />
            <Education />
            <Technical />
            <Certification />
            <Experience />
            <Work />
            <AboutMe />
            <Contact />
        </>
    );
};

export default App;
