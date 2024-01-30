import "./style.css";
import github from "../../imgs/icons/git.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/uniqcle" target="_blank">
                <img src={github} alt="" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 uniqcle.ru</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
