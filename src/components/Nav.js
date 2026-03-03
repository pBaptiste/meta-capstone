const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Order Online', href: '/order' },
  { label: 'Login', href: '/login' },
];

function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
