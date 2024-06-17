import { Box, Stack } from '@mui/material';

export default function Footer() {
    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <Stack width={1200}>
                <Stack>
                    <Box
                        component={'img'}
                        src="https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"
                        width={170}
                        height={52}
                    ></Box>
                </Stack>
                {/*  */}
            </Stack>
        </Stack>
    );
}
