import { Grid, Stack, Typography } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import HighlightNews from '../../components/pageComponent/HighlightNews/HighlightNews';
import MoreNews from '../../components/pageComponent/MoreNews/MoreNews';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import CategoryNews from '../../components/pageComponent/CategoryNews/CategoryNews';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';

function News() {
    const data3 = [
        {
            title: 'What England should do next - BBC Sport pundits have their say',
            description:
                "As England prepare for Sunday's Euro 2024 last-16 tie, BBC Sport pundits debate how they have performed and what needs to happen next.",
            note: '7 hrs ago | England Men',
        },
        {
            title: `Slovakia next - England's path as draw opens up`,
            description: `BBC Sport takes a look at England's possible routes through the Euro 2024 knockout stage after the Three Lions top Group C.`,
            note: '4 hrs ago | European Champioship',
        },
        {
            title: `Running on a volcano's rim - the race in the shadow of an eruption`,
            description:
                "In 2021, La Palma's volcanos erupted, issuing tonnes of molten rock and a reminder of the perilious nature of the island's premier running race.",
            note: '1 days ago',
        },
        {
            title: "Ramsay shaken after 'really bad' cycling accident",
            description:
                "The celebrity chef stresses the importance of wearing a helmet, adding that he's lucky to be standing.",
            note: '24 hrs ago',
        },
    ];
    const dataVideo = [
        {
            img: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/bcd4/live/72635f20-2b39-11ef-90be-b75b34b0bbb2.jpg.webp',
            title: 'People left dangling upside down on amusement park ride',
            description:
                'Footage recorded by an eyewitness shows the moment people got stuck on a ride in Portland, Oregon.',
            note: '2 days ago',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/4124/live/d40f9eb0-2b56-11ef-a044-9d4367d5b599.jpg.webp',
            title: 'Watch: Kate attends Trooping the Colour - in 60 seconds',
            description: `The parade, watched by thousands, was the Princess of Wales's first public appearance since her cancer diagnosis in January.`,
            note: '2 days ago | UK',
        },
        {
            img: 'https://ichef.bbci.co.uk/images/ic/480x270/p0j49nv1.jpg.webp',
            title: 'What makes the emperor penguin an egg-cellent father',
            description:
                'In the BBC Select documentary Penguins: Spy in the Huddle, we explore the world of penguin fathers.',
            note: '2 June 2024 | World of wonders',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/0087/live/5dda9c10-2ba9-11ef-90be-b75b34b0bbb2.jpg.webp',
            title: 'Cow hit by UK police car gets to its feet',
            description:
                'Footage shared with the BBC shows the animal looking stunned in the aftermath of the incident on a Surrey street.',
            note: '1 days ago | Surrey',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/6df1/live/b9930a10-2aa0-11ef-bdc5-41d7421c2adf.jpg.webp',
            title: 'Pope jokes around as he hosts famous comedians',
            description: 'Pope jokes around as he hosts famous comedians',
            note: '3 days ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/298c/live/41a6a480-2974-11ef-a1fa-1b739acc6f54.png.webp',
            title: `Vet's top money saving tips for pet owners`,
            description: 'Keeping your pet on a healthy diet and brushing its teeth can help save pennies, says vet.',
            note: '2 days ago | Wales',
        },
    ];

    const data2 = [
        {
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/b97c/live/711f4390-3061-11ef-bdc5-41d7421c2adf.jpg.webp',
            title: `Russia launches 'massive' attack on Ukrainian power grid`,
            description: `Several people are wounded after Russia targeted Ukraine's energy network for a second time this week.`,
            note: '2 hrs ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/86e0/live/1fb6a5d0-2c0f-11ef-98ee-45d563e0553f.jpg.webp',
            title: 'At least 14 Hajj pilgrims die in intense heat',
            description: `Jordan's foreign ministry said its nationals had died "after suffering sun stroke due to the extreme heatwave".`,
            note: '24 hrs ago | Europe',
        },
    ];

    const data4 = [
        {
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/051f/live/f5da5940-33cb-11ef-a508-e1cdd362243c.jpg.webp',
            title: 'Foden leaves England camp for birth of third child',
            description:
                'England midfielder Phil Foden leaves their Euro 2024 camp to return to the UK for the birth of his third child.',
            note: '11hrs ago | European Champioship',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/22b6/live/640f7540-33d5-11ef-b3b2-c3ba2ab52d36.jpg.webp',
            title: `Kenya's president withdraws tax plan after deadly protest`,
            description: `President Ruto says Kenyans have spoken - and he "concedes" on the controversial tax hikes.`,
            note: '1 day ago | Africa',
        },
    ];

    const data5 = {
        img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/b3fc/live/726b6810-32d1-11ef-a044-9d4367d5b599.jpg.webp',
        title: 'China space probe returns with rare Moon rocks ',
        description: `The Chang'e-6 has landed after collecting the first ever samples from the far side of the Moon.`,
        note: '2 days ago | Asia',
    };

    const data6 = {
        img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/89a8/live/889d93e0-33aa-11ef-bdc5-41d7421c2adf.jpg.webp',
        title: `Adorable moment girl, five, declares on air she has a boyfriend`,
        description: `A little girl shares with a BBC reporter in front of her amused parents that she has her first boyfriend.`,
        note: '15 hrs ago | Somerset',
    };

    const data7 = [
        {
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/f6ca/live/277dc0a0-32ef-11ef-90be-b75b34b0bbb2.jpg.webp',
            title: `Footage shows moment deadly S Korea factory fire breaks out`,
            description: `Twenty-three people died in a lithium battery explosion and fire in a South Korea factory.`,
            note: '2 days ago | Asia',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/245d/live/13607ee0-3386-11ef-bdc5-41d7421c2adf.jpg.webp',
            title: `Could the World Cup signal goodbye for India's batting legends?`,
            description: `Two Indian cricket icons might retire after the ongoing World Cup. A win would mark their peak.`,
            note: '4 hrs ago | Asia',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/8bad/live/0c36e0f0-3417-11ef-a39d-17e2ed2eaeac.jpg.webp',
            title: `Australian 'swimming queen' Cate Campbell retires`,
            description: `One of the nation's most celebrated swimmers will hang up her goggles after failing to qualify for Paris 2024.`,
            note: '50 mins ago | Australia',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/0ef3/live/6668e280-33bd-11ef-b657-a328515d44be.jpg.webp',
            title: 'Sleepy Saipan witnesses end of Julian Assange legal saga ',
            description: `The tiny Pacific island was the most unlikely venue to witness the end of the long and bitter saga of Julian Assange.`,
            note: '13 hrs ago | World',
        },
    ];

    const data8 = [
        {
            title: `Julian Assange lands in Australia a free man`,
            description: `Landing in Canberra, the Wikileaks founder's 14-year legal battle comes to an end after a plea deal with the US.`,
            note: `8 hrs ago | World`,
        },
        {
            title: `$100m assets linked to 1MDB to be returned to Malaysia`,
            description: `The US said artworks by artists Andy Warhol and Claude Monet and a luxury flat in Paris would be liquidated and assets worth $67m released.`,
            note: `9 hrs ago | World`,
        },
    ];

    const data9 = [
        {
            category: `Business`,
            link: [
                `Boeing boss admits culture 'far from perfect'`,
                `London becomes Europe's largest stock market again`,
                `US surgeon general wants social media warning labels`,
            ],
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/72ed/live/b0aaf780-2cd7-11ef-9a23-9bdc7e739208.jpg.webp',
            description: `Regulators allege Adobe failed to properly disclose subscription terms and made it too onerous to cancel. `,
        },
        {
            category: `Culture`,
            link: [
                `'Keep calm' posters estimated to sell for £6k`,
                `Angelina Jolie and Daniel Radcliffe win first Tony Awards`,
                `Coldplay to make vinyl albums from plastic bottles`,
            ],
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/0de2/live/731a8cf0-2a43-11ef-a1fa-1b739acc6f54.jpg.webp',
            description: `A new film follows a boy as he tries to square a controversial practice with his family's hopes for him.`,
        },
        {
            category: `Travel`,
            link: [
                `Is it ethical to travel to the ends of the Earth?`,
                `Why the US is the top country for tourism in 2024`,
                `Buenos Aires's best queer tango experiences`,
            ],
            img: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p0j3yyp4.jpg.webp',
            description: `Every spring, almost 100,000 seabirds – guillemots, great skuas, razorbills and puffins – descend on the small island of Handa, just off Scotland's far north-west coast.`,
        },
        {
            category: `World’s Table`,
            link: [
                `Buenos Aires's best queer tango experiences`,
                `A chicken recipe so good its origin is being fought in court`,
                `What will we eat on the Moon?`,
            ],
            img: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p0hxx46p.jpg.webp',
            description: `Akin to France's heartier, spicier, richer boeuf bourguignon, "alcatra" is synonymous with a single island in the remote Azores archipelago.`,
        },
    ];

    const data1 = {
        img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/2b6f/live/c09d9480-3034-11ef-be83-3f21094da991.jpg.webp',
        title: 'Red Cross says 22 killed in strike near its Gaza office',
        description:
            'The International Committee of the Red Cross said the "grave security incident" was the latest of several.',
        note: '2 hrs ago | Middle East',
        relate: [``],
    };
    const data10 = {
        img: `https://ichef.bbci.co.uk/images/ic/1376x774/p0j6dtzw.jpg.webp`,
        title: `Watch Coldplay and Dua Lipa live at Glastonbury`,
        description: `For the first time, the BBC is livestreaming headline Glastonbury performances to a global audience, with Dua Lipa and Coldplay's 2024 Pyramid Stage sets available to view on bbc.com.`,
    };

    return (
        <>
            <Stack alignItems={'center'} justifyContent={'center'} borderBottom={'1px solid black'}>
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
                        <MainNews data={data1} />
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
                            <Stack width={'50%'}>
                                <HighlightNews data={data} />
                            </Stack>
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
                            <MoreNews1 data={data5} />
                        </Grid>
                        <Grid sm={3 - 0.2}>
                            <SubNews data={data6} />
                        </Grid>

                        {data7.map((data) => {
                            return (
                                <Grid sm={2.25 - 0.2}>
                                    <MoreNews data={data} />
                                </Grid>
                            );
                        })}

                        <Grid sm={3 - 0.2}>
                            {data8.map((data) => {
                                return <TextNews data={data} />;
                            })}
                        </Grid>
                        {/* <Grid sm={3 - 0.2}>
                            <TextNews data={data3[1]} />
                            <TextNews data={data3[2]} />
                        </Grid> */}
                    </Grid>
                </Stack>

                <Stack pt={1} width={1200} pb={5} mt={5} borderTop={'1px solid #e2e2e2'}>
                    <OnlyNews data={data10} />
                </Stack>

                {/* News By Category */}
                <Stack width={1200} borderTop={'2px solid #e2e2e2'} pb={5}>
                    <Grid className="Hoang" container gap={3}>
                        {data9.map((data) => (
                            <Grid sm={3 - 0.3}>
                                <CategoryNews data={data} />
                            </Grid>
                        ))}

                        {/* <Grid sm={3 - 0.3}>
                            <CategoryNews />
                        </Grid>
                        <Grid sm={3 - 0.3}>
                            <CategoryNews />
                        </Grid>
                        <Grid sm={3 - 0.3}>
                            <CategoryNews />
                        </Grid>
                        <Grid sm={3 - 0.3}>
                            <CategoryNews />
                        </Grid> */}
                    </Grid>
                </Stack>
            </Stack>
        </>
    );
}

export default News;
