import { Avatar, Card } from "@nextui-org/react";

const ReviewList = () => {
  return (
    <Card
      radius="none"
      className="p-5 flex flex-col justify-center items-center gap-3"
    >
      {Array(5)
        .fill(null)
        .map((item) => {
          return (
            <div className="flex gap-3">
              <Avatar
                radius="full"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
              <Card radius="none" shadow="none" className="p-2 border">
                <div>Star</div>
                <p>
                  {" "}
                  Ryan Harnick – Jan 18, 2024Brilliant company I was not sure to
                  start with but I paid and got what I needed and would
                  recommend to my friends and family. If I had the money I would
                  be purchasing today but when I do get paid I will use this
                  company again.
                </p>
              </Card>
            </div>
          );
        })}
    </Card>
  );
};

export default ReviewList;
