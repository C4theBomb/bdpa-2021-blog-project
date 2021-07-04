import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppBar, Toolbar, Button } from '@material-ui/core';

function Header({ token, setToken }) {
    const linkStyles = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '1rem',
        margin: '0.25rem',
    };

    async function handleLogout() {
        await axios.delete(`http://localhost:3000/auth/delete-token`, {
            data: {
                token,
            },
        });
        setToken(() => '');
    }

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
                {token && (
                    <Button onClick={handleLogout}>
                        <Link to='/login' style={linkStyles}>
                            Logout
                        </Link>
                    </Button>
                )}
                {!token && (
                    <Button>
                        <Link to='/register' style={linkStyles}>
                            Register
                        </Link>
                    </Button>
                )}
                {!token && (
                    <Button>
                        <Link to='/' style={linkStyles}>
                            Login
                        </Link>
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
