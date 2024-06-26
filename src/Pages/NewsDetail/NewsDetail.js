import { Box, Stack, Typography, List, ListItem, ListItemText, Divider, Grid } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { FiberManualRecord } from '@mui/icons-material';

export default function NewsDetail() {
    const arrText = [`Europe`, `France`, `Germany`, `European elections 2024`, `Emmanuel Macron`, `Italy`];
    return (
        <Stack width={'100vw'} pb={5} alignItems={'center'} borderTop={'1px solid black'}>
            <Stack width={700}>
                <Stack pt={3}>
                    <Typography fontWeight={1000} fontSize={'38px'} lineHeight={'44px'}>
                        Macron snap election leaves rivals stunned after EU vote
                    </Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} pt={2}>
                        <Typography fontSize={'14px'} color={'#525252'}>
                            24hrs ago
                        </Typography>
                        <Stack
                            direction={'row'}
                            spacing={0}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': { '& .MuiTypography-root': { textDecoration: 'underline' } },
                            }}
                        >
                            <Typography fontWeight={1000} fontSize={'14px'}>
                                Share
                            </Typography>
                            <ShareIcon sx={{ fontSize: '16px', mt: 0.3 }} />
                        </Stack>
                    </Stack>
                    <Typography fontSize={'16px'} fontWeight={1000} pt={1}>
                        By Laura Gozzi
                    </Typography>
                </Stack>
            </Stack>
            <Box
                pt={2}
                width={'900px'}
                height={'500px'}
                component={'img'}
                src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/f6c7/live/fb4ccc50-273c-11ef-a0aa-318f04db7c53.jpg.webp"
            />
            <Stack width={700} pt={2}>
                <Stack gap={2} pb={3} sx={{ '& .MuiTypography-root': { fontSize: '1rem' } }}>
                    <Typography>
                        France's political leaders are scrambling to prepare for snap elections after President Emmanuel
                        Macron dissolved parliament in response to a stinging European vote defeat by the far-right
                        National Rally.
                    </Typography>
                    <Typography>
                        Finance Minister Bruno Le Maire has warned the two-round vote, starting on 30 June could have
                        "the most serious consequences" in modern French history.
                    </Typography>
                    <Typography>
                        German Chancellor Olaf Scholz's Social Democrats were also heavily beaten in Sunday's European
                        elections by the conservative opposition, but he has ruled out holding early elections.
                    </Typography>
                    <Typography>
                        The conservative CSU premier of Bavaria, Markus Söder, said Mr Scholz's government was
                        essentially finished and needed to follow the French example.
                    </Typography>
                    <Typography>
                        Germany isn't scheduled to hold fresh elections until 2025, but Mr Söder said the "country needs
                        a new start".
                    </Typography>
                    <Typography>
                        Macron ally Yaël Braun-Pivet, who's president of the National Assembly said there had been an
                        alternative to new elections, which involved a government pact , but "the president decided that
                        path wasn't open to him". Without a majority in parliament, the government relies on support
                        from other parties to pass legislation.
                    </Typography>
                    <Typography>
                        There was also frustration from the Socialist mayor of Paris, Anne Hidalgo, that the vote was
                        taking place three weeks before the capital hosts the Olympics.
                    </Typography>
                    <Typography>
                        Mr Macron's Renew party polled less than 15% of the vote on Sunday, while the anti-immigration
                        National Rally (RN) of Marine Le Pen and young leader Jordan Bardella, secured more than 31%.
                    </Typography>
                </Stack>
                <Box
                    component={'img'}
                    src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/4fae/live/7c1aade0-2768-11ef-9d0a-ef8fa1b61375.png.webp"
                />
                <Stack pt={3}>
                    <Typography fontWeight={1000} fontSize={'1.2rem'}>
                        European Parliament - the basics
                    </Typography>
                    <List sx={{ '& .MuiTypography-root': { fontSize: '1rem' } }}>
                        <ListItem>
                            <FiberManualRecord fontSize="5px" sx={{ pr: 1 }} />
                            <ListItemText primary="The 720-member assembly is the only EU institution elected directly by voters across 27 EU members" />
                        </ListItem>
                        <ListItem>
                            <FiberManualRecord fontSize="5px" sx={{ pr: 1 }} />
                            <ListItemText primary="It shapes the direction of EU laws that affect the lives of EU citizens, and also endorses the bloc’s annual budget" />
                        </ListItem>
                        <ListItem>
                            <FiberManualRecord fontSize="5px" sx={{ pr: 1 }} />
                            <ListItemText primary="The EP supervises the work of the European Commission - the EU’s de facto government - and other EU bodies" />
                        </ListItem>
                        <ListItem>
                            <FiberManualRecord fontSize="5px" sx={{ pr: 1 }} />
                            <ListItemText primary="The EP election results in theory have no bearing on national politics - but voters often use the occasion to send a message to their national government" />
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
            <Stack width={700} pt={2} gap={2}>
                <Stack gap={2} sx={{ '& .MuiTypography': { fontSize: '1rem' } }}>
                    <Typography>
                        The decision to hold new elections came as a shock across the political spectrum, with reports
                        of a hastily organised meeting involving top RN leaders and Marion Maréchal from rival far-right
                        party Reconquête.
                    </Typography>
                    <Typography>
                        There were calls for France's bitterly divided left to rally round Socialist Raphaël Glucksmann,
                        who scored almost 14% in the European vote.
                    </Typography>
                    <Typography>
                        President Macron joined German President Frank-Walter Steinmeier on Monday in the French village
                        of Oradour-sur-Glane, to mark the 80th anniversary of an infamous Nazi massacre in World War
                        Two, when SS troops murdered 643 villagers in 1944.
                    </Typography>
                    <Typography>
                        President Steinmeier said it was fitting on the day after European elections that Europeans
                        never forgot the damage done by nationalism and hate: “Let us never forget the miracle of
                        reconciliation that the European Union has worked.”
                    </Typography>
                    <Typography>
                        Alternative for Germany (AfD) came second in Germany's European vote on Sunday, ahead of all
                        three parties in the Mr Scholz's coalition government, despite a succession of scandals
                        involving the AfD's top two candidates.
                    </Typography>
                    <Typography>
                        Its newly elected MEPs voted to exclude top candidate Maximilian Krah from their delegation in
                        the European Parliament, after he was investigated for alleged links to Russia and China.
                    </Typography>
                </Stack>
                <Stack>
                    <Box
                        component={'img'}
                        src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/5350/live/3d787110-2738-11ef-a13a-0b8c563da930.jpg.webp"
                        height={'480px'}
                    />
                    <Typography fontSize={'13px'} color={'#525252'}>
                        National Rally's Marine Le Pen and Jordan Bardella were jubilant after Sunday's victory
                    </Typography>
                </Stack>
            </Stack>
            <Stack width={700} pt={2} gap={2}>
                <Stack gap={2} sx={{ '& .MuiTypography-root': { fontSize: '1rem' } }}>
                    <Typography>
                        Meanwhile, President Macron is due to meet both Olaf Scholz and Italy’s Giorgia Meloni at a G7
                        summit this week in the Italian region of Puglia.
                    </Typography>
                    <Typography>
                        The three leaders are likely not just to discuss the outcome of Sunday’s European vote, but also
                        whether to support Ursula von der Leyen’s bid to win a second term as president of the European
                        Commission.
                    </Typography>
                    <Typography>
                        The Italian leader told Italian radio on Monday that it was “too early to talk about a second
                        mandate” for the current Commission chief.
                    </Typography>
                    <Typography>
                        Ms von der Leyen’s centre-right European People’s Party emerged as by far the biggest grouping
                        in the next European Parliament.
                    </Typography>
                </Stack>
                <Box
                    component={'img'}
                    src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/4ab5/live/dd48b1d0-273a-11ef-baa7-25d483663b8e.png.webp"
                />
            </Stack>
            <Stack width={700} pt={2} gap={2} pb={2} borderBottom={'2px solid black'}>
                <Stack gap={2} sx={{ '& .MuiTypography-root': { fontSize: '1rem' } }}>
                    <Typography>
                        Among the winners on the centre-right were Poland's Prime Minister Donald Tusk, who managed to
                        lead his Civic Coalition party to a narrow victory over the right-wing-populist PiS party for
                        the first time in a decade.
                    </Typography>
                    <Typography>
                        Mr Tusk is now one of Europe's few leaders to have emerged from these elections with a stronger
                        mandate.
                    </Typography>
                    <Typography>
                        The far-right Polish Confederation party won 12% of the vote, and one of its successful
                        candidates is Grzegorz Braun - who provoked an international outcry in December when used a fire
                        extinguisher to put out candles on a menorah in the Polish parliament placed there for the
                        Jewish festival of Hanukkah.
                    </Typography>
                    <Typography>
                        Czech President Petr Pavel said Europe should examine why support for far-right, conservative,
                        nationalist parties was increasing and “needs to take notice of these voices”.
                    </Typography>
                    <Typography>
                        The Czech vote was won by the opposition ANO party of former prime minister Andrej Babis, which
                        clinched seven of the available 21 seats in the European Parliament.
                    </Typography>
                    <Typography>
                        But it was also a good night for three small anti-system parties, including a new party called
                        Motorists, who are campaigning against the EU’s Green Deal on measures on climate change and
                        sustainability. One of the MotoristS MEPs will be controversial former racing driver Filip
                        Turek, who was recently exposed for old social media posts revealing his passion for Nazi
                        gestures and memorabilia.
                    </Typography>
                    <Typography>
                        The far-right fared unexpectedly poorly in Finland and Sweden. The Finns Party had been polling
                        in third place but ended up with just 7.6% of the vote, while the anti-immigration Sweden
                        Democrats slipped to fourth place with 13.2% of the vote.
                    </Typography>
                    <Typography>
                        There was also a surprise result in Denmark, where the Social Democrats of Mette Frederiksen
                        were defeated by Green-Left party SF which polled more than 17% of the vote.
                    </Typography>
                    <Typography>
                        Ms Frederiksen, who is recovering from a physical assault in Copenhagen on Friday night, called
                        the result "really miserable".
                    </Typography>
                </Stack>
            </Stack>
            <Stack width={700} pt={2}>
                <Grid container gap={2}>
                    <Grid xs={6 - 0.2}>
                        <Stack spacing={1}>
                            <Typography
                                fontWeight={1000}
                                sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                            >
                                Europe's night of election drama capped by Macron bombshell
                            </Typography>
                            <Typography
                                fontWeight={1000}
                                sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                            >
                                Far right makes gains in EU election but it could struggle to unite
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={6 - 0.2}>
                        <Stack spacing={1}>
                            <Typography
                                fontWeight={1000}
                                sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                            >
                                A night of drama in Europe as EU parliament moves to right
                            </Typography>
                            <Typography
                                fontWeight={1000}
                                sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                            >
                                Macron takes huge risk with surprise election
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack p={3} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    {arrText.map((text) => {
                        return (
                            <Stack p={1} sx={{ backgroundColor: '#e2e2e2' }}>
                                {text}
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
}
