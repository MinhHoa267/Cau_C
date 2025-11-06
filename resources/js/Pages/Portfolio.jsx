import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const profiles = [
    {
      name: 'Minh Nguyễn',
      age: 19,
      hobbies: 'Thể thao và công nghệ',
      goal: 'Lập trình viên',
      image: '/image/FB_IMG_1720961646901.jpg',
    },
    {
      name: 'Lan Trần',
      age: 20,
      hobbies: 'Thiết kế và đọc sách',
      goal: 'UI/UX Designer',
      image: '/image/lan.jpg',
    },
    {
      name: 'Huy Phạm',
      age: 21,
      hobbies: 'Game và AI',
      goal: 'Backend Developer',
      image: '/image/huy.jpg',
    },
    {
      name: 'Thảo Lê',
      age: 22,
      hobbies: 'Du lịch và viết blog',
      goal: 'Fullstack Developer',
      image: '/image/thao.jpg',
    },
  ];

  const skills = ['React', 'Laravel', 'Tailwind', 'Docker'];

  const projects = [
    {
      title: 'Portfolio Website',
      image: '/image/FB_IMG_1720961646901.jpg',
      desc: 'Personal portfolio using React.',
      link: '#',
    },
    {
      title: 'Blog Platform',
      image: '/image/FB_IMG_1720961646901.jpg',
      desc: 'Laravel blog with admin panel.',
      link: '#',
    },
    {
      title: 'Weather App',
      image: '/image/FB_IMG_1720961646901.jpg',
      desc: 'Weather forecast using API.',
      link: '#',
    },
  ];

  return (
    <div
      className="bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: 'url(/bg.jpg)' }}
    >
      {/* Theme Switcher */}
      <div className="p-4 text-right">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Đổi giao diện
        </button>
      </div>

      {/* Các khung hồ sơ */}
      {profiles.map((profile, index) => (
        <div key={index} className="min-h-screen p-8 text-center text-white">
          {/* Ảnh đại diện */}
          <div className="flex justify-center mb-8" data-aos="zoom-in">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold mt-4">{profile.name}</h1>
          <h2 className="text-2xl mb-6">Lập trình viên Frontend</h2>

          {/* Giới thiệu */}
          <div className="max-w-xl mx-auto mb-8" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2">Giới thiệu bản thân</h3>
            <p className="text-lg">{profile.age} tuổi</p>
          </div>

          {/* Sở thích */}
          <div className="max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-2">Sở thích cá nhân</h3>
            <p className="text-lg">{profile.hobbies}</p>
          </div>

          {/* Mục tiêu */}
          <div className="max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold mb-2">Mục tiêu nghề nghiệp</h3>
            <p className="text-lg">{profile.goal}</p>
          </div>

          {/* Kỹ năng */}
          <div className="max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold mb-2">Kỹ năng</h3>
            <ul className="flex justify-center gap-4 flex-wrap text-lg">
              {skills.map((skill, i) => (
                <li key={i} className="bg-white text-black px-4 py-2 rounded shadow">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Dự án */}
          <div className="max-w-6xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold mb-4">Dự án</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <div key={i} className="bg-white text-black p-4 rounded shadow">
                  <img src={p.image} alt={p.title} className="w-full h-32 object-cover rounded" />
                  <h4 className="mt-2 text-lg font-semibold">{p.title}</h4>
                  <p>{p.desc}</p>
                  <a href={p.link} className="text-blue-500">View</a>
                </div>
              ))}
            </div>
          </div>

          {/* Liên hệ */}
          <div className="max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-2xl font-semibold mb-2">Liên hệ</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Tên của bạn" className="p-2 rounded text-black" />
              <input type="email" placeholder="Email" className="p-2 rounded text-black" />
              <textarea placeholder="Nội dung" className="p-2 rounded text-black" rows="4" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Gửi
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
