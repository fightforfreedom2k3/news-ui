import { Box, Card, Grid, Stack, Typography, Divider } from '@mui/material';

export default function ScoreNews() {
    return (
        <Stack width={'314px'} height={'137px'}>
            <Stack direction={'row'} justifyContent={'space-between'} pr={1}>
                <Typography>UEFA Euro 2024</Typography>
                <Typography>FT</Typography>
            </Stack>
            <Stack width={'310px'} height={'115px'} sx={{ backgroundColor: 'white' }} borderLeft={'4px solid #FFD230'}>
                {/* Home */}
                <Stack direction={'row'} justifyContent={'space-between'} pl={1.5} pr={1}>
                    <Stack height={'58px'} direction={'row'}>
                        <Box
                            component={'img'}
                            src="https://static.files.bbci.co.uk/core/website/assets/static/sport/country-flags/slovenia.12dedf0def000c5a2282.svg"
                            maxHeight={'42px'}
                            maxWidth={'42px'}
                        ></Box>
                        <Stack pt={1} pl={1}>
                            <Typography fontSize={'1.125rem'} fontWeight={1000}>
                                Slovenia
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography fontSize={'2rem'} fontWeight={1000}>
                            1
                        </Typography>
                    </Stack>
                </Stack>
                {/* --------------------------- */}
                <Divider />
                {/* Away */}
                <Stack direction={'row'} justifyContent={'space-between'} pl={1.5} pr={1}>
                    <Stack height={'58px'} direction={'row'}>
                        <Box
                            component={'img'}
                            src="https://static.files.bbci.co.uk/core/website/assets/static/sport/country-flags/slovenia.12dedf0def000c5a2282.svg"
                            maxHeight={'42px'}
                            maxWidth={'42px'}
                        ></Box>
                        <Stack pt={1} pl={1}>
                            <Typography fontSize={'1.125rem'} fontWeight={1000}>
                                Slovenia
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography fontSize={'2rem'} fontWeight={1000}>
                            1
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
