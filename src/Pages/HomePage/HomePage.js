import { Grid, Stack } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
function HomePage() {
    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <Grid width={1200} container gap={4}>
                <Grid sm={3 - 0.4}>
                    <SubNews />
                </Grid>
                <Grid sm={6 - 0.4}>
                    <MainNews />
                </Grid>
                <Grid sm={3 - 0.4}>
                    <TextNews />
                </Grid>
            </Grid>
        </Stack>
    );
}

export default HomePage;
