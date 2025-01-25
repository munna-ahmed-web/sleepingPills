import { Button, Card, Image, Radio, RadioGroup } from "@nextui-org/react";
import { productVariant } from "../../data/productData";
import { ShoppingCartIcon } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <Card radius="none" shadow="none" className="border-1 col-span-3 p-2">
      <h3 className="text-center font-semibold">Zopiclone 7.5 mg / 10 mg</h3>
      <div className="flex items-center justify-center">
        <Image
          src="https://www.sleepingpillsuk.com/product-img/zopiclone.png"
          width={150}
        />
      </div>
      <p className="text-sm text-justify">
        Zopiclone, sold under brand names such as Imovane and Datolan, is a
        sleep inducing medication for the treatment of insomnia. Treatment with
        zopiclone provides relief for people suffering from insomnia by allowing
        them to get to sleep quickly and stay asleep throughout the night.
      </p>
      <div className="flex justify-center items-center mt-3">
        <RadioGroup orientation="horizontal">
          {productVariant.map((item) => {
            return (
              <Radio color="danger" value={item.value}>
                {item.label}
              </Radio>
            );
          })}
        </RadioGroup>
      </div>
      <div className="flex justify-center items-center gap-3 mt-2">
        <Button radius="none" className="bg-second text-white">
          View Info
        </Button>
        <Button radius="none" className="bg-second text-white">
          <ShoppingCartIcon />
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
