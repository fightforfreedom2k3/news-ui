import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <Stack>
            <Header />
            <Stack>
                <div className="main">{children}</div>
            </Stack>
        </Stack>
    );
}

export default DefaultLayout;
