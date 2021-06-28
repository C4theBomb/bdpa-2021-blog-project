import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { Paper, TextField, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useFetch } from '../hooks/useFetch';

function Update() {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);
    const [form, setForm] = useFetch(`http://localhost:3000/api/${id}`);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.patch(`http://localhost:3000/api/update?id=${form._id}`, {
            title: form.title,
            body: form.body,
        });
        setRedirect(true);
    }

    return (
        <>
            {redirect && <Redirect to='/' />}
            <Paper style={{ margin: '0.75rem', padding: '0.50rem' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        id='outline-required'
                        label='Title'
                        name='title'
                        variant='outlined'
                        onChange={handleChange}
                        value={form.title}
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
                        value={form.body}
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
                            Update Post
                        </Button>
                    </div>
                </form>
            </Paper>
        </>
    );
}

export default Update;
