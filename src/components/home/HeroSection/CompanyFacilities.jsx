import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { companyMainFacilities } from "../../../data/companyData";

const CompanyFacilities = () => {
  return (
    <div className="flex gap-1 mt-1">
      {companyMainFacilities.map((item) => {
        return (
          <Card radius="none" className="flex-1 bg-first p-1" shadow="none">
            <div className="text-white text-center">{item.title}</div>
            <p className="text-center text-white">{item.summary}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default CompanyFacilities;
