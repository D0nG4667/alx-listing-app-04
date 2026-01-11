const MadeWithLove = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;

  return (
    <footer className="bg-footer text-footer-foreground py-6 text-center text-sm">
      <p>
        © {startYear === currentYear ? currentYear : `${startYear}–${currentYear}`} Made with{' '}
        <span className="animate-pulse text-pink-500">💖</span> by{' '}
        <a
          href="https://www.linkedin.com/in/dr-gabriel-okundaye/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          Gabriel Okundaye
        </a>
        .
      </p>
    </footer>
  );
};

export default MadeWithLove;
