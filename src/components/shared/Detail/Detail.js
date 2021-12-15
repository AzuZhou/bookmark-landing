import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

import Button from 'components/shared/Button';

import { Info } from 'styles/styled';
import { Section, Decoration } from './styled';

const Detail = ({ data, isHero, isCenter }) => {
  const [decoration, setDecoration] = useState({});
  const imgRef = useRef();
  const { title, description, ctAsCollection, image, imageAlignment } = data || {};
  const { items: ctAs } = ctAsCollection || [];
  const { url, width, height } = image || {};

  const isReverse = imageAlignment === 'Left';

  const getDecorationStyles = (node, window) => {
    const { offsetHeight, offsetWidth } = node;
    let sharedStyles = { top: offsetHeight * 0.1, height: offsetHeight };

    const right = {
      ...sharedStyles,
      right: 0,
      width:
        offsetWidth + window.innerWidth - node.getBoundingClientRect().right - offsetWidth * 0.1,
      borderBottomLeftRadius: '50%',
      borderTopLeftRadius: '50%'
    };

    const left = {
      ...sharedStyles,
      left: 0,
      width: offsetWidth + node.getBoundingClientRect().right * 0.1,
      borderBottomRightRadius: '50%',
      borderTopRightRadius: '50%'
    };

    return isReverse ? left : right;
  };

  const handleResize = useCallback(
    (node, window) => {
      if (node && typeof window !== 'undefined') {
        const decorationStyles = getDecorationStyles(node, window);
        setDecoration(decorationStyles);
      }
    },
    [isReverse]
  );

  useEffect(() => {
    window.addEventListener('resize', () => handleResize(imgRef.current, window));
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    handleResize(imgRef.current, window);
  }, [data]);

  return (
    <Section isReverse={isReverse}>
      <div>
        <Info isReverse={isReverse} isCenter={isCenter}>
          {isHero ? <h1>{title}</h1> : <h2>{title}</h2>}
          <p>{description}</p>

          {ctAs && (
            <div>
              {ctAs.map((cta) => (
                <Button key={cta.label} {...cta} />
              ))}
            </div>
          )}
        </Info>

        <Decoration ref={imgRef}>
          {url && (
            <Image width={width} height={height} src={url} alt="" alignment={imageAlignment} />
          )}

          {typeof window !== 'undefined' && <div style={decoration} />}
        </Decoration>
      </div>
    </Section>
  );
};

export default Detail;
