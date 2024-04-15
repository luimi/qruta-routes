import 'react-slideshow-image/dist/styles.css';
import './style.css';
import { useEffect, useState } from 'react';
import Parse from 'parse';
import { Slide } from 'react-slideshow-image';

const Slider = ({ route }) => {
  const [images, setImages] = useState();
  useEffect(() => {
    getImages();
  }, []);
  const getImages = async () => {
    let result = await new Parse.Query('Image').equalTo('route', route).find();
    if (result.length > 0) setImages(result);
  };
  const viewImages = () => {
    return (
      <Slide>
        {images.map((image, index) => {
          return (
            <div className="each-slide-effect" key={`image-${index}`}>
              <div
                style={{ backgroundImage: `url(${image.get('url')})` }}
              ></div>
            </div>
          );
        })}
      </Slide>
    );
  };
  return <>{images ? viewImages() : ''}</>;
};

export default Slider;
