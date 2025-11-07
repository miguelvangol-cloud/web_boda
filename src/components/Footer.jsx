export default function Footer({ className = '' }) {
  return (
    <footer className={`relative py-6 text-center text-muted bg-ivory border-t border-gold overflow-hidden ${className}`} role="contentinfo">
      <div className="relative container">
        <p>Con amor, Celia &amp; Miguel <span aria-hidden="true">❤️</span></p>
        <p className="text-sm">&copy; 2026 Nuestra Boda</p>
      </div>
    </footer>
  );
}
