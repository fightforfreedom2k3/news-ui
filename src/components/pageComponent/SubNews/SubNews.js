import { Stack, Box, Typography, Card, CardContent, CardActionArea, CardMedia, Divider } from '@mui/material';

export default function SubNews({ data }) {
    return (
        <>
            <Card
                component={'div'}
                onClick={() => {}}
                sx={{ cursor: 'pointer', boxShadow: 'none', borderBottom: '1px solid #e2e2e2' }}
            >
                <CardActionArea>
                    <Stack>
                        <CardMedia
                            component={'img'}
                            src={data.img || ''}
                            height={'153px'}
                            alt={'green iguana'}
                        ></CardMedia>
                    </Stack>
                </CardActionArea>
                <CardContent className="text-wrapper" sx={{ p: '8px 0 !important' }}>
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
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
}
