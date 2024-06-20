import { Box, Grid, Stack, Typography } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import ScoreNews from '../../components/pageComponent/ScoreNews/ScoreNews';

function Sports() {
    const data1 = {
        title: 'Euro 2024: Croatia score twice in three minutes to come from behind to lead Albania',
        img: 'https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/be67/live/be2949a0-2e46-11ef-bdc5-41d7421c2adf.png.webp',
        description:
            'Follow live as Croatia face Albania in Hamburg with both sides looking for a first win in Group B.',
        note: `European Championship`,
        relate: [],
    };

    const data2 = [
        {
            title: `Euro 2024: Build-up to crucial Scotland tie with Switzerland`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/08cf/live/7e92cc80-2e3c-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
        {
            title: `Scotland draw with Switzerland to keep Euro 2024 last-16 hopes alive`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/6168/live/85046960-2e8d-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
        {
            title: `Musiala shines as Germany beat Hungary to reach last 16`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/9170/live/977d3890-2e67-11ef-a044-9d4367d5b599.jpg`,
            note: `European Championship`,
        },
        {
            title: `Fleeing Kabul, chasing gold - the story of a refugee Olympian`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/d2ad/live/052be470-2a69-11ef-bdc5-41d7421c2adf.jpg`,
            note: `5h`,
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
            title: `IBF v Usyk - power struggle brewing in boxing`,
            note: `Boxing`,
        },
    ];

    const data5 = [
        {
            title: `England should not take wins for granted - Southgate`,
            note: `England | 18h`,
        },
        {
            title: `Raducanu one of four major winners given Wimbledon wildcards`,
            note: `Tennis | 8h`,
        },
        {
            title: `Murray hopes back injury does not affect Wimbledon`,
            note: `Tennis | 9h`,
        },
        {
            title: `Which teams at Euros have impressed BBC pundits so far`,
            note: `Football | 19h`,
        },
    ];

    const data6 = {
        title: `China picks swimmers caught in doping scandal for Paris`,
        img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/7d83/live/f53c4b50-2e77-11ef-8fb1-2db0e7cb7ea3.jpg`,
        note: `Olympic Games | 7h`,
        description: `China selects 11 swimmers that are embroiled in a doping scandal for the Paris Olympics. `,
        relate: [],
    };

    const data7 = [
        {
            title: `Alcaraz starts Queen's defence with win`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/fa41/live/4ce16410-2da8-11ef-a044-9d4367d5b599.jpg`,
            note: `Tennis | 19h`,
        },
        {
            title: `Aston Villa agree deal worth up to £40m to sign Chelsea's Maatsen`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/b266/live/776e9950-2e6b-11ef-9359-c1572eab09c7.jpg`,
            note: `Premier League | 9h`,
        },
        {
            title: ` 'Italy will play Spain like they are dressed in Giorgio Armani'`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/6fc7/live/3fc1b4e0-2e77-11ef-bdc5-41d7421c2adf.jpg`,
            note: `European Championship`,
        },
        {
            title: `'Special' Mainoo before Alexander-Arnold? England set for Denmark`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/f5a3/live/ea7dde30-2e55-11ef-bdc5-41d7421c2adf.png`,
            note: `European Championship`,
        },
        {
            title: `US sprinter Knighton cleared for Games after failed test`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/00a2/live/4a83b530-2e7d-11ef-8fb1-2db0e7cb7ea3.jpg`,
            note: `Olympic Games | 6h`,
        },
        {
            title: `Albania equalise in injury time in Croatia thriller`,
            img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/de3f/live/ab0b6e60-2e4c-11ef-bdc5-41d7421c2adf.png`,
            note: `European Championship`,
        },
    ];

    const data8 = {
        title: `Euro 2024 tournament schedule and group listings`,
        img: `https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/2c3f/live/90532990-2380-11ef-a13a-0b8c563da930.jpg`,
        relate: [],
        description: `All of the fixtures and kick-off times for Euro 2024.`,
    };

    const data9 = [
        {
            title: `France's Mbappe trains with bandage after nose break`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/d603/live/9d9d7b60-2e5b-11ef-8037-1d36f173811f.jpg`,
            note: `France | 11h`,
        },
        {
            title: `'If Ronaldo reads it, so will I' - Gordon on love of psychology books`,
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/0765/live/d7416090-2e1d-11ef-84ac-a74c8743f290.jpg`,
            note: `Premier League | 1d`,
        },
    ];

    const data10 = [
        {
            title: `'Don't worry England fans - I missed out on Musiala too'`,
            note: `Germany | 1d`,
        },
        {
            title: `Irreplaceable or burden? Ronaldo debate sweeps Portugal`,
            note: `Portugal | 1d`,
        },
        {
            title: `Why are Mbappe and team-mates speaking out on French elections?`,
            note: `France | 1d`,
        },
        {
            title: `Can you name Thursday's Euros player?`,
            note: `European Championship | 6h`,
        },
    ];

    const datasocial = [
        {
            name: `Instagram`,
            img: `https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/678a/live/d13c3cd0-e13b-11ee-8bf3-195418ba9285.png`,
        },
        {
            name: `Tiktok`,
            img: `https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/b4d2/live/183e2f80-e13c-11ee-9410-0f893255c2a0.png`,
        },
        {
            name: `Facebook`,
            img: `https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/e552/live/e1dab170-e13b-11ee-8bf3-195418ba9285.png`,
        },
        {
            name: `X`,
            img: `https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/76d5/live/c9110540-e13b-11ee-8bf3-195418ba9285.png`,
        },
        {
            name: `Youtube`,
            img: `https://ichef.bbci.co.uk/ace/standard/320/cpsprodpb/32f8/live/f44c1150-e13b-11ee-860f-4b0b053e4cd0.png`,
        },
    ];

    return (
        <Stack pt={3} alignItems={'center'} justifyContent={'center'}>
            <Stack width={1300}>
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
                        <Grid sm={5 - 0.3}>
                            <MainNews data={data6} />
                        </Grid>
                        <Grid sm={7}>
                            <Grid container gap={2}>
                                {data7.map((data) => {
                                    return (
                                        <Grid sm={4 - 0.2}>
                                            <SubNews data={data} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Stack>
                {/* Euro 2024 */}
                <Stack pt={3} pb={3}>
                    <Typography fontWeight={1000} fontSize={'1.5rem'}>
                        More Euro 2024 news and analysis
                    </Typography>
                    <Grid container gap={2}>
                        <Grid sm={5 - 0.2}>
                            <MainNews data={data8} />
                        </Grid>
                        <Grid sm={5 - 0.2}>
                            <Grid container gap={2}>
                                <Grid sm={6 - 0.2}>
                                    {data9.map((data) => {
                                        return <SubNews data={data} />;
                                    })}
                                </Grid>
                                <Grid sm={6 - 0.2}>
                                    {data10.map((data) => {
                                        return <TextNews data={data} />;
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm={2 - 0.2} sx={{ backgroundColor: '#f8f8f8' }}></Grid>
                    </Grid>
                </Stack>
            </Stack>

            {/* Scores & Fixtures */}
            <Stack
                position={'relative'}
                margin={'auto'}
                width={'100vw'}
                height={'241px'}
                sx={{ backgroundColor: '#F6F6F6' }}
                alignItems={'center'}
            >
                <Stack width={1300}>
                    <Stack pt={2}>
                        <Typography
                            fontWeight={1000}
                            fontSize={'1.5rem'}
                            sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline', color: 'green' } }}
                        >
                            Scores & Fixtures
                        </Typography>
                    </Stack>
                    <Stack maxHeight={'161px'} pt={1} pb={1}>
                        <ScoreNews />
                    </Stack>
                </Stack>
            </Stack>

            {/* Contact */}
            <Stack width={1300}>
                <Stack pt={5} pb={5}>
                    <Typography fontWeight={1000} fontSize={'1.5rem'}>
                        Find us here
                    </Typography>
                    <Grid container gap={1} pt={3} pb={3}>
                        {datasocial.map((data) => {
                            return (
                                <Grid sm={2.4 - 0.1}>
                                    <Stack
                                        direction={'row'}
                                        sx={{
                                            ':hover': { textDecoration: 'underline', color: '#387B12' },
                                            cursor: 'pointer',
                                        }}
                                        component={'div'}
                                    >
                                        <Box component={'img'} src={data.img} height={'111px'} width={'111px'}></Box>
                                        <Stack pt={5.5} pl={1}>
                                            <Typography fontWeight={1000} fontSize={'1.3rem'}>
                                                {data.name}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Stack direction={'row'} spacing={3} pt={2}>
                        <Typography fontSize={'1.1rem'}>Find out more:</Typography>
                        <Typography
                            fontSize={'1.1rem'}
                            fontWeight={1000}
                            sx={{ textDecoration: 'underline', ':hover': { color: '#387B12' }, cursor: 'pointer' }}
                        >
                            Sport App
                        </Typography>
                        <Typography
                            fontSize={'1.1rem'}
                            fontWeight={1000}
                            sx={{ textDecoration: 'underline', ':hover': { color: '#387B12' }, cursor: 'pointer' }}
                        >
                            Help & FAQs
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Sports;
