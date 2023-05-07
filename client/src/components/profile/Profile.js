
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageUpload from './ImageUpload'

export default function userProfile() {
  return (
    <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            boxShadow: 2,
            borderRadius: 1
          }}
        >
              <Typography component="h1" variant="h5">
                Account Information
              </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <Grid container columns={8}>
            {/* <Grid container display="flex"> */}
              <Grid width={'25%'} item xs={2}>
                <ImageUpload />
              </Grid>
                <Grid direction="column" justifyContent="center"alignItems="center" item xs={2}>
                    <Typography component="h2" variant="h6" align='left' sx={{ mt: 6.5 }}>
                      Newbie
                    </Typography>
                    <Typography component="h3" variant="subtitle1" color={'GrayText'} sx={{ mt: 1.5 }}>
                      Member since 5/7/2023
                    </Typography>
                </Grid>
            {/* </Grid> */}
          </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="display name"
              label="Display Name"
              name="display name"
              autoComplete="display name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email address"
              label="Email Address"
              name="email address"
              autoComplete="email address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Current Password"
              type="password"
              id="password"
              autoComplete="current password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="new password"
              label="New Password"
              type="new password"
              id="new password"
              autoComplete="new password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm password"
              label="Confirm Password"
              type="confirm password"
              id="confirm password"
              autoComplete="confirm password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update now
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

