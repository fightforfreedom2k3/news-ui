import { Stack } from '@mui/material';
import Header from './Header';
import NavBar from '../../NavBar/NavBar';

function DefaultLayout({ children }) {
    return (
        <Stack height={1000}>
            <Header/>
            <Stack className='NavBar' marginTop={'72px'} position={'fixed'} left={0} right={0}>
                <NavBar/>
            </Stack>
            <Stack marginTop={'120px'}>
                <div className="main">{children}</div>
            </Stack>
        </Stack>
    );
}

export default DefaultLayout;
