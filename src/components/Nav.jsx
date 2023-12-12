import headerLogo from "./../assets/images/header-logo.svg";
import hamBurger from "./../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamBurger}
            alt="Hamburger"
            width={20}
            height={20}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
