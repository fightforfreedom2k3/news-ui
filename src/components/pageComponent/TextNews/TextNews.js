import { Stack, Box, Typography, Card, CardContent, CardActionArea, CardMedia, Divider } from '@mui/material';

export default function TextNews({ data }) {
    return (
        <Stack component={'div'} onClick={() => {}} sx={{ cursor: 'pointer' }} gap={'8px'}>
            <CardContent className="text-wrapper">
                <Stack spacing={2}>
                    {/* Title */}
                    <Typography
                        sx={{ ':hover': { textDecoration: 'underline' } }}
                        fontWeight={1000}
                        fontSize={'18px'}
                        lineHeight={'22px'}
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
                    <Typography fontWeight={-1000} fontSize={'12px'} letterSpacing={'-0.12px'}>
                        {data.note}
                    </Typography>
                </Stack>
            </CardContent>
            <Divider />
        </Stack>
    );
}
