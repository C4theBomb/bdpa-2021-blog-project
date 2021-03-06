import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Paper, TextField, Button } from '@material-ui/core';

function Login({ setToken }) {
    const [redirect, setRedirect] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        setPasswordStrength(() => {
            if (form.password.length >= 17) {
                return 'strong';
            } else if (form.password.length >= 10) {
                return 'medium';
            } else {
                return 'weak';
            }
        });
    }, [form.password]);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios
            .post('http://localhost:3000/auth/register', form)
            .catch((error) => console.log(error));
        setRedirect(true);
    }

    return (
        <>
            {redirect && <Redirect to='/login' />}
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
                            disabled={
                                passwordStrength === 'weak' ||
                                form.username === '' ||
                                form.password === ''
                            }
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </Paper>
        </>
    );
}

export default Login;
