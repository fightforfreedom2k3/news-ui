import { Grid, Stack, Typography } from '@mui/material';

export default function Footer() {
    const arrayObject = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'News',
            link: '/news',
        },
        {
            name: 'Sports',
            link: '/sports',
        },
        {
            name: 'Business',
            link: '/business',
        },
        {
            name: 'Innovation',
            link: '/innovation',
        },
        {
            name: 'Culture',
            link: '/culture',
        },
    ];

    const arrayObject2 = [
        {
            name: `Terms of Use`,
            link: `/`,
        },
        {
            name: `About us`,
            link: `/`,
        },
        {
            name: `Privacy Policy`,
            link: `/`,
        },
        {
            name: `Cookies`,
            link: `/`,
        },
        {
            name: `Accessibility Help`,
            link: `/`,
        },
        {
            name: `Parental Guidance`,
            link: `/`,
        },
        {
            name: `Contact with us`,
            link: `/`,
        },
        {
            name: `Get Personalised Newsetters`,
            link: `/`,
        },
    ];
    return (
        <Stack sx={{ backgroundColor: 'black' }} alignItems={'center'} justifyContent={'center'}>
            <Stack width={1300} pt={2} pb={2}>
                <Stack direction={'row'} spacing={7} pb={3} borderBottom={'1px solid #8A8C8E'}>
                    {arrayObject.map((object) => {
                        return (
                            <Stack
                                component={'div'}
                                onClick={() => {
                                    if (window) {
                                        window.location.href = object?.link;
                                    }
                                }}
                                paddingRight={2}
                                borderRight={'1px solid #8A8C8E'}
                            >
                                <Typography
                                    sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                                    color={'white'}
                                    fontWeight={1000}
                                    fontSize={'15px'}
                                >
                                    {object.name}
                                </Typography>
                            </Stack>
                        );
                    })}
                </Stack>
                <Stack pt={3} direction={'row'} spacing={5} pb={3}>
                    {arrayObject2.map((object) => {
                        return (
                            <Stack
                                component={'div'}
                                onClick={() => {
                                    if (window) {
                                        window.location.href = object?.link;
                                    }
                                }}
                            >
                                <Typography
                                    sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
                                    color={'white'}
                                    fontWeight={1000}
                                    fontSize={'15px'}
                                >
                                    {object.name}
                                </Typography>
                            </Stack>
                        );
                    })}
                </Stack>
                <Typography color={'white'} fontWeight={300} pt={1} fontSize={'14px'}>
                    © 2024 News Project. The Project is not responsible for the content of external sites.
                </Typography>
            </Stack>
        </Stack>
    );
}
