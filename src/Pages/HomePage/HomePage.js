import { Grid, Stack, Typography } from '@mui/material';
import MainNews from '../../components/pageComponent/MainNews/MainNews';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import TextNews from '../../components/pageComponent/TextNews/TextNews';
import HighlightNews from '../../components/pageComponent/HighlightNews/HighlightNews';
import MoreNews from '../../components/pageComponent/MoreNews/MoreNews';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import { Grid3x3 } from '@mui/icons-material';
import CategoryNews from '../../components/pageComponent/CategoryNews/CategoryNews';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';
function HomePage() {
    const data3 = [
        {
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description:
                "Greek police say initial tests found no injuries that could have caused the TV presenter's death.",
            note: '24 hrs ago | Europe',
        },
        {
            title: 'How a Kenyan farmer became a champion of climate change denial',
            description:
                'A Kenyan farmer has caught the eye of climate change deniers worldwide. But what is driving him?',
            note: '24 hrs ago | Africa',
        },
        {
            title: 'Jordan Bardella could soon be French PM at 28. But for many he remains an enigma',
            description: "Jordan Bardella's rise has been meteoric after being spotted by Marine Le Pen",
            note: '24 hrs ago | Europe',
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
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/9a46/live/be5af210-2721-11ef-baa7-25d483663b8e.jpg.webp',
            title: 'Macron snap election leaves rivals stunned after EU vote',
            description: 'As France calls for a snap election, other European countries weigh their gains and losses.',
            note: '24 hrs ago | Europe',
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
            img: 'https://ichef.bbci.co.uk/images/ic/800xn/p0j3kk9s.jpg.webp',
            title: 'France revives the 1,000-year-old Cultural Olympiad. We checked it out',
            description:
                "For nearly 1,000 years, the Greek games featured artistic competitions alongside athletic ones. Now, this ancient tradition is inspiring France's new Cultural Olympiad.",
            note: '1 day ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p0j3vksd.jpg.webp',
            title: 'The writers making AI sound human',
            description:
                "If you're worried about how AI will affect your job, the world of copywriters may offer a glimpse of the future.",
            note: '1 day ago | Europe',
        },
    ];

    const data5 = {
        img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/7774/live/4e0377d0-2be5-11ef-90be-b75b34b0bbb2.jpg.webp',
        title: 'Hamburg police shoot man with axe ahead of Euros match',
        description:
            'Police say they shot and injured the man, ahead of a Euro 2024 match between the Netherlands and Poland.',
        note: '24 hrs ago | Europe',
    };

    const data6 = {
        img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/0de2/live/731a8cf0-2a43-11ef-a1fa-1b739acc6f54.jpg.webp',
        title: 'Boy grapples with tradition in Spanish bullfighting town',
        description: `A new film follows a boy as he tries to square a controversial practice with his family's hopes for him.`,
        note: '24 hrs ago | Europe',
    };

    const data7 = [
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/8b82/live/105ea700-2c27-11ef-a044-9d4367d5b599.jpg.webp',
            title: `Bellingham - the England hero who 'writes his own scripts'`,
            description: `Jude Bellingham's remarkable rise continued as he netted England's winner in their Euro 2024 opener against Serbia.`,
            note: '24 hrs ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p0j43csb.jpg.webp',
            title: 'How to apologise effectively',
            description: `If you're struggling to say you're sorry, AI is happy to help. But can robots handle social intelligence? We put their apologies to the test.`,
            note: '24 hrs ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/179a/live/fb338880-2bdd-11ef-90be-b75b34b0bbb2.jpg.webp',
            title: 'Clive Myrie shares emotional toll of broadcasting',
            description: `The TV anchor shares the impact of reporting from war zones and personal toll of being a prominent public figure.`,
            note: '24 hrs ago | Europe',
        },
        {
            img: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/3a66/live/b2adbe50-2bc4-11ef-a044-9d4367d5b599.jpg.webp',
            title: 'The cow hoof trimmer who is watched by millions',
            description: `Graeme Parker has a huge internet following for his work with cattle in south-west Scotland.  `,
            note: '24 hrs ago | Europe',
        },
    ];

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
                        {/* <Grid sm={2.25 - 0.2}>
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
                        </Grid> */}
                        <Grid sm={3 - 0.2}>
                            <TextNews data={data3[1]} />
                            <TextNews data={data3[2]} />
                        </Grid>
                    </Grid>
                </Stack>
                {/* Must Watch */}
                <Stack position={'relative'} margin={'auto'} width={'100vw'}>
                    <Stack
                        position={'absolute'}
                        width={'100vw'}
                        // borderBottom={'1px solid white'}
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
                {/* Outstanding */}
                <Stack pt={'471px'} width={1200} pb={5} mt={5}>
                    <OnlyNews />
                </Stack>

                {/* News By Category */}
                <Stack width={1200} borderTop={'2px solid #e2e2e2'} pb={5}>
                    <Grid className="Hoang" container gap={3}>
                        <Grid sm={3 - 0.3}>
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
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </>
    );
}

export default HomePage;
