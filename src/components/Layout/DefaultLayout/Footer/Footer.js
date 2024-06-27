import { Box, IconButton, Stack, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} pb={'50px'}>
            <Stack width={1200} spacing={1}>
                <Stack>
                    <Box
                        component={'img'}
                        src="https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"
                        width={170}
                        height={52}
                    ></Box>
                </Stack>
                {/* Social */}
                <Stack direction={'row'} spacing={4}>
                    <Typography fontWeight={1000} fontSize={'16px'} lineHeight={'20px'} paddingTop={1}>
                        Follow for more information:
                    </Typography>
                    <Stack direction={'row'} spacing={1}>
                        <IconButton>
                            <XIcon sx={{ ':hover': { color: 'black' } }} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon sx={{ ':hover': { color: 'black' } }} />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon sx={{ ':hover': { color: 'black' } }} />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon sx={{ ':hover': { color: 'black' } }} />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon sx={{ ':hover': { color: 'black' } }} />
                        </IconButton>
                    </Stack>
                </Stack>
                {/* Note */}
                <Stack direction={'row'} spacing={2} component={'div'} fontSize={'13px'}>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>Term of Use</Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>About us</Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>Privacy Policy</Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>Cookies</Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>
                        Accessibillity Help
                    </Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>Contact us</Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>
                        Advertise with us
                    </Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>
                        Do not share or sell my info
                    </Stack>
                    <Stack sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer' }}>
                        Contact technical support
                    </Stack>
                </Stack>
                <Stack fontSize={'13px'} pt={2} fontStyle={'oblique'}>
                    Since 2024
                </Stack>
            </Stack>
        </Stack>
    );
}
