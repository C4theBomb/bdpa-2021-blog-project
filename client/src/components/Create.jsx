import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Paper, TextField, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function Create() {
    const [redirect, setRedirect] = useState(false);
    const [form, setForm] = useState({
        title: '',
        body: '',
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/create', form);
        setRedirect(true);
    }

    return (
        <>
            {redirect && <Redirect to='/' />}
            <Paper style={{ margin: '0.5rem', padding: '0.25rem' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        id='outline-required'
                        label='Title'
                        name='title'
                        variant='outlined'
                        type='text'
                        onChange={handleChange}
                        autoFocus
                    />
                    <TextField
                        required
                        fullWidth
                        id='outlined-multiline-static'
                        label='Body'
                        name='body'
                        variant='outlined'
                        onChange={handleChange}
                        multiline
                        rows={10}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant='contained'
                            startIcon={<CloudUploadIcon />}
                            style={{ margin: '0.5rem' }}
                            type='submit'
                        >
                            Create Post
                        </Button>
                    </div>
                </form>
            </Paper>
        </>
    );
}

export default Create;
