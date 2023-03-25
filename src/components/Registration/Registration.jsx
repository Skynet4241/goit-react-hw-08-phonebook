import { Container } from 'utils/Container';
import { Box as JoyBox } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Input } from '@mui/joy';
import Button from '@mui/material/Button';

export const Registration = () => {
  return (
    <>
      <Container>
        <div>
          <form>
            <h1>Registration</h1>

            <JoyBox
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '400px',
              }}
            >
              <Input startDecorator={<PeopleIcon />} placeholder="Name" />
              <Input startDecorator={<EmailIcon />} placeholder="Email" />
              <Input
                startDecorator={<KeyRoundedIcon />}
                placeholder="Password"
                type="password"
                endDecorator={
                  <IconButton color="neutral" size="sm">
                    <VisibilityRoundedIcon />
                  </IconButton>
                }
              />
            </JoyBox>
            <Button variant="contained" disableElevation>
              Registration
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
