import { Grid, IconButton, Stack, Typography, Button, Input } from '@mui/material';
import NavBar2 from '../../components/NavBar2/NavBar2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
export default function Setting() {
    return (
        <Stack>
            <NavBar2 />
            <Stack
                width={'100vw'}
                alignItems={'center'}
                justifyContent={'center'}
                borderTop={'2px solid #e2e2e2'}
                sx={{ backgroundColor: '#f5f5f5' }}
            >
                <Stack width={1300} pt={2}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={1000} fontSize={'2rem'}>
                            Settings
                        </Typography>
                        <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
                            <Stack
                                fontWeight={900}
                                sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                                onClick={() => {
                                    window.location.href = '/account';
                                }}
                            >
                                Overview
                            </Stack>
                            <Stack
                                pl={2}
                                pr={2}
                                fontWeight={900}
                                borderLeft={'2px solid black'}
                                borderRight={'2px solid black'}
                                sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                                onClick={() => {
                                    window.location.href = '/setting';
                                }}
                            >
                                Settings
                            </Stack>
                            <Stack
                                sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}
                                fontWeight={900}
                                onClick={() => {
                                    window.location.href = '/login';
                                }}
                            >
                                Sign out
                            </Stack>
                        </Stack>
                    </Stack>
                    <Grid container>
                        <Grid sm={3} height={'40vh'}>
                            <Stack
                                height={'30%'}
                                borderLeft={'3px solid #006def'}
                                borderBottom={'2px solid #e2e2e2'}
                                justifyContent={'center'}
                                sx={{
                                    backgroundColor: 'white',
                                    '&:hover': { '& .MuiTypography-root': { color: '#004ca7' } },
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#525252',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                    }}
                                >
                                    <AccountCircleIcon />{' '}
                                    <Typography pl={2} color={'#525252'} fontWeight={1000}>
                                        Personal details
                                    </Typography>
                                </Button>
                            </Stack>
                            <Stack
                                height={'30%'}
                                borderBottom={'2px solid #e2e2e2'}
                                justifyContent={'center'}
                                sx={{
                                    '&:hover': { '& .MuiTypography-root': { color: '#004ca7' } },
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#525252',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                    }}
                                >
                                    <LockIcon sx={{ color: '#006def' }} />
                                    <Typography pl={2} color={'#006def'} fontWeight={1000}>
                                        Privacy & Cookies
                                    </Typography>
                                </Button>
                            </Stack>
                            <Stack
                                height={'30%'}
                                borderBottom={'2px solid #e2e2e2'}
                                justifyContent={'center'}
                                sx={{
                                    '&:hover': { '& .MuiTypography-root': { color: '#004ca7' } },
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#525252',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                    }}
                                >
                                    <MailIcon sx={{ color: '#006def' }} />
                                    <Typography pl={2} color={'#006def'} fontWeight={1000}>
                                        Email Preferences
                                    </Typography>
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid sm={9} height={'80vh'} sx={{ backgroundColor: 'white' }} p={3}>
                            <Typography fontWeight={1000} fontSize={'2rem'} pb={3}>
                                Personal details
                            </Typography>
                            <Stack>
                                <Typography>Email</Typography>
                                <Input
                                    placeholder="hoang15122003@gmail.com"
                                    sx={{ width: '40%', height: '2rem', fontWeight: 1000, fontSize: '1.3rem', pl: 1 }}
                                ></Input>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    );
}
