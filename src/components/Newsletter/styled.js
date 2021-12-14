import styled from 'styled-components';

import { PADDING, COLORS, FONT_SIZES } from 'styles/constants';
import { desktopBreakpoint, buttonStyles, submitButton } from 'styles/styled';

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: ${COLORS.SOFT_BLUE};

  > div {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px ${PADDING.MOBILE};
    margin: 0 auto;

    span {
      color: ${COLORS.WHITE};
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: ${FONT_SIZES.MOBILE.SECONDARY_TEXT};
    }

    h2 {
      color: ${COLORS.WHITE};
      text-align: center;
      margin: 12px 0 30px 0;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      input {
        width: 100%;
        padding: 12px 16px;

        border-radius: 4px;
        border: 2px solid transparent;
        font-size: ${FONT_SIZES.MOBILE.PRIMARY_TEXT};
        line-height: 26px;
      }
    }
  }

  ${desktopBreakpoint} {
    > div {
      width: 50%;
      padding: 60px ${PADDING.DESKTOP};
      gap: 30px;

      span {
        font-size: ${FONT_SIZES.DESKTOP.SECONDARY_TEXT};
        letter-spacing: 6px;
      }

      h2 {
        margin: 0;
        max-width: 500px;
      }

      form {
        flex-direction: row;
        justify-content: center;

        input {
          max-width: 300px;
          font-size: ${FONT_SIZES.DESKTOP.PRIMARY_TEXT};
          line-height: 24px;
        }
      }
    }
  }
`;

const Submit = styled.button`
  ${buttonStyles}
  ${submitButton}

  max-width: none;

  ${desktopBreakpoint} {
    max-width: 150px;
  }
`;

export { Section, Submit };
