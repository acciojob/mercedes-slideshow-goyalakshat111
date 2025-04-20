import React, { useState, useEffect, useRef } from "react";

const Slideshow = () => {
  let source = [
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
  ];
  let [image, setImage] = useState(source[0]);
  let index = useRef(0);

  useEffect(() => {
    let id = setInterval(() => {
      index.current = (index.current + 1) % source.length;
      setImage(source[index.current]);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <img src={image} alt="slideshow" />,
    </>
  );
};

export default Slideshow;
