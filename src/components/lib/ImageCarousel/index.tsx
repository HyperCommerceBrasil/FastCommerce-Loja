import React, { FC, useState } from 'react';
import {
  ImageWrapper,
  SelectedImageWrapper,
  SmallImage,
  SmallImagesCarousel,
  SmallImageWrapper,
  ImageDiv,
} from './styles';

type Props = {
  images?: ProductImage[];
};

const ImageCarousel: FC<Props> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSelectSmallImage = (index: number) =>
    setSelectedImageIndex(index);

  const handleRenderSelectedImage = (): JSX.Element | undefined =>
    images ? <ImageDiv src={images[selectedImageIndex]?.image} /> : undefined;

  return (
    <ImageWrapper>
      <SelectedImageWrapper>{handleRenderSelectedImage()}</SelectedImageWrapper>
      <SmallImagesCarousel>
        {images?.map(({ id, image }, index) => (
          <SmallImageWrapper
            key={id}
            isActive={index === selectedImageIndex}
            onClick={() => handleSelectSmallImage(index)}
          >
            <SmallImage src={image} />
          </SmallImageWrapper>
        ))}
      </SmallImagesCarousel>
    </ImageWrapper>
  );
};

export default ImageCarousel;
