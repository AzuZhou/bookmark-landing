const BASE_URL = 'https://graphql.contentful.com';
const PAGE_ID = '63qo1mKjZ1QZIfKzoCLPYa';
const SETTINGS_ID = '4gDi7WpHy49PbhMSEiSgJF';

const QUERY = `
  query { page(id: "${PAGE_ID}") {
      mainHero {
        title
        description
        ctAsCollection(limit: 2) {
          items {
            ...linkFields
          }
        }
        image {
          ...imageFields
        }
        imageAlignment
      }
      featuresIntro {
        ...textFields
      }
      featureTabsCollection(limit: 3) {
        items {
          tabTitle
          tabContent {
            title
            description
            ctAsCollection(limit: 1) {
              items {
                ...linkFields
              }
            }
            image {
              ...imageFields
            }
            imageAlignment
          }
        }
      }
      downloadIntro {
        ...textFields
      }
      installationCardsCollection(limit: 3) {
        items {
          title
          version
          logo {
            title
            url
            width
            height
          }
          installLink {
            ...linkFields
          }
        }
      }
      faqIntro {
        ...textFields
      }
      frequentlyAskedQuestionsCollection(limit: 4) {
        items {
          question
          answer
        }
      }
      faqCta {
        ...linkFields
      }
      newsletter {
        title
        tagline
        inputPlaceholder
        ctaText
      }
    }
    settings(id: "${SETTINGS_ID}") {
      logo {
        title
        url
        width
        height
      }
      navigationBarLinksCollection(limit: 4) {
        items {
          ...linkFields
        }
      }
      footerLinksCollection(limit: 3) {
        items {
          ...linkFields
        }
      }
      facebookLink
      twitterLink
    }
  }
  
  fragment linkFields on Cta {
    label
    link
    isPrimaryCta
  }
  
  fragment imageFields on Asset {
    url
    width
    height
  }
  
  fragment textFields on TextBlock {
    title
    description
  }
  `;

export { QUERY, BASE_URL };
