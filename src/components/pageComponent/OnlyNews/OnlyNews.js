import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material';

export default function OnlyNews() {
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
                    Are animals conscious? How new research is changing minds
                </Typography>
                {/* Description */}
                <Typography fontSize={'16px'} lineHeight={'18px'} letterSpacing={0}>
                    A series of experiments have led a number of scientists to say animals may be conscious.
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
            <Box
                component={'img'}
                src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/a844/live/209df650-2a53-11ef-a1fa-1b739acc6f54.png.webp"
                height={'476px'}
                width={'70%'}
            ></Box>
        </Stack>
    );
}
