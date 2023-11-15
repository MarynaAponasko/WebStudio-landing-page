import { NavLink } from 'react-router-dom';
import sprite from '../assets/svg/sprite.svg';

const Header = () => {
  return (
    <header className="h-[60px] md:h-[80px] flex py-[10px]  justify-between items-center ">
      <nav className=" md:flex md:items-baseline">
        <NavLink
          className="font-raleway text-[24px] lg:text-[26px] leading-[1.2] text-accent md:mr-[140px] lg:mr-[250px]"
          to="/"
        >
          Web<span className="text-black">Studio</span>
        </NavLink>
        <ul className="hidden md:flex md:gap-[51px] font-roboto text-[14px] lg:text-[16px] leading-[1.2] font-[500]">
          <li className="">
            <NavLink
              className=" text-darkFont hover:text-accent focus:text-accent transition-all "
              to="/"
            >
              Студія
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="text-darkFont hover:text-accent focus:text-accent transition-all"
              to="/portfolio"
            >
              Портфоліо
            </NavLink>
          </li>
        </ul>
      </nav>
      <button type="button" className=" md:hidden" data-menu-open>
        <svg className="modal-menu-open__icon" width="40" height="40">
          <use href={sprite + '#icon-mob-menu'}></use>
        </svg>
      </button>
      <ul className="hidden md:flex  flex-wrap lg:flex-nowrap w-[135px] lg:w-[auto] text-[12px] lg:text-[14px] text-lightFont fill-lightFont ">
        <li className=" hover:text-accent focus:text-accent hover:fill-accent focus:fill-accent transition-all lg:mr-[40px] ">
          <a href="mailto:info@devstudio.com" className=" flex items-center ">
            <svg className="  mr-[8px]" width="16" height="12">
              <use href={sprite + '#icon-email'}></use>
            </svg>
            info@devstudio.com
          </a>
        </li>
        <li className="hover:text-accent focus:text-accent hover:fill-accent focus:fill-accent transition-all">
          <a href="tel:+380961111111" className="flex items-center  ">
            <svg className=" mr-[8px]" width="10" height="16">
              <use href={sprite + '#icon-phone'}></use>
            </svg>
            +38 096 111 11 11
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
