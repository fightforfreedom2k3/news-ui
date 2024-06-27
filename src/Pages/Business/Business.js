import { Grid, Stack, Typography } from '@mui/material';
import MoreNews1 from '../../components/pageComponent/MoreNews1/MoreNews1';
import SubNews from '../../components/pageComponent/SubNews/SubNews';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import MoreNews from '../../components/pageComponent/MoreNews/MoreNews';
import OnlyNews from '../../components/pageComponent/OnlyNews/OnlyNews';

function Business() {
    const dataVideo = [
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p09qx1pf.jpg.webp`,
            title: `Playing with FIRE: How to quit work and retire in your 30s`,
            description: `A personal finance strategy popular among millennials is helping them to quit their job and retire decades early.`,
            note: `23 Apr 2024 | Future of business`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0h9v82v.jpg.webp`,
            title: `Boomerang CEOs: Do they ever succeed?`,
            description: `Five years after being ousted from WeWork, Adam Neumann wants to re-buy the now-bankrupt business.`,
            note: `8 Feb 2024 | Future of business`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0h4hkj3.jpg.webp`,
            title: `How industry leaders transformed their career`,
            description: `The BBC's Katty Kay has spoken to successful change-makers to ask what made them pivot in their career.`,
            note: `17 Jan 2024 | Future of business`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0gwh0zs.jpg.webp`,
            title: `Women were the original beer brewers - what changed?`,
            description: `Today, the beer industry is male-dominated, but it wasn't always so.`,
            note: `7 Dec 2023 | Work Culture`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p09g4wdd.jpg.webp`,
            title: `How waiting alters our perception of time`,
            description: `Expert advice on how to get through a waiting period.`,
            note: `15 Nov 2023 | Work Culture`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0fv1l9m.jpg.webp`,
            title: `Do the super-rich 'deserve' their wealth?`,
            description: `Should there be a cap on billionaires' wealth and their inheritances?`,
            note: `15 Nov 2023 | Future of business`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p0998b43.jpg.webp`,
            title: `Four simple hacks to succeed in every conversation`,
            description: `A career coach, a choreographer, a chef and a dragon boat captain offer advice on giving critical feedback.`,
            note: `15 Nov 2023 | Work Culture`,
        },
        {
            img: `https://ichef.bbci.co.uk/images/ic/320x180/p09p76jh.jpg.webp`,
            title: `Solo and hybrid work: Navigating our future and new normal`,
            description: `Covid-19 reshaped the way we live and work. We rethink solo working and explore the future of work-life.`,
            note: `15 Nov 2023 | Future of business`,
        },
    ];
    const data1 = {
        img: `https://ichef.bbci.co.uk/news/1024/cpsprodpb/cfaf/live/088db570-341f-11ef-b6dc-b363c9fc63dd.jpg.webp`,
        title: `Mechanic claims he was sacked for raising Boeing issues`,
        description: `The US contractor also alleged he was labelled a "snitch" for speaking up over safety issues.`,
        note: `56 mins ago | Business`,
    };
    const data2 = {
        img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/1962/live/81cf2500-33dd-11ef-a044-9d4367d5b599.jpg.webp`,
        title: `$100m assets linked to 1MDB to be returned to Malaysia`,
        description: `The US said artworks by artists Andy Warhol and Claude Monet and a luxury flat in Paris would be liquidated and assets worth $67m released.`,
        note: `9hrs ago | World`,
    };
    const data3 = [
        {
            img: `https://ichef.bbci.co.uk/news/1536/cpsprodpb/2295/live/2c90e480-3378-11ef-9fb3-db4b10d023b6.jpg.webp`,
            title: `What is 'AI washing' and why is it a problem?`,
            description: `Tech firms commonly highlight their use of AI, but in some cases it may be exaggerated.`,
            note: `3 hrs ago`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/1024/cpsprodpb/b5c9/live/b3366980-33cb-11ef-a044-9d4367d5b599.jpg.webp`,
            title: `Supreme Court rejects claim White House limited free speech on social media`,
            description: `The plaintiffs said White House pressure to take down alleged misinformation violated the right to free speech.`,
            note: `10 hrs ago | US & Canada`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/489d/live/675eb070-334a-11ef-a338-cff579e52648.jpg.webp`,
            title: `VW to invest up to $5bn in Tesla rival Rivian`,
            description: `Shares in the US-based electric truck and SUV maker jumped by almost 50% after the announcement.`,
            note: `1 day ago | Business`,
        },
        {
            img: `https://ichef.bbci.co.uk/news/640/cpsprodpb/3ec1/live/c9350ba0-33c7-11ef-a508-e1cdd362243c.jpg.webp`,
            title: `Father-son Euros reunion hit by airline dispute`,
            description: `An indefinite work-to-rule is under way by Aer Lingus pilots with an eight-hour strike on Saturday.`,
            note: `12 hrs ago | Europe`,
        },
    ];
    const data4 = {
        img: `https://ichef.bbci.co.uk/images/ic/1376x774/p0hrc53k.jpg.webp`,
        title: `UPS exec: The greenest mile is the mile not driven`,
        description: `Laura Lane, UPS's chief corporate affairs and sustainability officer, enters the BBC's Executive Lounge to discuss the logistics company's future.`,
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
                    Excutive Lounge
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
            <Stack width={'100vw'} borderBottom={'1px solid black'}></Stack>
        </Stack>
    );
}

export default Business;
