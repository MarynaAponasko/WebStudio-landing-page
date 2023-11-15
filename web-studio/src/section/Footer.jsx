import { NavLink } from 'react-router-dom';
import sprite from '../assets/svg/sprite.svg';

const Footer = () => {
  return (
    <div
      className="text-center py-[60px] md:flex md:flex-col 
    lg:flex-row lg:text-start "
    >
      <div className=" md:flex md:justify-around lg:justify-start">
        <div className=" lg:mr-[100px] ">
          {' '}
          <NavLink
            className="  font-raleway text-[24px] lg:text-[26px] leading-[1.2] text-accent   "
            to="/"
          >
            Web<span className="text-whiteFont">Studio</span>
          </NavLink>
          <address className="mt-[28px] text-[14px] font-[400] not-italic text-whiteFont mb-[60px] md:mb-[0px] font-roboto ">
            <ul className=" flex flex-col  gap-[12px]">
              <li className=" hover:text-accent focus:text-accent transition-all">
                <a
                  href="https://goo.gl/maps/cb5NQ4BeMH8SRwyq5"
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li className="opacity-60 hover:text-accent focus:text-accent transition-all">
                <a href="mailto:info@example.com" className="">
                  info@example.com
                </a>
              </li>
              <li className="opacity-60 hover:text-accent focus:text-accent transition-all">
                <a href="tel:+380991111111" className="">
                  +38 099 111 11 11
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className=" font-roboto mb-[60px] lg:mb-[0px] lg:mr-[95px]">
          <h2 className=" mb-[20px] text-[14px] uppercase leading-[1.2] font-[700] text-whiteFont">
            приєднуйтесь
          </h2>
          <ul className=" flex justify-center gap-[10px]">
            <li className="bg-grayBackground p-[12px] rounded-[60%] ">
              <a href="" className="">
                <svg
                  className=" fill-whiteFont hover:fill-accent focus:fill-accent transition-all"
                  width="20"
                  height="20"
                >
                  <use href={sprite + '#icon-instagram'}></use>
                </svg>
              </a>
            </li>
            <li className=" bg-grayBackground p-[12px] rounded-[60%] ">
              <a href="" className="">
                <svg
                  className=" fill-whiteFont hover:fill-accent focus:fill-accent transition-all"
                  width="20"
                  height="20"
                >
                  <use href={sprite + '#icon-twitter'}></use>
                </svg>
              </a>
            </li>
            <li className="bg-grayBackground p-[12px] rounded-[60%] ">
              <a href="" className="">
                <svg
                  className=" fill-whiteFont hover:fill-accent focus:fill-accent transition-all"
                  width="20"
                  height="20"
                >
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
            </li>
            <li className="bg-grayBackground p-[12px] rounded-[60%] ">
              <a href="" className="">
                <svg
                  className=" fill-whiteFont hover:fill-accent focus:fill-accent transition-all"
                  width="20"
                  height="20"
                >
                  <use href={sprite + '#icon-linkedin'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" md:w-[450px] lg:w-[570px] md:mx-auto lg:mx-[0px]">
        <p className=" font-roboto mb-[20px]  text-[14px] uppercase leading-[1.2] font-[700] text-whiteFont">
          Підпишіться на розсилку
        </p>
        <form className="flex flex-col lg:flex-row ">
          <label>
            <input
              type="email"
              name="users_email"
              placeholder="E-mail"
              className=" w-[100%]  h-[50px] rounded-[4px] border-[1px] bg-transparent border-borderGrey py-[15px] px-[16px] mb-[20px] lg:mb-[0px] lg:w-[358px] lg:mr-[12px]"
              required
            />
          </label>

          <button
            type="submit"
            className="mx-auto w-[200px] h-[50px] font-roboto py-[6px] px-[31px] flex items-center  justify-center font-[700] text-whiteFont text-[16px] rounded-[4px] bg-accent  hover:scale-[1.05] focus:scale-[1.05] transition-all
            "
          >
            Підписатися
            <svg width="24" height="24" className="ml-[12px] fill-whiteFont">
              <use href={sprite + '#icon-send'}></use>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
