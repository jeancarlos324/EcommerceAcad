import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselProduct = () => {
  return (
    <Carousel className="hidden md:block">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/1c60c3ea-bd78-4cc3-8ac6-bdcdd2e7a79b___4dc3dabc333f9b6eadd95b543b788851.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/980ef61f-1463-48a7-b8c7-b9476db93524___33bf0650ac90f24e8aa45be0a518dcc2.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/071c3916-5fa9-4eee-9e56-8193c800d0cd___66ac6c1f9ff34a6b0fc5cfdf69517416.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselProduct;
