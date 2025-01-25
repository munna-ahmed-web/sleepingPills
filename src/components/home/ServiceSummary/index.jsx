import { Card } from "@nextui-org/react";
import { companySummaryData } from "../../../data/companyData";

const ServiceSummary = () => {
  return (
    <div className="my-3 text-center">
      <h2 className="font-bold text-xl">Welcome to Our 24/7 E-Pharmacy</h2>
      {companySummaryData.map((item) => {
        return (
          <Card radius="none" shadow="none" className="my-2 text-sm">
            {item.description}
          </Card>
        );
      })}
    </div>
  );
};

export default ServiceSummary;
