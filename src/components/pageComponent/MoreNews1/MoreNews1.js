import { Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';

export default function MoreNews1({ data }) {
    return (
        <Card component={'div'} onClick={() => {}} sx={{ direction: 'row', cursor: 'pointer', boxShadow: 'none' }}>
            <Grid container>
                <Grid sm={4}>
                    <CardContent>
                        <Stack spacing={2}>
                            {/* Title */}
                            <Typography
                                sx={{ ':hover': { textDecoration: 'underline' } }}
                                fontWeight={1000}
                                fontSize={'28px'}
                                lineHeight={'32px'}
                                letterSpacing={'-0.36px'}
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
                            <Typography
                                fontWeight={-1000}
                                fontSize={'12px'}
                                lineHeight={'14px'}
                                letterSpacing={'-0.12px'}
                            >
                                {data.note}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Grid>
                <Grid sm={8}>
                    <CardActionArea>
                        <CardMedia component={'img'} src={data?.img} height={'338px'} alt="green iguana"></CardMedia>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Card>
    );
}
