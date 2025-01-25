import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CommonWrapper from "../components/CommonWrapper";
import { Navbar } from "@nextui-org/react";

export default function MainLayout() {
  return (
    <div>
      <div>
        <CommonWrapper>
          <Header />
        </CommonWrapper>
      </div>
      <div className="min-h-screen max-h-full">
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
