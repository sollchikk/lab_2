import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Objective from './components/Objective';
import Education from './components/Education';
import Certificates from './components/Certificates';
import TechnicalSkills from './components/TechnicalSkills';
import PersonalQualities from './components/PersonalQualities';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    // 1. Змінна стану theme
    const [theme, setTheme] = useState('light');

    // 2. Автоматичне перемикання за часом
    useEffect(() => {
        const currentHour = new Date().getHours();
        // Світла тема з 07:00 до 21:00, інакше темна
        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    // 3. Ручне перемикання
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        /* 4. Застосування класу dark-mode до головної обгортки */
        <div className={theme === 'dark' ? "dark-mode" : ""}>
            <div className="app-container">
                <Header />

                <div className="content-wrapper">
                    <main className="grid grid-cols-1 md:grid-cols-2 gap-[20px] py-[30px]">
                        <Objective />
                        <Education />
                        <Certificates />
                        <TechnicalSkills />
                        <Reviews />
                        <PersonalQualities />
                        <ContactForm />
                    </main>

                    {/* Кнопка ручного перемикання */}
                    <div className="flex justify-center pb-12">
                        <button id="toggleTheme" onClick={toggleTheme}>
                            {theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        </button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default App;