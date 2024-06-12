import { Stack, Box, Typography, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';

export default function SubNews() {
    return (
        <Card component={'div'} onClick={() => {}} sx={{ cursor: 'pointer' }}>
            <CardActionArea>
                <Stack>
                    <CardMedia
                        component={'img'}
                        src={
                            'https://ichef.bbci.co.uk/news/1536/cpsprodpb/9a46/live/be5af210-2721-11ef-baa7-25d483663b8e.jpg.webp'
                        }
                        height={'153px'}
                        alt={'green iguana'}
                    ></CardMedia>
                </Stack>
            </CardActionArea>
            <CardContent className="text-wrapper">
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
                        As France calls for a snap election, other European countries weigh their gains and losses.
                    </Typography>
                    {/* Note */}
                    <Typography fontWeight={-1000} fontSize={'12px'} letterSpacing={'-0.12px'}>
                        24 hrs ago | Europe
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}
