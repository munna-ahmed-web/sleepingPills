import { Button } from "@nextui-org/react";
import usePostMutate from "../hooks/shared/usePostMutate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper";
import CommonHeader from "../components/CommonHeader";
import HeroSection from "../components/home/HeroSection";
import ServiceSummary from "../components/home/ServiceSummary";
import ProductSection from "../components/home/ProductSection";
import CategorySection from "../components/home/CategorySection";
import DetailsSection from "../components/home/DetailsSection";
import ReviewSection from "../components/home/ReviewSection";

const Home = () => {
  const navigate = useNavigate();
  const onSuccess = (data) => {
    // navigate(`/product/${data.data.id}`);
  };
  const OnError = (err) => {};

  return (
    <div>
      {/* =====hero section===== */}
      <CommonWrapper>
        <HeroSection />
      </CommonWrapper>

      {/* =====service summary section===== */}
      <CommonWrapper>
        <ServiceSummary />
      </CommonWrapper>

      {/* =====product section===== */}
      <CommonWrapper>
        <ProductSection />
      </CommonWrapper>

      {/* =====category section===== */}
      <CommonWrapper>
        <CategorySection />
      </CommonWrapper>

      {/* =====details section===== */}
      <CommonWrapper>
        <DetailsSection />
      </CommonWrapper>

      {/* =====review section===== */}
      <CommonWrapper>
        <ReviewSection />
      </CommonWrapper>
    </div>
  );
};

export default Home;
