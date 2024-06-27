import { Grid, Stack, Typography } from '@mui/material';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';
import { Grid4x4 } from '@mui/icons-material';

export default function Culture() {
    const data1 = [
        {
            img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/0dda/live/3712b860-344b-11ef-bd23-6d718bda4a50.jpg.webp`,
            title: `Korean web comic giant set for $2.7bn market debut`,
            description: `Webtoon Entertainment says it has 170m monthly active users in over 150 countries around the world.`,
            note: `4 hrs ago | Business`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/6f73/live/27a65330-33df-11ef-9b38-7b111e405f42.jpg.webp`,
            title: `Prince Harry remembers pain of bereavement`,
            description: `Prince Harry has an emotional conversation about bereavement and grieving, with a military charity.`,
            note: `6 hrs ago | UK`,
        },
    ];
    const data2 = {
        img: `https://ichef.bbci.co.uk/images/ic/1024x576/p0j6lf5n.jpg.webp`,
        title: `Why short shorts are the look of the summer`,
        description: `From tiny, thigh-baring shorts – as worn by Paul Mescal – to loose and baggy jorts, there's a style for everyone.`,
        note: `1 days ago`,
        relate: [],
    };
    const data3 = [
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/7dec/live/28a71040-33b1-11ef-bdc5-41d7421c2adf.jpg.webp`,
            title: `How Sugababes paved the way for pop at Glastonbury`,
            description: `The band look back at their Glastonbury history - including the year they shut down the Avalon field.`,
            note: `7 hrs ago | Somerset`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/480x270/p0j6dv02.jpg.webp`,
            title: `The brutal true story of the 'Nine Days Queen'`,
            description: `A short-lived teenage monarch in Tudor history has now inspired a fantastical TV romp on Prime Video.`,
            note: `23 hrs ago | Culture`,
        },
    ];
    const data4 = [
        {
            title: `Glastonbury Festival opens with drone art show`,
            note: `1 hr ago | Somerset`,
        },
        {
            title: `Your guide to the NI and Irish artists at Glastonbury `,
            note: `3 hrs ago`,
        },
        {
            title: `Glastonbury singing session for the neurodiverse`,
            note: `4 hrs ago | England`,
        },
        {
            title: `Hopeful email led to musician's Glastonbury gig`,
            note: `4 hrs ago | England`,
        },
    ];
    const data5 = {
        title: '10 of the best TV shows of 2024 so far',
        description: `From a brutal Japanese period epic to a controversial Netflix stalking drama and a hit video game adaptation, we pick the year's greatest programmes to stream right now.`,
        img: `https://ichef.bbci.co.uk/images/ic/1376x774/p0j48y50.jpg.webp`,
    };
    const data6 = [
        {
            title: `Ten of the best TV shows to watch this June`,
            note: `4 Jun 2024 | Culture`,
        },
        {
            title: `Twelve of the best films to watch in June`,
            note: `30 May 2024 | Culture`,
        },
        {
            title: `Eight of the best films of 2024 so far`,
            note: `28 May 2024 | Culture`,
        },
        {
            title: `Nine of the best TV shows to watch in May`,
            note: `3 May 2024 | Culture`,
        },
    ];
    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <Stack width={1300} borderBottom={'2px solid black'}>
                <Typography fontSize={'2rem'} fontWeight={1000}>
                    Culture
                </Typography>
            </Stack>
            <Stack width={1300} pt={2} pb={2} borderBottom={'2px solid black'}>
                <Grid container gap={2}>
                    <Grid sm={3 - 0.2}>
                        {data1.map((data) => {
                            return <SubNews data={data} />;
                        })}
                    </Grid>
                    <Grid sm={6 - 0.2} height={'500px'}>
                        <MainNews data={data2} />
                    </Grid>
                    <Grid sm={3 - 0.2}>
                        {data3.map((data) => {
                            return <SubNews data={data} />;
                        })}
                    </Grid>
                </Grid>
            </Stack>
            <Stack pt={2} width={1300} borderBottom={'2px solid black'}>
                <Typography fontWeight={1000} fontSize={'1.5rem'}>
                    Latest from the Glastonbury Festival
                </Typography>
                <Stack direction={'row'} justifyContent={'space-between'} pt={2}>
                    {data4.map((data) => {
                        return <TextNews data={data} />;
                    })}
                </Stack>
            </Stack>
            <Stack width={1300} pt={2} borderBottom={'2px solid black'}>
                <OnlyNews data={data5} />
                <Grid container gap={2} pt={1.5}>
                    {data6.map((data) => {
                        return (
                            <Grid sm={3 - 0.2}>
                                <TextNews data={data} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
        </Stack>
    );
}
