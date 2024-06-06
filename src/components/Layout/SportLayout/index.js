import Header from './Header';

function SportLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">{children}</div>
            </div>
        </div>
    );
}

export default SportLayout;
