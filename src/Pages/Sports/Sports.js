import { Grid, Stack, Typography } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';

function Sports() {
    const data1 = {
        title: 'Euro 2024: Croatia score twice in three minutes to come from behind to lead Albania',
        img: 'https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/be67/live/be2949a0-2e46-11ef-bdc5-41d7421c2adf.png.webp',
        description:
            'Follow live as Croatia face Albania in Hamburg with both sides looking for a first win in Group B.',
        note: `European Championship`,
    };

    const data2 = [
        {
            title: `Euro 2024: Build-up to crucial Scotland tie with Switzerland`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/08cf/live/7e92cc80-2e3c-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
        {
            title: `Euro 2024: Build-up to crucial Scotland tie with Switzerland`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/08cf/live/7e92cc80-2e3c-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
        {
            title: `Euro 2024: Build-up to crucial Scotland tie with Switzerland`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/08cf/live/7e92cc80-2e3c-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
        {
            title: `Euro 2024: Build-up to crucial Scotland tie with Switzerland`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/08cf/live/7e92cc80-2e3c-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
    ];

    const data3 = {
        title: `Woods gets PGA Tour lifetime achievement exemption`,
        img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/bcaf/live/50b8a500-2e0f-11ef-84ac-a74c8743f290.jpg`,
        note: `Golf | 6h`,
    };

    const data4 = [
        {
            title: `Why 'symbol' Ronaldo remains Portugal's star draw`,
            note: `Portugal | 15h`,
        },
        {
            title: `Why 'symbol' Ronaldo remains Portugal's star draw`,
            note: `Portugal | 15h`,
        },
    ];

    const data5 = [
        {
            title: `Why 'symbol' Ronaldo remains Portugal's star draw`,
            note: `Portugal | 15h`,
        },
        {
            title: `Why 'symbol' Ronaldo remains Portugal's star draw`,
            note: `Portugal | 15h`,
        },
        {
            title: `Why 'symbol' Ronaldo remains Portugal's star draw`,
            note: `Portugal | 15h`,
        },
        {
            title: `Why 'symbol' Ronaldo remains Portugal's star draw`,
            note: `Portugal | 15h`,
        },
    ];

    const data6 = {
        title: `France 'uncertain' if Mbappe can face Netherlands`,
        img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/ade4/live/3d695b20-2db5-11ef-8639-058990b4462c.jpg`,
        note: `France | 18h`,
    };

    const data7 = [
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
    ];
    return (
        <Stack pt={3} alignItems={'center'} justifyContent={'center'}>
            <Stack width={1200}>
                <Grid container gap={2} borderBottom={'1px solid black'} pb={4}>
                    <Grid sm={6 - 0.2} container gap={2}>
                        <Grid sm={12 - 0.2}>
                            <MainNews data={data1} />
                        </Grid>
                        <Grid sm={6 - 0.2}>
                            <SubNews data={data3} />
                        </Grid>
                        <Grid sm={6 - 0.2}>
                            {data4.map((data) => {
                                return <TextNews data={data} />;
                            })}
                        </Grid>
                    </Grid>
                    <Grid sm={6 - 0.2} container gap={2}>
                        {data2.map((data) => {
                            return (
                                <Grid sm={6 - 0.2}>
                                    <SubNews data={data}></SubNews>
                                </Grid>
                            );
                        })}
                        {/* ------------------------------- */}
                        {data5.map((data) => {
                            return (
                                <Grid sm={6 - 0.2}>
                                    <TextNews data={data} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
                {/* More */}
                <Stack pt={3}>
                    <Typography fontWeight={1000} fontSize={'1.5rem'}>
                        More top stories
                    </Typography>
                    <Grid container gap={3} pt={2} borderBottom={'1px solid black'} pb={4}>
                        <Grid sm={6 - 0.3}>
                            <MainNews data={data6} />
                        </Grid>
                        <Grid sm={6}>
                            <Grid container gap={3}>
                                {data7.map((data) => {
                                    return (
                                        <Grid sm={4 - 0.6}>
                                            <SubNews data={data} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Stack>
                <h1>Hoang</h1>
            </Stack>
        </Stack>
    );
}

export default Sports;
