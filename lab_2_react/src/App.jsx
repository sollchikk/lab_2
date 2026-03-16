import Header from './components/Header';
import Objective from './components/Objective';
import Education from './components/Education';
import Certificates from './components/Certificates';
import TechnicalSkills from './components/TechnicalSkills';
import PersonalQualities from './components/PersonalQualities';
import Footer from './components/Footer';

function App() {
    return (
        
        <div className="bg-[#fdeff4] min-h-screen font-sans">

            {}
            <Header />

            {}
            <main className="max-w-[1200px] mx-auto my-[30px] p-[10px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">

                {}
                <Objective />
                <Education />
                <Certificates />
                <TechnicalSkills />

                {/* Останній блок */}
                <PersonalQualities />

            </main>

            {}
            <Footer />

        </div>
    );
}

export default App;