import { Input, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Footer from '../../components/Layout/SportLayout/Footer/Footer';

export default function Search() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked((prevClicked) => true);
    };
    return (
        <Stack alignItems={'center'} width={'100vw'}>
            <Stack width={'100%'} borderBottom={'1px solid black'}>
                <NavBar2 />
            </Stack>
            <Stack width={800} pt={3} pb={3} height={'66.5vh'}>
                <Stack
                    width={800}
                    direction={'row'}
                    height={'7vh'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{ backgroundColor: '#F6F6F6' }}
                >
                    <Stack
                        direction={'row'}
                        width={'88%'}
                        alignItems={'center'}
                        pl={2}
                        onClick={handleClick}
                        onBlur={() => {
                            setClicked((prevClicked) => false);
                        }}
                        sx={{ border: clicked ? '2px solid black' : 'none' }}
                    >
                        <SearchIcon />
                        <Input
                            disableUnderline={true}
                            sx={{ width: '100%', p: '5px' }}
                            placeholder="Search in News Project"
                        ></Input>
                    </Stack>
                    <Stack
                        height={'100%'}
                        width={'12%'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                            ':hover': { backgroundColor: '#0051AD' },
                            '&:hover': { '& .MuiTypography-root': { color: 'white' } },
                            cursor: 'pointer',
                        }}
                    >
                        <Typography fontSize={'1.1rem'} fontWeight={1000}>
                            Search
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={'100%'}>
                <Footer />
            </Stack>
        </Stack>
    );
}
