import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Icons } from "@/assets/icons/Icons";
import CommonWrapper from "../components/CommonWrapper";
import MainFooter from "../components/footer/MainFooter";
import CopyrightSection from "../components/footer/CopyrightSection";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="bg-second">
        <CommonWrapper>
          <MainFooter />
        </CommonWrapper>
      </div>
      <div className="bg-black">
        <CommonWrapper>
          <CopyrightSection />
        </CommonWrapper>
      </div>
    </footer>
  );
};

export default Footer;
const hoverVariants = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  hover: {
    scale: [1, 1.06, 1, 1.06, 1],
    originX: 0,
    color: "#428ee6",
  },
};
