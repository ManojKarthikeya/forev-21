import React, { useState } from 'react'
import { Card, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';

export default function CustomCarousal() {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const products = [
    {
        ProductId : "2000460725",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw20943172/1_front_750/00460725-03.jpg",
        Brand : "F21",
        DisplayName : "Floral Print Sweetheart Midi Dress"
    },
    {
        ProductId : "2000426848",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw0b2342ef/1_front_750/00426848-02.jpg",
        Brand : "F21",
        DisplayName : "Faux Leather Stiletto Heels"
    },
    {
        ProductId : "2000455391",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw47e07609/1_front_750/00455391-02.jpg",
        Brand : "F21",
        DisplayName : "Faux Leather Cropped Blazer & Skirt Set"
    },
    {
        ProductId : "2000463108",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw643282b8/1_front_750/00463108-01.jpg",
        Brand : "F21",
        DisplayName : "Mesh Bodycon Dress"
    },
    {
        ProductId : "2000470110",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwdc98c9b4/1_front_750/00470110-03.jpg",
        Brand : "F21",
        DisplayName : "Striped Sweater-Knit Crop Top"
    },
    {
        ProductId : "2000464283",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwdf17b670/1_front_750/00464283-03.jpg",
        Brand : "F21",
        DisplayName : "Marble Print Bustier Crop Top"
    },
    {
        ProductId : "2000409560",
        DefaultProductImage : "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw94ef093e/1_front_750/00409560-19.jpg",
        Brand : "F21",
        DisplayName : "French Terry Zip-Up Hoodie"
    }
  ]

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? products.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  console.log(products)

  const slides = products.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.ProductId + 'a'}
      >
        <Card style={{border: '0'}}>
        <img src={item.DefaultProductImage} alt={item.ProductId} />
        </Card>
        <CarouselCaption 
          captionText={item.DisplayName}
        />
      </CarouselItem>
    );
  });
  return (
    <Carousel dark style={{maxWidth: '30%'}}
    activeIndex={activeIndex}
    next={next}
    previous={previous}
    //   {...args}
  >
    <CarouselIndicators
      items={products}
      activeIndex={activeIndex}
      onClickHandler={goToIndex}
    />
    {slides}
    <CarouselControl
      direction="prev"
      directionText="Previous"
      onClickHandler={previous}
    />
    <CarouselControl
      direction="next"
      directionText="Next"
      onClickHandler={next}
    />
  </Carousel>
  )
}
