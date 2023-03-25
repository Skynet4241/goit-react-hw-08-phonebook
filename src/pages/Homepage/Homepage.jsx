import { Container } from '@mui/joy';
import {
  HomepageBlock,
  HomepageImage,
  HomepageText,
  HomepageTextBlock,
  HomepageTitle,
  HomepageWrap,
} from './Homepage.styled';

export const Homepage = () => {
  return (
    <>
      <Container>
        <HomepageWrap>
          <HomepageTextBlock>
            <HomepageTitle>
              Keep your contacts at your fingertips!
            </HomepageTitle>

            <HomepageText>
              The application is designed specifically for convenient adding and
              storing of contacts. It has a simple and understandable interface
              that allows quickly adding new contacts and deleting existing
              ones. The application also provides convenient search and
              filtering of contacts by various parameters to find the necessary
              information as quickly as possible. All contacts are stored in a
              secure place, which guarantees protection against data loss or
              damage.
            </HomepageText>
          </HomepageTextBlock>
          <HomepageBlock>
            <HomepageImage
              src="https://i.pinimg.com/564x/a7/d9/a0/a7d9a0e3ca668816c7f915e7ac50c91d.jpg"
              alt="Phonebook"
              width="300"
              height="400"
            />
          </HomepageBlock>
        </HomepageWrap>
      </Container>
    </>
  );
};
