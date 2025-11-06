export default function ThemeSwitcher({ theme, setTheme }) {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
    >
      {theme === 'light' ? '🌙 Chuyển sang Dark' : '☀️ Chuyển sang Light'}
    </button>
  );
}
