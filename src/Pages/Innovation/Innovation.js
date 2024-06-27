// function Innovation() {
//     return <h1>InnopvationPage</h1>;
// }

// export default Innovation;

import { Grid, Stack, Typography } from '@mui/material';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import MoreNews from '../../components/pageComponent/MoreNews/MoreNews';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';
import MoreNews2 from '../../components/pageComponent/MoreNews2/MoreNews2';
import PaginationPage from '../../components/PaginationPage/PaginationPage';

function Innovation() {
    const dataVideo = [
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0j6731p.jpg.webp`,
            title: `Magic Johnson opens up on his HIV journey`,
            description: `The former NBA star on how he broke the devastating news to his wife and how that ultimately 'changed the world'.`,
            note: `2 days ago | Science & Health`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0g7llb7.jpg.webp`,
            title: `How does extreme weather affect our brains?`,
            description: `Have you noticed any cognitive or mood swings when it’s too hot outside? You're not alone.`,
            note: `3 days ago | Science & Health`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0j589xs.jpg.webp`,
            title: `Which hiccup remedies actually work?`,
            description: `Why do we get hiccups and how can we get rid of them?`,
            note: `7 days ago | Science & Health`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0j45yl6.jpg.webp`,
            title: `How 'tapping therapy' can help calm your mind`,
            description: `A simple on the go therapy could help ease anxiety, stress and reduce the impact of traumatic memories.`,
            note: `14 Jun 2024 | Science & Health`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/61c7/live/42720b20-2811-11ef-80aa-699d54c46324.jpg.webp`,
            title: `UK college students on life without a smartphone`,
            description: `Ten teenagers swap their smartphones for brick phones as part of a week-long digital detox.`,
            note: `12 Jun 2024 | Technology`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0hzhyj9.jpg.webp`,
            title: `Watch the movie that rewrites itself`,
            description: `Filmmaker Gary Hustwit has created a documentary which can rewrite itself before every screening.`,
            note: `7 Jun 2024 | Artificial Intelligence`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0j2394j.jpg.webp`,
            title: `How to improve your memory`,
            description: `Some simple tricks that could have a positive effect on your memory.`,
            note: `4 Jun 2024 | Science & Health`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0j1w34h.jpg.webp`,
            title: `What does coffee do to your body?`,
            description: `Billions of people rely on a cup of coffee to get them through the day. But what does it do to the human body?`,
            note: `3 Jun 2024 | Science & Health`,
        },
    ];
    const data1 = {
        img: `https://ichef.bbci.co.uk/news/1024/cpsprodpb/2295/live/2c90e480-3378-11ef-9fb3-db4b10d023b6.jpg.webp`,
        title: `What is 'AI washing' and why is it a problem?`,
        description: `Tech firms commonly highlight their use of AI, but in some cases it may be exaggerated.`,
        note: `5 hrs ago`,
    };
    const data2 = {
        img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/8389/live/93737410-33e1-11ef-bdc5-41d7421c2adf.jpg.webp`,
        title: `AI can beat university students, study suggests`,
        description: `University exams taken using artificial intelligence beat those by real students, in a limited study.`,
        note: `10 hrs ago`,
    };
    const data3 = [
        {
            img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/b5c9/live/b3366980-33cb-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `Supreme Court rejects claim White House limited free speech on social media`,
            description: `The plaintiffs said White House pressure to take down alleged misinformation violated the right to free speech.`,
            note: `10 hrs ago | US & Canada`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/640x360/p0j6dhxm.jpg.webp`,
            title: `The 'gene deserts' unravelling medical mysteries`,
            description: `Mutations in these regions of so-called "junk" DNA are increasingly being linked to a range of diseases, from Crohn's to cancer.`,
            note: `19 hrs ago | Future`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/7a7c/live/d5a4b140-32e3-11ef-bdc5-41d7421c2adf.jpg.webp`,
            title: `Streamer Dr Disrespect axed by his gaming company`,
            description: `His removal comes four years after he was abruptly dropped by streaming platform, Twitch.`,
            note: `19 hrs ago | Technology`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/raw/p0hdrsmy.jpg.webp`,
            title: `Tech Decoded: Sign up to our newsletter`,
            description: `Get timely, trusted tech news from BBC correspondents around the world, every Monday and Friday.`,
            note: `12 hrs ago`,
        },
    ];
    const data4 = {
        img: `https://ichef.bbci.co.uk/images/ic/1024x576/p0cm465f.jpg.webp`,
        title: `How to stay cool in a heatwave`,
        description: `Heatwaves make daily life uncomfortable, but also pose a serious threat to human health and the environment. Here is our guide to getting through one.`,
    };
    const data5 = [
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/5f71/live/d7d07e10-2d55-11ef-90be-b75b34b0bbb2.jpg.webp`,
            title: `The screen tech that can do almost anything`,
            description: `New technology promises TV and phone screens that use much less electricity than current models.`,
            note: `2 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/3c79/live/91f6f9d0-32bb-11ef-bb6b-6f63dab0c9cc.png.webp`,
            title: `World's biggest music labels sue over AI copyright`,
            description: `Sony, Universal and Warner claim AI software steals music to "spit out" similar work.`,
            note: `1 day ago | Business`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/ae5d/live/e5baf230-3327-11ef-b6f2-b9570029d6ac.jpg.webp`,
            title: `Fifth Tory politician in UK election betting probe`,
            description: `A Conservative in the Welsh Parliament is the latest to face inquiries by the Gambling Commission.`,
            note: `22 hrs ago | Wales`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/0791/live/8ac14370-3287-11ef-b1f0-1508a70a10e8.jpg.webp`,
            title: `Bankruptcy trustee plans to shut down Alex Jones' Infowars`,
            description: `The conspiracy theorist used his website to peddle false claims about the Sandy Hook shooting.`,
            note: `2 days ago | US & Canada`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/5e2e/live/192cc8b0-31e2-11ef-8129-d7db8201c720.jpg.webp`,
            title: `Criminal charges recommended against Boeing`,
            description: `The US Department of Justice has until 7 July to make a final decision on whether to prosecute the firm.`,
            note: `2 days ago | Business`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/26d8/live/d38a6fc0-3212-11ef-a0f4-1b104ecf2771.jpg.webp`,
            title: `Apple in breach of law on App Store, says EU`,
            description: `It is the first time a company has been found to be in breach of the Digital Markets Act (DMA).`,
            note: `3 days ago | Technology`,
        },
    ];
    const data6 = [
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/1e42/live/61e46e20-3244-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `Einstein atomic bomb letter to be auctioned`,
            description: `The note helped persuade President Roosevelt the US should develop the world's first nuclear weapons.`,
            note: `2 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/480x270/p0j5qgm8.jpg.webp`,
            title: `The robots hunting Nazi-era bombs in the sea`,
            description: `Remote-controlled seabed crawlers and robots with "smart grabbers" are cleaning up some of the 1.6 million tonnes of toxic munitions in the North and Baltic seas.`,
            note: `2 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/0D22/production/_106426330_wikileakslogo.png.webp`,
            title: `Wikileaks' document dumps that shook world`,
            description: `Since 2006, Wikileaks has published thousands of classified documents and emails.`,
            note: `2 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/26d8/live/d38a6fc0-3212-11ef-a0f4-1b104ecf2771.jpg.webp`,
            title: `Apple in breach of law on App Store, says EU`,
            description: `It is the first time a company has been found to be in breach of the Digital Markets Act (DMA).`,
            note: `3 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/afcf/live/4d1f7460-2f9e-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `Stolen test data and NHS numbers published by hospital hackers`,
            description: `Experts say the hack is one of the most "significant and harmful" cyber attacks ever in the UK.`,
            note: `6 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/1af6/live/856bd080-2fbb-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `TikTok confirms it offered US government a 'kill switch' `,
            description: `The platform made the disclosure as part of its legal challenge against a law forcing its sale in the US.`,
            note: `6 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/1024/cpsprodpb/b851/live/5b3d93e0-2ee7-11ef-88d9-0bf10c68769b.jpg.webp`,
            title: `Booking.com warns of up to 900% increase in travel scams`,
            description: `The online travel firm says generative AI tools, such as ChatGPT, are driving the explosive rise.`,
            note: `7 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/c74d/live/7ae75f70-2e36-11ef-aa27-fba4175cc85d.jpg.webp`,
            title: `Joey Barton to pay an extra £35,000 to Jeremy Vine`,
            description: `The ex-footballer had already agreed to pay £75,000 over a series of defamatory social media posts.`,
            note: `8 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/480/cpsprodpb/ac4e/live/670947d0-2e44-11ef-90be-b75b34b0bbb2.png.webp`,
            title: `Don't blame us for people suffering - London hospital hackers`,
            description: `They claim the cyber attack - which has disrupted more than 1,000 procedures - was politically motivated.`,
            note: `8 days ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/320/cpsprodpb/d738/live/95618ef0-2d7f-11ef-933f-594e9e9f7991.jpg.webp`,
            title: `Bacon ice cream and nugget overload sees misfiring McDonald's AI withdrawn`,
            description: `The voice recognition system seems not to have recognised what customers were really ordering.`,
            note: `18 Jun 2024`,
        },
    ];
    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <Stack width={1300}>
                <Grid container gap={2}>
                    <Grid sm={9 - 0.2}>
                        <MoreNews1 data={data1} />
                    </Grid>
                    <Grid sm={3 - 0.2}>
                        <SubNews data={data2} />
                    </Grid>
                    {data3.map((data) => {
                        return (
                            <Grid sm={3 - 0.2}>
                                <SubNews data={data} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
            <Stack position={'relative'} margin={'auto'} width={'100vw'}>
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
            <Stack pb={3} mt={'480px'} width={1300} borderTop={'2px solid black'} borderBottom={'2px solid black'}>
                <Typography pl={2} fontSize={'1.5rem'} fontWeight={1000}>
                    Features
                </Typography>
                <Stack>
                    <OnlyNews data={data4} />
                </Stack>
            </Stack>
            <Stack pb={3} width={1300}>
                <Typography pl={2} pt={1} fontSize={'1.5rem'} fontWeight={1000}>
                    More News
                </Typography>
                <Grid pt={3} container gap={2}>
                    {data5.map((data) => {
                        return (
                            <Grid sm={3.3 - 0.2}>
                                <SubNews data={data} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
            <Stack mt={2} width={1300} borderTop={'2px solid black'}>
                <Typography pt={2} fontWeight={1000}>
                    More innovation
                </Typography>
                <Stack width={1300} alignItems={'center'} pt={3}>
                    <PaginationPage arr={data6} />
                </Stack>
            </Stack>
            <Stack width={'100vw'} borderBottom={'1px solid black'}></Stack>
        </Stack>
    );
}

export default Innovation;
