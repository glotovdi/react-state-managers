import { BaseLayout } from "../app/layouts/baseLayout";
import Carousel from "../widgets/carousel/carousel";

export const CarouselPage = () => {
  return (
    <BaseLayout className="carousel-layout">
      <Carousel />
    </BaseLayout>
  );
};
