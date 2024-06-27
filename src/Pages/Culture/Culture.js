import { Grid, Stack, Typography } from '@mui/material';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import PaginationPage from '../../components/PaginationPage/PaginationPage';

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
    const data7 = [
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/5e3d/live/93285780-3474-11ef-a53b-67ee534ca28a.jpg.webp`,
            title: `Lucky draw sees six-year-old Swiftie bag tickets `,
            description: `Swifties Aria and her mother, Nicole, from Strabane won tickets to a sold-out show in Dublin.`,
            note: `3 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/179f/live/13afbf30-3469-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `Toadie quits Neighbours after 30 years on screen`,
            description: `The actor joined the soap in 1995 but will now step behind the camera to become a director.`,
            note: `5 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/8e56/live/f367e120-3464-11ef-b897-13a310eae57b.png.webp`,
            title: `Harry and Meghan painted as royals from history`,
            description: `Dan Llywelyn Hall previously painted a portrait Elizabeth II, when he was just 32.`,
            note: `5 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/890b/live/8c4b97c0-345a-11ef-8635-e38bbba9a160.jpg.webp`,
            title: `Eras tour guest could knock Swift off top of album chart`,
            description: `Gracie Abrams' new album is outselling The Tortured Poets Department 2:1 according to chart data.`,
            note: `6 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/5a3c/live/16360170-3454-11ef-9511-d706d739bd96.jpg.webp`,
            title: `Arundhati Roy wins PEN Pinter Prize for 'powerful voice'`,
            description: `Roy is a Booker Prize-winning author and has written about human rights issues, and war and capitalism. `,
            note: `6 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/5be9/live/f2bcba10-3311-11ef-8cfe-b3e007b3385c.jpg.webp`,
            title: `Teacher who quit job due to perform at Glastonbury`,
            description: `Rapper JayaHadADream says she is living her own dream and is excited to appear on stage. `,
            note: `10 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/800/cpsprodpb/d2ad/live/3e8d7600-33da-11ef-b3b2-c3ba2ab52d36.jpg.webp`,
            title: `Film festival focuses on South Asian cinema`,
            description: `The Yorkshire Indian Film Festival will see movies and documentaries screened in Bradford and Leeds.`,
            note: `10 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/5798/live/1bc947f0-33c3-11ef-a508-e1cdd362243c.jpg.webp`,
            title: `'Egyptian' house from 1990s becomes listed building`,
            description: `Sphinx Hill house in Moulsford has been Grade II* listed by the Department of Culture, Media and Sport.`,
            note: `10 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/6e4e/live/ef73a420-33c2-11ef-a508-e1cdd362243c.jpg.webp`,
            title: `Naked knitted Chris Martin doll at Glastonbury`,
            description: `Sandra Witcombe made the doll "as a bit of fun" and hopes it will bring a smile to the singer's face.`,
            note: `23 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/be87/live/7f5ec210-33ad-11ef-ab7a-67b738977048.jpg.webp`,
            title: `Rave expected to bring thousands to city flyover`,
            description: `Organisers say that over the past three years the event has become popular with drum 'n' bass fans.`,
            note: `1 day ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/d07f/live/bcfd9640-33a9-11ef-ab7a-67b738977048.jpg.webp`,
            title: `The Welsh bands and artists at Glastonbury 2024`,
            description: `Charlotte Church, Skindred and Cara Hammond are among a long list of Welsh artists at Glastonbury 2024.`,
            note: `1 day ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/953f/live/1410d7d0-32f1-11ef-9560-555d750b318d.jpg.webp`,
            title: `Watts statue gets new fingers for 350-year birthday`,
            description: `The statue sits in Watts Park in Southampton and has been repaired to celebrate his 350th birthday.`,
            note: `1 day ago`,
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
            <Stack mt={2} width={1300} borderTop={'2px solid black'}>
                <Typography pt={2} fontWeight={1000}>
                    More Culture
                </Typography>
                <Stack width={1300} alignItems={'center'} pt={3}>
                    <PaginationPage arr={data7} />
                </Stack>
            </Stack>
            <Stack mt={1} width={'100vw'} border={'1px solid black'}></Stack>
        </Stack>
    );
}
