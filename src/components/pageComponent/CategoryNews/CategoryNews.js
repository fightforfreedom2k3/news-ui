import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';

export default function CategoryNews() {
    return (
        <Card sx={{ boxShadow: 'none', borderTop: '0px solid black', borderRadius: 0 }} height={'514px'}>
            <CardContent sx={{ p: 0, pt: 2 }}>
                {/* Category */}
                <Stack pb={3}>
                    <Typography fontWeight={1000} fontSize={'20px'}>
                        Sport
                    </Typography>
                </Stack>
                {/* Link */}
                <Stack spacing={1.5} sx={{ cursor: 'pointer' }}>
                    <Typography
                        sx={{ ':hover': { textDecoration: 'underline' } }}
                        fontWeight={600}
                        fontSize={'18px'}
                        lineHeight={'22px'}
                        letterSpacing={'-0.36px'}
                    >
                        Inside the mind of the woman who ran 1,000km in 12 days
                    </Typography>
                    <Typography
                        sx={{ ':hover': { textDecoration: 'underline' } }}
                        fontWeight={600}
                        fontSize={'18px'}
                        lineHeight={'22px'}
                        letterSpacing={'-0.36px'}
                    >
                        Are animals conscious? How new research is changing minds
                    </Typography>
                    <Typography
                        sx={{ ':hover': { textDecoration: 'underline' } }}
                        fontWeight={600}
                        fontSize={'18px'}
                        lineHeight={'22px'}
                        letterSpacing={'-0.36px'}
                    >
                        Do blood-sugar monitors help improve health?
                    </Typography>
                    {/* Image */}
                    <Box
                        component={'img'}
                        src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/e15f/live/67ea63b0-27db-11ef-80aa-699d54c46324.png.webp"
                        height={'155px'}
                    ></Box>
                    {/* Tile */}
                    <Typography
                        sx={{ ':hover': { textDecoration: 'underline' } }}
                        fontWeight={600}
                        fontSize={'18px'}
                        lineHeight={'22px'}
                        letterSpacing={'-0.36px'}
                    >
                        How a Kenyan farmer became a champion of climate change denial
                    </Typography>
                    {/* Desciption */}
                    <Typography fontSize={'15px'} fontWeight={300}>
                        A Kenyan farmer has caught the eye of climate change deniers worldwide. But what is driving him?
                    </Typography>
                </Stack>
            </CardContent>
            <Divider />
        </Card>
    );
}
