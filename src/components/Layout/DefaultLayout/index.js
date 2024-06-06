import { Stack } from '@mui/material';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <Stack height={1000}>
            <Header />
            <Stack>
                <div className="main">{children}</div>
            </Stack>
        </Stack>
    );
}

export default DefaultLayout;
