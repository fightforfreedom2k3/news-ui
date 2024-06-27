import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material';

export default function OnlyNews({ data }) {
    return (
        <Stack
            direction={'row'}
            component={'div'}
            sx={{ cursor: 'pointer' }}
            alignItems={'center'}
            justifyContent={'center'}
            spacing={1}
        >
            {/* Content */}
            <Stack spacing={2}>
                <Typography
                    fontSize={'26px'}
                    fontWeight={1000}
                    lineHeight={'32px'}
                    sx={{ ':hover': { textDecoration: 'underline' } }}
                >
                    {data.title}
                </Typography>
                {/* Description */}
                <Typography fontSize={'16px'} lineHeight={'18px'} letterSpacing={0}>
                    {data.description}
                </Typography>
                {/* See more */}
                <Stack width={'25%'} border={'1px solid black'}>
                    <Button
                        sx={{
                            borderRadius: 0,
                            color: 'black',
                            ':hover': { backgroundColor: 'black', borderRadius: 0, color: 'white' },
                        }}
                    >
                        See more
                    </Button>
                </Stack>
            </Stack>
            {/* Image */}
            <Box component={'img'} src={data.img} height={'476px'} width={'70%'}></Box>
        </Stack>
    );
}
