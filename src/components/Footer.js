import logo from '../icons_assets/Logo.svg';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Order Online', href: '/order' },
  { label: 'Login', href: '/login' },
];

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon logo" />
        </div>
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Street</li>
            <li>Chicago, IL</li>
            <li>(312) 555-0100</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
