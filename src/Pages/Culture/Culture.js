import { Grid, Stack, Typography } from '@mui/material';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';

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
    const dataVideo = [
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/6824/live/d2cc3870-3389-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `Taylor Swift fan gifted star's hat at Wembley gig`,
            description: `Watch the emotional moment Taylor Swift gave a superfan her hat at London's Wembley Stadium.`,
            note: `1 day ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/5825/live/1518a290-2fca-11ef-90be-b75b34b0bbb2.jpg.webp`,
            title: `Watch: Taylor Swift remix played at Changing of the Guard`,
            description: `The orchestral version of the song was played to mark the first London dates of Taylor Swift's Eras tour at Wembley.`,
            note: `6 days ago | London`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/8371/live/2e6e64c0-2a7d-11ef-bdc5-41d7421c2adf.jpg.webp`,
            title: `Inside the derelict rooms where British TV was born`,
            description: `Nestled inside Alexandra Palace’s east wing are historic rooms rarely seen by the public. `,
            note: `15 Jun 2024 | London`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/bd74/live/0de50850-2a62-11ef-a1fa-1b739acc6f54.jpg.webp`,
            title: `MBE a 'wow moment' for BBC presenter Nick Owen`,
            description: `BBC Midlands Today presenter is recognised for services to broadcasting and charity.`,
            note: `15 Jun 2024 | Birmingham & Black Country`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/1188/live/11d0f0d0-2636-11ef-80aa-699d54c46324.jpg.webp`,
            title: `LGBTQ+ photo exhibition comes to Tate Modern`,
            description: `Zanele Muholi's work features the lives of black LGBTQ+ South Africans.`,
            note: `9 Jun 2024 | London`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/0113/live/514e2140-24da-11ef-a13a-0b8c563da930.jpg.webp`,
            title: `On the coastal path near where Michael Mosley was last seen`,
            description: `Known for his TV programmes and his Just One Thing podcast which airs on BBC Radio 4, the presenter was last seen on Wednesday.`,
            note: `7 Jun 2024 | Europe`,
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
            <Stack width={1300} pt={2}>
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
            <Stack width={'100vw'} margin={'auto'} position={'relative'} mt={2}>
                <Stack
                    position={'absolute'}
                    width={'100vw'}
                    sx={{
                        backgroundColor: 'black',
                    }}
                    left={0}
                    alignItems={'center'}
                    justifyContent={'center'}
                    spacing={2}
                    pt={3}
                >
                    <Stack width={1000} mt={2} borderTop={'2px solid white'}>
                        <Typography marginTop={'20px'} fontSize={'18px'} fontWeight={1000} left={0} color={'white'}>
                            Watch
                        </Typography>
                    </Stack>
                    <EmblaCarousel data={dataVideo} />
                </Stack>
            </Stack>
            <Stack mt={'490px'}></Stack>
        </Stack>
    );
}
