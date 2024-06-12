import { Divider, Grid, Stack } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import { Description } from '@mui/icons-material';
function HomePage() {
    const data3 = [
        {
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description:
                "Greek police say initial tests found no injuries that could have caused the TV presenter's death.",
            note: '24 hrs ago | Europe',
        },
        {
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description:
                "Greek police say initial tests found no injuries that could have caused the TV presenter's death.",
            note: '24 hrs ago | Europe',
        },
        {
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description:
                "Greek police say initial tests found no injuries that could have caused the TV presenter's death.",
            note: '24 hrs ago | Europe',
        },
        {
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description:
                "Greek police say initial tests found no injuries that could have caused the TV presenter's death.",
            note: '24 hrs ago | Europe',
        },
    ];

    const data2 = [
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/9a46/live/be5af210-2721-11ef-baa7-25d483663b8e.jpg.webp',
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description: 'As France calls for a snap election, other European countries weigh their gains and losses.',
            note: '24 hrs ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/9a46/live/be5af210-2721-11ef-baa7-25d483663b8e.jpg.webp',
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description: 'As France calls for a snap election, other European countries weigh their gains and losses.',
            note: '24 hrs ago | Europe',
        },
    ];

    return (
        <>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <Grid width={1200} container gap={4} borderBottom={'1px solid black'} pb={4}>
                    <Grid sm={3 - 0.4}>
                        <Stack spacing={1}>
                            {data2.map((data) => (
                                <SubNews data={data} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid sm={6 - 0.4}>
                        <MainNews />
                    </Grid>
                    <Grid sm={3 - 0.4}>
                        {data3.map((data) => (
                            <TextNews data={data} />
                        ))}
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export default HomePage;
