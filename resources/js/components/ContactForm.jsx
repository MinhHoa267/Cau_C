import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('contact');
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '' };
  });

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(form));
  }, [form]);

  return (
    <div data-aos="fade-up" className="mt-8">
      <h3 className="text-2xl mb-2">Contact Me</h3>
      <form className="max-w-md mx-auto space-y-2">
        <input type="text" placeholder="Name" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 rounded" />
        <input type="email" placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 rounded" />
        <textarea placeholder="Message" value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full p-2 rounded" />
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
