import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useFetch } from '../hooks/useFetch';
import Post from './Post';

function Home() {
    const [posts] = useFetch('http://localhost:3000/api');
    const [renderedPosts, setRenderedPosts] = useState([]);
    const [page, setPage] = useState(1);
    const itemLimit = 5;

    useEffect(() => {
        setRenderedPosts(() => {
            const totalItems = posts.length;
            const start = (page - 1) * itemLimit;
            const end =
                start + itemLimit > totalItems - 1
                    ? totalItems - 1
                    : start + itemLimit - 1;
            const postSet = posts.slice(start, end + 1);

            return postSet;
        });
    }, [page, posts]);

    function handleChange(event, value) {
        setPage(() => value);
    }

    return (
        <>
            <Grid container direction='column' justify='flex-start'>
                {renderedPosts.map((post) => {
                    return <Post key={post._id} object={post} />;
                })}
            </Grid>
            <Pagination
                count={Math.ceil(posts.length / itemLimit)}
                page={page}
                onChange={handleChange}
                showFirstButton
                showLastButton
            />
        </>
    );
}

export default Home;
