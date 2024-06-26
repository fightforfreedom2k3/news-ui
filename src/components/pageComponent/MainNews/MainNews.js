import { Stack, Box, Typography, Card, CardContent, CardActionArea, CardMedia, Divider } from '@mui/material';

export default function MainNews({ data }) {
    return (
        <p>
            <Card
                component={'div'}
                onClick={() => {
                    window.location.href = '/newsdetail';
                }}
                sx={{ cursor: 'pointer', boxShadow: 'none' }}
            >
                {/* Image */}
                <CardActionArea>
                    <Stack>
                        <CardMedia component={'img'} src={data.img} height={'291px'} alt={'green iguana'}></CardMedia>
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
                            {data.title}
                        </Typography>
                        {/* Description */}
                        <Typography fontWeight={400} fontSize={'14px'} lineHeight={'18px'} marginBottom={'4px'}>
                            {data.description}
                        </Typography>
                        {/* Note */}
                        <Typography fontWeight={-1000} fontSize={'12px'} letterSpacing={'-0.12px'}>
                            {data.note}
                        </Typography>

                        {/* Related */}
                        {data.relate.map((text) => {
                            return (
                                <Typography
                                    sx={{ ':hover': { textDecoration: 'underline' } }}
                                    fontWeight={1000}
                                    fontSize={'16px'}
                                    lineHeight={'20px'}
                                    letterSpacing={'-0.32px'}
                                    textTransform={'none'}
                                >
                                    {text}
                                </Typography>
                            );
                        })}
                        {/* <Typography
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
                        </Typography> */}
                        {/* ---------------- */}
                    </Stack>
                </CardContent>
            </Card>
            <Divider />
        </p>
    );
}
