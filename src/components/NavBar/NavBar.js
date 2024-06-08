import { Stack } from '@mui/material';

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
    return <Stack direction={'row'}></Stack>;
}
