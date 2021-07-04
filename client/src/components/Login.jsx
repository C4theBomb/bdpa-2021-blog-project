import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Paper, TextField, Button } from '@material-ui/core';

function Login({ setToken }) {
    const [redirect, setRedirect] = useState(false);
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios
            .post('http://localhost:3000/auth/generate-token', form)
            .then((result) => {
                setToken(() => result.data);
            })
            .catch((error) => console.log(error));
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
                        label='Username'
                        name='username'
                        variant='outlined'
                        onChange={handleChange}
                        value={form.username}
                        autoFocus
                    />
                    <TextField
                        required
                        fullWidth
                        id='outlined-multiline-static'
                        label='Password'
                        name='password'
                        variant='outlined'
                        onChange={handleChange}
                        value={form.password}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant='contained'
                            style={{ margin: '0.5rem' }}
                            type='submit'
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </Paper>
        </>
    );
}

export default Login;
