import { useState } from 'react';
import Image from 'next/image';

import { Container, Separation } from './styled';
import Button from 'components/shared/Button';

const Card = ({ title, version, installLink, logo }) => {
  const { width, height, url, title: extension } = logo;
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <Container startAnimation={startAnimation}>
      <div>
        <div>
          <Image
            onLoadingComplete={() => !startAnimation && setStartAnimation(true)}
            width={width}
            height={height}
            src={url}
            alt={extension}
          />
        </div>
        <h3>{title}</h3>
        <span>{version}</span>
      </div>

      <Separation />

      <div>
        <Button {...installLink} fullWidth />
      </div>
    </Container>
  );
};

export default Card;
