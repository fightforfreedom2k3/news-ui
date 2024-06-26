import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';

export default function HighlightNews({ data }) {
    return (
        <Card component={'div'} onClick={() => {}} sx={{ cursor: 'pointer', boxShadow: 'none' }}>
            <CardActionArea>
                <CardMedia component={'img'} src={data?.img} height={'306px'} alt={'green iguana'}></CardMedia>
            </CardActionArea>
            <CardContent sx={{ p: 0, pt: 2 }}>
                <Stack spacing={2}>
                    {/* Title */}
                    <Typography
                        sx={{ ':hover': { textDecoration: 'underline' } }}
                        fontWeight={1000}
                        fontSize={'22px'}
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
                </Stack>
            </CardContent>
        </Card>
    );
}
