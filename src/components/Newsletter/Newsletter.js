import { useState, useContext } from 'react';

import { ContentContext } from 'context/ContentContext';

import ErrorIcon from '../../../public/icon-error.svg';

import { validateEmail } from 'utils/helpers';

import { Section, Form, Input, Submit, ErrorMessage } from './styled';

const Newsletter = () => {
  const { page } = useContext(ContentContext);
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const { newsletter } = page || {};
  const { ctaText, inputPlaceholder, tagline, title } = newsletter;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) return setIsError(true);

    if (validateEmail(email)) {
      setIsError(false);
      setEmail('');
    } else {
      setIsError(true);
    }
  };

  return (
    <Section>
      <div>
        <span>{tagline}</span>

        <h2>{title}</h2>

        <Form onSubmit={handleSubmit} isError={isError} noValidate>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              value={email}
              isError={isError}
              type="email"
              placeholder={inputPlaceholder}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => isError && setIsError(false)}
            />
            <ErrorIcon />
            <ErrorMessage isError={isError}>{`Whoops, make sure it's an email`}</ErrorMessage>
          </div>

          <Submit type="submit">{ctaText}</Submit>
        </Form>
      </div>
    </Section>
  );
};

export default Newsletter;
