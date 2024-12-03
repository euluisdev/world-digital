import { BsInstagram, BsEnvelope } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <ul>
          <li><a href="mailto:worlddigital0212@gmail.com" aria-label="Email"><BsEnvelope /></a></li>
          <li>
            <a href="https://worddigitaltec.web.app" aria-label="Logo">
              <img
                src="./img/world-digital-logo02.png"
                alt="Logo"
                className="logo-image"
              />
            </a>
          </li>
          <li><a href="https://www.instagram.com" aria-label="Instagram"><BsInstagram /></a></li>
        </ul>
      </div>
      <div className="developed">
        <p>Desenvolvido por <a href="https://worddigitaltec.web.app">Word Digital</a></p>
        <p>Copyright &copy; 2024 World Digital. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
};

export default Footer;