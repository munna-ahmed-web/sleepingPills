import { Divider, Image } from "@nextui-org/react";
import React from "react";
import { navListForFooter } from "../../data/navData";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LockIcon,
  YoutubeIcon,
} from "lucide-react";

const MainFooter = () => {
  return (
    <div className="grid grid-cols-12 py-4">
      {/* ===support section=== */}
      <div className="px-4 col-span-4">
        <h4>Support</h4>
        <Divider className="my-2" />
        <p>
          <strong>Working hour :</strong>24 hours a day
        </p>
        <p>
          <strong>Working days :</strong> Monday to Sunday (7 days a week)
        </p>
      </div>

      {/* ===information section=== */}
      <div className="px-4 col-span-3">
        <h4>Information</h4>
        <ul>
          {navListForFooter.map((item) => {
            return (
              <li className="flex" key={item.id}>
                <ArrowRightIcon /> <Link>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ========branding section==== */}
      <div className="px-4 col-span-2">
        <div className="flex">
          <Image
            src="https://www.sleepingpillsuk.com/images/secured.png"
            // height={55}
            width={100}
          />
          <p className="text-sm">Shop online with us Safely & securely</p>
        </div>
        <Image
          src="https://www.sleepingpillsuk.com/images/dmca_protected_16_120.png"
          radius="none"
        />
      </div>

      {/* ===certification section=== */}
      <div className="px-4 col-span-3">
        <Image
          src="https://www.sleepingpillsuk.com/images/satisfaction.png"
          radius="none"
        />
        <div className="flex gap-2">
          <LockIcon />
          <p>Secure Shopping</p>
        </div>
        <Image
          src="https://www.sleepingpillsuk.com/images/icons_payment.png"
          className="mt-2"
          radius="none"
        />
        <div className="flex gap-2 mt-3">
          <FacebookIcon />
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
