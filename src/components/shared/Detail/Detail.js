import Button from 'components/shared/Button';

import { Info } from 'styles/styled';
import { Section, Decoration, Img } from './styled';

const Detail = ({ data, isHero, isCenter }) => {
  const { title, description, ctAsCollection, image, imageAlignment } = data || {};
  const { items: ctAs } = ctAsCollection || [];
  const { url, width, height } = image || {};

  // TODO: handle decoration element
  // const imgRef = useRef();
  // useEffect(() => {
  //   // TODO: throttle on screen resize
  //   imgRef.current = document.getElementById('hero-img');
  // }, []);

  // TODO: Decoration components to be reusable like Info

  const isReverse = imageAlignment === 'Left';

  return (
    <Section isReverse={isReverse}>
      <Info isReverse={isReverse} isCenter={isCenter}>
        {isHero ? <h1>{title}</h1> : <h2>{title}</h2>}
        <p>{description}</p>

        {ctAs ? (
          <div>
            {ctAs.map((cta) => (
              <Button key={cta.label} {...cta} />
            ))}
          </div>
        ) : null}
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

export default Detail;
