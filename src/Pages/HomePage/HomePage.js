import { Grid, Stack, Typography } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import HighlightNews from '../../components/pageComponent/HighlightNews/HighlightNews';
import MoreNews from '../../components/pageComponent/MoreNews/MoreNews';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
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
    const dataVideo = [
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
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/9a46/live/be5af210-2721-11ef-baa7-25d483663b8e.jpg.webp',
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description: 'As France calls for a snap election, other European countries weigh their gains and losses.',
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

    const data4 = [
        {
            img: 'https://ichef.bbci.co.uk/images/ic/800xn/p0j3kk9s.jpg.webp',
            title: 'France revives the 1,000-year-old Cultural Olympiad. We checked it out',
            description:
                "For nearly 1,000 years, the Greek games featured artistic competitions alongside athletic ones. Now, this ancient tradition is inspiring France's new Cultural Olympiad.",
            note: '1 day ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/images/ic/800xn/p0j3kk9s.jpg.webp',
            title: 'France revives the 1,000-year-old Cultural Olympiad. We checked it out',
            description:
                "For nearly 1,000 years, the Greek games featured artistic competitions alongside athletic ones. Now, this ancient tradition is inspiring France's new Cultural Olympiad.",
            note: '1 day ago | Europe',
        },
    ];

    return (
        <>
            <Stack alignItems={'center'} justifyContent={'center'}>
                {/*Wrapper1 */}
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
                {/* Tin độc quyền  */}
                <Stack width={1200} container gap={2} borderBottom={'1px solid black'}>
                    <Typography marginTop={'20px'} fontSize={'18px'} fontWeight={1000} left={0}>
                        Only from Project 2's News
                    </Typography>
                    <Stack direction={'row'} spacing={2}>
                        {data4.map((data) => (
                            <HighlightNews data={data} />
                        ))}
                    </Stack>
                </Stack>

                {/* MORE */}
                <Stack width={1200}>
                    <Typography marginTop={'20px'} fontSize={'18px'} fontWeight={1000} left={0}>
                        More News
                    </Typography>
                    <Grid container gap={2}>
                        <Grid sm={9 - 0.2}>
                            <MoreNews1 data={data2[1]} />
                        </Grid>
                        <Grid sm={3 - 0.2}>
                            <SubNews data={data2[1]} />
                        </Grid>
                        <Grid sm={2.25 - 0.2}>
                            <MoreNews data={data2[1]} />
                        </Grid>
                        <Grid sm={2.25 - 0.2}>
                            <MoreNews data={data2[1]} />
                        </Grid>
                        <Grid sm={2.25 - 0.2}>
                            <MoreNews data={data2[1]} />
                        </Grid>
                        <Grid sm={2.25 - 0.2}>
                            <MoreNews data={data2[1]} />
                        </Grid>
                        <Grid sm={3 - 0.2}>
                            <TextNews data={data3[1]} />
                            <TextNews data={data3[2]} />
                        </Grid>
                    </Grid>
                </Stack>

                <Stack position={'relative'} margin={'auto'} width={'100vw'}>
                    <Stack
                        position={'absolute'}
                        width={'100vw'}
                        borderBottom={'1px solid white'}
                        sx={{ backgroundColor: 'black' }}
                        left={0}
                        alignItems={'center'}
                        justifyContent={'center'}
                        spacing={2}
                        pt={3}
                    >
                        <Stack width={'1200px'} mt={2} borderTop={'2px solid white'}>
                            <Typography marginTop={'20px'} fontSize={'18px'} fontWeight={1000} left={0} color={'white'}>
                                Must Watch
                            </Typography>
                        </Stack>
                        <EmblaCarousel data={dataVideo} />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default HomePage;
