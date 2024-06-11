import { Stack, Typography } from '@mui/material';

export default function NavBar() {
    const arrayObject = [
        {
            text: 'HomePage',
            link: '/',
        },
        {
            text: 'News',
            link: '/news',
        },
        {
            text: 'Sports',
            link: '/sports',
        },
        {
            text: 'Business',
            link: '/business',
        },
        {
            text: 'Innovation',
            link: '/innovation',
        },
        {
            text: 'Culture',
            link: '/culture',
        },
    ];

    function handleClick(object) {
        if (window) {
            window.location.href = object?.link;
        }
    }

    return (
        <Stack
            // zIndex={-1}
            backgroundColor={'white'}
            pb={0.5}
            direction={'row'}
            justifyContent={'center'}
            spacing={3}
            borderBottom={'1px solid #e2e2e2'}
        >
            {arrayObject.map((object) => {
                return (
                    <Stack
                        component={'div'}
                        onClick={() => handleClick(object)}
                        sx={{
                            cursor: 'pointer',
                            p: 0.5,
                            px: 1,
                            borderRadius: '4px',
                            ':hover': { backgroundColor: '#e2e2e2' },
                            // ':active': { backgroundColor: '#e2e2e2' },
                        }}
                    >
                        <Typography color={'black'}>{object.text}</Typography>
                    </Stack>
                );
            })}
        </Stack>
    );
}
