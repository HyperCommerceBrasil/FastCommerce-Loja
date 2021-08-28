import React, { useState, useCallback, useEffect } from 'react';
import { Container, FeatureImage, Gallery } from './styles';

interface ImageCarouselProps {
  images: ProductImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [imageSelected, setImageSelected] = useState('');

  useEffect(() => {
    if (images[0]) {
      setImageSelected(images[0].image);
    }
  }, [images]);

  const handleChangeImageSelected = useCallback(imageSelecting => {
    setImageSelected(imageSelecting);
  }, []);

  return (
    <>
      <Container>
        <Gallery>
          <ul>
            {images?.map(img => (
              <>
                <button
                  type="button"
                  onClick={() => {
                    handleChangeImageSelected(img.image);
                  }}
                >
                  <li key={img.id}>
                    <img src={img.image} alt="image_item" />
                  </li>
                </button>
              </>
            ))}
          </ul>
        </Gallery>
        <FeatureImage>
          <img src={imageSelected} alt="image_featured" />
        </FeatureImage>
      </Container>
    </>
  );
};

export default ImageCarousel;
