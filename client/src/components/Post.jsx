import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

function Post({ object, children }) {
    const { _id, title, body } = object;

    const postStyle = {
        padding: '0.5rem',
        margin: '1rem',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    return (
        <Paper style={postStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to={`/${_id}`} style={linkStyle}>
                    <h1>{title}</h1>
                </Link>
                {children}
            </div>
            <p>{body}</p>
        </Paper>
    );
}

export default Post;
