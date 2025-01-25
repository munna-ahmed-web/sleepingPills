import CommonTitle from "./CommonTitle";

const DescriptionCardWithTitle = ({ item }) => {
  return (
    <div className="mb-2">
      <CommonTitle>{item.title}</CommonTitle>
      <p className="text-sm">{item.description}</p>
    </div>
  );
};

export default DescriptionCardWithTitle;
