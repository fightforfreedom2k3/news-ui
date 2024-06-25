import { Label } from '@mui/icons-material';
import { Box, Grid, Input, Stack, Typography } from '@mui/material';
import Footer from '../../components/Layout/SportLayout/Footer/Footer';

function Register() {
    return (
        <>
            <Stack
                width={'100vw'}
                minHeight={'100vh'}
                sx={{ backgroundColor: 'black' }}
                pl={'10vw'}
                position={'relative'}
            >
                <Grid container gap={5} height={'90%'}>
                    <Grid sm={6 - 0.5} height={'100%'} pt={10}>
                        <Stack height={'40%'} alignItems={'center'} pb={3}>
                            <Box
                                component={'img'}
                                src="https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"
                                height={'12vh'}
                                width={'18vw'}
                            />
                            <Typography align="center" color={'white'} fontSize={'2rem'} fontWeight={1000} pt={3}>
                                Confirm your account details
                            </Typography>
                            <Typography color={'white'} fontSize={'1rem'} fontWeight={1000} pt={3}>
                                Please re-enter your password. It helps keep your account safe.
                            </Typography>
                        </Stack>
                        <Stack gap={2} pt={2} alignItems={'center'}>
                            <Stack height={'60%'} p={1} width={'80%'}>
                                <Typography color={'white'}>Username or Email</Typography>
                                <Input sx={{ height: '15%', borderBottom: '1px solid gray', color: 'white' }}></Input>
                            </Stack>
                            <Stack height={'60%'} p={1} width={'80%'}>
                                <Typography color={'white'}>Password</Typography>
                                <Input
                                    type="password"
                                    sx={{ height: '15%', borderBottom: '1px solid gray', color: 'white' }}
                                ></Input>
                            </Stack>
                            <Stack height={'60%'} p={1} width={'80%'}>
                                <Typography color={'white'}>Confirm Password</Typography>
                                <Input
                                    type="password"
                                    sx={{ height: '15%', borderBottom: '1px solid gray', color: 'white' }}
                                ></Input>
                            </Stack>
                            <Stack
                                pt={0}
                                component={'div'}
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    window.location.href = `/login`;
                                }}
                            >
                                <Typography
                                    color={'#3092ff'}
                                    fontSize={'1rem'}
                                    pl={33}
                                    sx={{ ':hover': { textDecoration: 'underline', fontWeight: 1000 } }}
                                >
                                    Already have an account? Sign in
                                </Typography>
                            </Stack>
                            <Stack
                                height={'9vh'}
                                p={1}
                                width={'80%'}
                                sx={{
                                    backgroundColor: '#3092ff',
                                    ':hover': { backgroundColor: '#3f51b5' },
                                    cursor: 'pointer',
                                }}
                                justifyContent={'center'}
                                onClick={() => {
                                    window.location.href = '/';
                                }}
                            >
                                <Typography align="center" fontSize={'1.5rem'} fontWeight={1000} color={'white'}>
                                    Register
                                </Typography>
                            </Stack>
                            <Stack position={'absolute'} left={0} bottom={0} pl={5}>
                                <Typography
                                    fontWeight={1000}
                                    fontSize={'1rem'}
                                    color={'white'}
                                    sx={{ ':hover': { textDecoration: 'underline' } }}
                                >
                                    Find out more about us
                                </Typography>
                            </Stack>
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
            <Footer />
        </>
    );
}

export default Register;
