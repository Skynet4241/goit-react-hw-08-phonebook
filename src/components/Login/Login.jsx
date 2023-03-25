import { Container } from 'utils/Container';
import { Box as JoyBox } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Input } from '@mui/joy';
import { useState } from 'react';
import { FormButton } from 'components/Registration/Registration.styled';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container>
        <div>
          <form>
            <h2>Login</h2>

            <JoyBox
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '400px',
              }}
            >
              <Input startDecorator={<EmailIcon />} placeholder="Email" />
              <Input
                startDecorator={<KeyRoundedIcon />}
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                endDecorator={
                  <IconButton
                    color="neutral"
                    size="sm"
                    onClick={toggleShowPassword}
                  >
                    <VisibilityRoundedIcon />
                  </IconButton>
                }
              />
            </JoyBox>

            <FormButton type="submit">Log In</FormButton>
          </form>
        </div>
      </Container>
    </>
  );
};
