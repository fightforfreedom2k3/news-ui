import { PlayArrow } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';

export default function VideoNews({ data }) {
    return (
        <>
            <Card
                component={'div'}
                onClick={() => {}}
                sx={{ cursor: 'pointer', boxShadow: 'none', borderBottom: '1px solid white' }}
            >
                <CardActionArea>
                    <Stack position={'relative'}>
                        <CardMedia
                            component={'img'}
                            src={data.img || ''}
                            height={'153px'}
                            alt={'green iguana'}
                        ></CardMedia>
                        <Stack left={0} bottom={0} position={'absolute'} bgcolor={'black'} p={1}>
                            <PlayArrow sx={{ color: 'white' }} />
                        </Stack>
                    </Stack>
                </CardActionArea>
                <CardContent className="text-wrapper" sx={{ p: '8px 0 !important', bgcolor: 'black' }}>
                    <Stack spacing={2} color={'white'} bgcolor={'black'} borderBottom={'2px solid white'} pb={1.2}>
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
