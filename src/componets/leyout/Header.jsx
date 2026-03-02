import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { Link } from "react-router-dom";
import Buttos from "../common/Buttos";
import { HiArrowCircleRight } from "react-icons/hi";
import Images from "../common/Images";
import headerLogo from "/src/assets/Logo.png";

function Header() {
  return (
    <Container>
      <div className={`w-330 mx-auto  h-20 py-2.5`}>
        <Flex className={`justify-between`}>
          <div className="w-[28%]">
            
            <Link to={"/"}>
              <Images imgsrc={headerLogo}/>
            </Link>
          </div>
          <div className="">
            <ul className="">
              <Flex className={`gap-5 font-medium text-[18px] `}>
                <li>
                  <Link to={"/"} className="text-[16px] font-OpenSans font-medium relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:bottom-0 before:left-0 before:duration-200 hover:before:w-full">Home</Link>
                </li>
                <li>
                  <Link to={"/about"} className="text-[16px] font-OpenSans font-medium relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary  before:bottom-0 before:left-0 before:duration-200 hover:before:w-full">About</Link>
                </li>
                <li>
                  <Link to={"/service"} className="text-[16px] font-OpenSans font-medium relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:bottom-0 before:left-0 before:duration-200 hover:before:w-full">Service</Link>
                </li>
                <li>
                  <Link to={"/contact"} className="text-[16px] font-OpenSans font-medium relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:bottom-0 before:left-0 before:duration-200 hover:before:w-full">Contact</Link>
                </li>
              </Flex>
            </ul>
          </div>
          <div className="w-[12%]">
            <Buttos btntxt={`contact us`} className={`flex items-center gap-2`}>
              <HiArrowCircleRight />
            </Buttos>
          </div>
        </Flex>
      </div>
    </Container>
  );
}

export default Header;
