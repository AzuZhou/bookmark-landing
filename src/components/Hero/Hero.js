import { useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import Detail from 'components/shared/Detail';

const Hero = () => {
  const { page } = useContext(ContentContext);
  const { mainHero } = page || {};

  return <Detail data={mainHero} isHero />;
};

export default Hero;
