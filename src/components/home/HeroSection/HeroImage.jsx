import { Card, Image } from "@nextui-org/react";
import { MobileIcon } from "@radix-ui/react-icons";

const HeroImage = () => {
  return (
    <div className="flex">
      {/* =====hero image====== */}
      <div className="object-contain">
        <Image
          src="https://www.sleepingpillsuk.com/images/banner2.jpg"
          radius="nonde"
        />
      </div>
      {/* =====hero  details====== */}
      <div className="p-2 bg-first flex-1">
        <div className="flex justify-center py-2">
          <Image src="https://www.sleepingpillsuk.com/images/free_pills_icon.png" />
        </div>
        <Card
          className="border-1 border-dashed border-white bg-transparent p-2"
          radius="none"
        >
          <h3 className="uppercase text-white font-bold text-center">
            Get 30 free pills
          </h3>
        </Card>
        <p className="text-white text-center text-sm p-2">
          With 1st Mobile App Order
        </p>
        <Card
          className="flex justify-center items-center border-1 border-white bg-transparent p-2"
          radius="none"
        >
          <h3 className="flex items-center gap-2 uppercase text-white font-bold text-center">
            <MobileIcon /> <p>Read More</p>
          </h3>
        </Card>
        <p className="text-white text-sm italic text-center mt-1">
          For Android Devices Only
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
