export default function Projects() {
  const projects = [
    { title: 'Portfolio Website', image: '/image/FB_IMG_1720961646901.jpg', desc: 'Xin chào', link: '#' },
    { title: 'Blog Platform',image: '/image/FB_IMG_1720961646901.jpg', desc: 'Hello.', link: '#' },
    { title: 'Weather App', image: '/image/FB_IMG_1720961646901.jpg', desc: 'Hi.', link: '#' },
  ];
  return (
    <div data-aos="fade-up" className="mt-8">
      <h3 className="text-2xl mb-2">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="bg-white text-black p-4 rounded shadow">
            <img src={p.image} alt={p.title} className="w-full h-32 object-cover rounded" />
            <h4 className="mt-2 text-lg">{p.title}</h4>
            <p>{p.desc}</p>
            <a href={p.link} className="text-blue-500">View</a>
          </div>
        ))}
      </div>
    </div>
  );
}
