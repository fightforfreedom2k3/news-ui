import { Label } from '@mui/icons-material';
import { Box, Grid, Input, Stack, Typography } from '@mui/material';

function Login() {
    return (
        <Stack
            width={'100vw'}
            minHeight={'100vh'}
            sx={{ backgroundColor: 'black' }}
            pl={'10vw'}
            border={'1px solid green'}
        >
            <Grid container gap={5} height={'90%'}>
                <Grid sm={6 - 0.5} border={'1px solid white'} height={'100%'} pt={10}>
                    <Stack height={'40%'} alignItems={'center'} border={'1px solid red'} pb={3}>
                        <Box
                            component={'img'}
                            src="https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"
                            height={'30%'}
                            width={'35%'}
                        />
                        <Typography align="center" color={'white'} fontSize={'2rem'} fontWeight={1000} pt={3}>
                            Confirm your account details
                        </Typography>
                        <Typography color={'white'} fontSize={'1rem'} fontWeight={1000} pt={3}>
                            Please re-enter your password. It helps keep your account safe.
                        </Typography>
                    </Stack>
                    <Stack height={'60%'} border={'1px solid yellow'} p={1} width={'80%'}>
                        <Typography color={'white'}>Username or Email</Typography>
                        <Input sx={{ height: '15%', borderBottom: '1px solid gray', color: 'white' }}></Input>
                    </Stack>
                </Grid>
                <Grid
                    sm={6 - 0.5}
                    sx={{
                        backgroundImage: `url('https://ichef.bbci.co.uk/images/ic/608xn/p0gpmw0t.png')`,
                        backgroundSize: 'cover',
                    }}
                    height={'110vh'}
                ></Grid>
            </Grid>
        </Stack>
    );
}

export default Login;
