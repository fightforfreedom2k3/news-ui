import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

export default function MoreNews2({ data }) {
    return (
        <Stack width={1100} pb={3} sx={{ cursor: 'pointer' }}>
            <Grid
                container
                gap={1}
                pb={1}
                sx={{
                    '&:hover': {
                        '& .a': { textDecoration: 'underline' },
                        '& .b': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
                    },
                }}
            >
                <Grid sm={1 - 0.1}>
                    <Typography sx={{ ':hover': { textDecoration: 'none' } }} fontSize={'14px'} color={'#525252'}>
                        {data.note}
                    </Typography>
                </Grid>
                <Grid sm={8 - 0.1} pl={1}>
                    <Typography className="a" fontWeight={1000} fontSize={'1.5rem'}>
                        {data.title}
                    </Typography>
                    <Typography pt={1}>{data.description}</Typography>
                </Grid>
                <Grid sm={3 - 0.1}>
                    <Box className="b" component={'img'} src={data.img} height={'25vh'} />
                </Grid>
            </Grid>
            <Divider />
        </Stack>
    );
}
