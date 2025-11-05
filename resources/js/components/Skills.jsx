export default function Skills() {
  const skills = ['React', 'Laravel', 'Tailwind', 'Docker'];
  return (
    <div data-aos="fade-up" className="mt-8">
      <h3 className="text-2xl mb-2">Skills</h3>
      <div className="flex justify-center gap-2 flex-wrap">
        {skills.map(skill => (
          <span key={skill} className="bg-white text-black px-3 py-1 rounded-full">{skill}</span>
        ))}
      </div>
    </div>
  );
}
