import { Container } from 'utils/Container';
import { FooterHeading, FooterStyle } from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <FooterStyle>
        <Container>
          <FooterHeading>© 2023 | All Rights Reserved</FooterHeading>
        </Container>
      </FooterStyle>
    </>
  );
};
