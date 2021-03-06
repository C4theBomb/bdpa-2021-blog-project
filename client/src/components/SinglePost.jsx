import { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import { useFetch } from '../hooks/useFetch';
import Post from './Post';

function SinglePost({ token }) {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);
    const [authorized, setAuthorized] = useState(false);

    const [post] = useFetch(`http://localhost:3000/api/${id}`, token);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/auth/authorized-posts`, {
                params: {
                    token,
                },
            })
            .then((result) => {
                if (result.data.includes(post._id)) {
                    setAuthorized(() => true);
                }
            });
    }, [post, token]);

    async function handleDelete() {
        await axios.delete(`http://localhost:3000/api/delete?id=${id}`, {
            data: {
                token,
            },
        });
        setRedirect(true);
    }

    return (
        <>
            {redirect && <Redirect to='/' />}
            <Post key={post._id} object={post}>
                {authorized && (
                    <Link
                        to={`/update/${post._id}`}
                        style={{
                            marginLeft: 'auto',
                            marginRight: '1rem',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={<UpdateIcon />}
                        >
                            Update
                        </Button>
                    </Link>
                )}
                {authorized && (
                    <Button
                        variant='contained'
                        color='secondary'
                        style={{ marginRight: '1rem' }}
                        startIcon={<DeleteIcon />}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                )}
            </Post>
        </>
    );
}

export default SinglePost;
