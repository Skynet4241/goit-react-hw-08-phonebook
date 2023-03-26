import { PAGE_NAMES } from 'components/Router/path';
import OopsImage from '../images/404_page.png';
import {
  ErrorPageButton,
  ErrorPageNotFoundText,
  ErrorPageText,
  ErrorPageTitle,
  ErrorPageWrap,
} from './ErrorPage.styled';

export const ErrorPage = () => {
  return (
    <>
      <ErrorPageWrap>
        <ErrorPageTitle>Ooops!</ErrorPageTitle>
        <img
          src={OopsImage}
          alt="404 page not found"
          width="700"
          height="350"
        />
        <ErrorPageNotFoundText>404 page not found</ErrorPageNotFoundText>
        <ErrorPageText>
          The page you are looking for might have been removed <br />
          had its name changed or is temporarily unavailable
        </ErrorPageText>
        <ErrorPageButton to={PAGE_NAMES.homepage}>
          GO TO HOMEPAGE
        </ErrorPageButton>
      </ErrorPageWrap>
    </>
  );
};
