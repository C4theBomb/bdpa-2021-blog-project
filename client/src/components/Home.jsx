import { Grid } from '@material-ui/core';
import { useFetch } from '../hooks/useFetch';
import Post from './Post';

function Home() {
    const [posts] = useFetch('http://localhost:3000/api');

    return (
        <>
            <Grid container direction='column' justify='flex-start'>
                {posts.map((post) => {
                    return <Post key={post._id} object={post} />;
                })}
            </Grid>
        </>
    );
}

export default Home;
