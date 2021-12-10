import { useState, useEffect, useRef } from 'react';

import { Section, Info, Decoration, Img } from './styled';

const Hero = ({ fields: { title, description, ctAs, image, imageAlignment }, client }) => {
  const [primaryBtn, setPrimaryBtn] = useState();
  const [secondatyBtn, setSecondaryBtn] = useState();
  const imgRef = useRef();

  useEffect(() => {
    // TODO: fetch at the same time Promise.all
    ctAs.forEach((cta) => {
      client.getEntries({ 'sys.id': cta.sys.id }).then((entries) => {
        if (entries.items[0].fields.isPrimaryCta) {
          setPrimaryBtn(entries);
        } else {
          setSecondaryBtn(entries);
        }
      });
    });

    // TODO: throttle on screen resize
    imgRef.current = document.getElementById('hero-img');
  }, []);

  return (
    <Section>
      <Info>
        <h1>{title}</h1>
        <p>{description}</p>
        {primaryBtn !== undefined && (
          <a href={primaryBtn.items[0].fields.link}>{primaryBtn.items[0].fields.label}</a>
        )}
        {secondatyBtn !== undefined && (
          <a href={primaryBtn.items[0].fields.link}>{primaryBtn.items[0].fields.label}</a>
        )}
      </Info>
      <Decoration>
        <Img id="hero-img" src={image.fields.file.url} alt="" alignment={imageAlignment} />
        {imgRef.current && (
          <div
            style={{
              bottom: `-${window.innerWidth - imgRef.current.getBoundingClientRect().right}px`,
              height: imgRef.current.offsetHeight,
              width: imgRef.current.offsetWidth
            }}
            id="hero-shadow"
          />
        )}
      </Decoration>
    </Section>
  );
};

export default Hero;
