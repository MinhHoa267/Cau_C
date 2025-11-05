import React, { useEffect, useState } from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import ThemeSwitcher from '../components/ThemeSwitcher';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg.jpg)' }}
    >
      <div className="p-8 text-white">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />

        {/* Grid chia 2 khung trên – 2 khung dưới */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
          {/* Khung 1 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg text-center space-y-6" data-aos="fade-up">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src="/image/FB_IMG_1720961646901.jpg"
                  alt="Minh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Khung 1</h3>
            <Skills />
            <Projects />
            <ContactForm />
          </div>

          {/* Khung 2 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg text-center space-y-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src="/image/FB_IMG_1720961646901.jpg"
                  alt="Minh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Khung 2</h3>
            <Skills />
            <Projects />
            <ContactForm />
          </div>

          {/* Khung 3 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg text-center space-y-6" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src="/image/FB_IMG_1720961646901.jpg"
                  alt="Minh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Khung 3</h3>
            <Skills />
            <Projects />
            <ContactForm />
          </div>

          {/* Khung 4 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg text-center space-y-6" data-aos="fade-up" data-aos-delay="300">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src="/image/FB_IMG_1720961646901.jpg"
                  alt="Minh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Khung 4</h3>
            <Skills />
            <Projects />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
