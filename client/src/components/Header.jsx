import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const linkStyles = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '1rem',
        margin: '0.25rem',
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <h1>React Blog</h1>
                <Button style={{ marginLeft: 'auto' }}>
                    <Link to='/' style={linkStyles}>
                        Home
                    </Link>
                </Button>
                <Button>
                    <Link to='/create' style={linkStyles}>
                        Create New Post
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
