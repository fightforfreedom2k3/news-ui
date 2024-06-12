import { Stack, Box, Typography, Card, CardContent, CardActionArea, CardMedia, Divider } from '@mui/material';

export default function MainNews() {
    return (
        <p>
            <Card component={'div'} onClick={() => {}} sx={{ cursor: 'pointer', boxShadow: 'none' }}>
                {/* Image */}
                <CardActionArea>
                    <Stack>
                        <CardMedia
                            component={'img'}
                            src={
                                'https://ichef.bbci.co.uk/news/1536/cpsprodpb/f6c7/live/fb4ccc50-273c-11ef-a0aa-318f04db7c53.jpg.webp'
                            }
                            height={'291px'}
                            alt={'green iguana'}
                        ></CardMedia>
                    </Stack>
                </CardActionArea>
                <CardContent className="text-wrapper" sx={{ p: 0, pt: 2 }}>
                    <Stack spacing={2}>
                        {/* Title */}
                        <Typography
                            sx={{ ':hover': { textDecoration: 'underline' } }}
                            fontWeight={1000}
                            fontSize={'28px'}
                            lineHeight={'32px'}
                            letterSpacing={'-0.56px'}
                            textTransform={'none'}
                            textOverflow={'anywhere'}
                        >
                            Macron snap election leaves rivals stunned after EU vote
                        </Typography>
                        {/* Description */}
                        <Typography fontWeight={400} fontSize={'14px'} lineHeight={'18px'} marginBottom={'4px'}>
                            Finance Minister Bruno Le Maire said the vote could have "serious consequences" for France.
                        </Typography>
                        {/* Note */}
                        <Typography fontWeight={-1000} fontSize={'12px'} letterSpacing={'-0.12px'}>
                            24 hrs ago | Europe
                        </Typography>

                        {/* Related */}
                        <Typography
                            sx={{ ':hover': { textDecoration: 'underline' } }}
                            fontWeight={1000}
                            fontSize={'16px'}
                            lineHeight={'20px'}
                            letterSpacing={'-0.32px'}
                            textTransform={'none'}
                        >
                            Europe's night of election drama capped by Macron bombshell
                        </Typography>

                        <Typography
                            sx={{ ':hover': { textDecoration: 'underline' } }}
                            fontWeight={1000}
                            fontSize={'16px'}
                            lineHeight={'20px'}
                            letterSpacing={'-0.32px'}
                            textTransform={'none'}
                        >
                            Far right makes gains in EU election but it could struggle to unite
                        </Typography>
                        {/* ---------------- */}
                    </Stack>
                </CardContent>
            </Card>
            <Divider />
        </p>
    );
}
