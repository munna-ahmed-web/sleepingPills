import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { medicineCategory } from "../../../data/companyData";
import { generateRandomId } from "../../../lib/utils";
import { ArrowRightIcon } from "lucide-react";

const CategorySection = () => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-2">
      {medicineCategory.map((item) => {
        return (
          <Card
            key={generateRandomId()}
            isPressable
            isHoverable
            radius="none"
            shadow="sm"
            className="col-span-3"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.image}
                className="w-full object-cover h-[140px]"
                radius="none"
                shadow="sm"
                src={item.image}
                width="100%"
              />
            </CardBody>
            <CardFooter className=" flex justify-center text-small">
              <b className="flex">
                {item.title}
                <ArrowRightIcon />{" "}
              </b>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default CategorySection;
