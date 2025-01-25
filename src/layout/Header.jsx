import { Button, Select, SelectItem } from "@nextui-org/react";
import { headItems, navList } from "../data/navData";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mb-1">
      {/* ===top header=== */}
      <div className="flex justify-between items-center py-4">
        <img
          src="/public/sleepingpils_05.png"
          alt=""
          className="max-h-[30px]"
        />
        <img src="/public/head_btc.png" alt="" />
        <div className="flex gap-2">
          <Button radius="none" className="bg-second text-white">
            (0) My Cart
          </Button>
          <Select
            color="#057793"
            radius="none"
            items={headItems}
            placeholder="GBP"
            className="bg-first"
          >
            {(item) => (
              <SelectItem className="bg-first">{item.label}</SelectItem>
            )}
          </Select>
        </div>
      </div>

      {/* ===nav bar=== */}
      <div className="flex gap-1">
        {navList.map((item, index) => (
          <Link key={index} to={item.link} className="flex-1">
            <Button radius="none" className="w-full text-center px-4 bg-first">
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
