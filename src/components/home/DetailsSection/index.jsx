import {
  homePageDetailsData,
  homePageDetailsMiddleData,
  homePageDetailsBottomData,
} from "../../../data/companyData";
import CommonTitle from "../../ui/CommonTitle";
import DescriptionCardWithTitle from "../../ui/DescriptionCardWithTitle";

const DetailsSection = () => {
  return (
    <div className="mt-5">
      {/* =====upper details==== */}
      <div>
        {homePageDetailsData.map((item) => {
          return <DescriptionCardWithTitle item={item} />;
        })}
      </div>
      {/* =====middle part==== */}
      <div>
        <CommonTitle>
          How to Deal with Insomnia without Sleeping Tablets
        </CommonTitle>
        {homePageDetailsMiddleData.map((item) => {
          return (
            <div>
              <p>{item.summary}</p>
              <ul className="list-disc list-inside">
                {item.details.map((listItem) => {
                  return <li>{listItem}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* =====bottom details==== */}
      <div>
        {homePageDetailsBottomData.map((item) => {
          return <DescriptionCardWithTitle item={item} />;
        })}
      </div>
    </div>
  );
};

export default DetailsSection;
