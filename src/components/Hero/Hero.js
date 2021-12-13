import { useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import Button from 'components/shared/Button';
import { Section, Info, Decoration, Img } from './styled';

const Hero = () => {
  const { page } = useContext(ContentContext);
  const { mainHero } = page || {};
  console.log('mainHero: ', mainHero);
  const { title, description, ctAsCollection, image, imageAlignment } = mainHero || {};
  const { items: ctAs } = ctAsCollection || [];
  const { url, width, height } = image || {};

  // TODO: handle decoration element
  // const imgRef = useRef();
  // useEffect(() => {
  //   // TODO: throttle on screen resize
  //   imgRef.current = document.getElementById('hero-img');
  // }, []);

  return (
    <Section>
      <Info>
        <h1>{title}</h1>
        <p>{description}</p>

        <div>{ctAs ? ctAs.map((cta) => <Button key={cta.label} {...cta} />) : null}</div>
      </Info>

      <Decoration>
        {url && (
          <Img
            id="hero-img"
            width={width}
            height={height}
            src={url}
            alt=""
            alignment={imageAlignment}
          />
        )}

        {/* {imgRef.current && (
          <div
            style={{
              bottom: `-${window.innerWidth - imgRef.current.getBoundingClientRect().right}px`,
              height: imgRef.current.offsetHeight,
              width: imgRef.current.offsetWidth
            }}
            id="hero-shadow"
          />
        )} */}
      </Decoration>
    </Section>
  );
};

export default Hero;
