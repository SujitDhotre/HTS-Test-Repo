import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const validateEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
    };

    const validatePassword = (e) => {
        const newPass = e.target.value;
        setPassword(newPass);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordError(!passwordRegex.test(newPass));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailError && !passwordError && email == 'admin@gmail.com' && password == 'Admin@123') {
            alert('Login Successful');
            setIsLoggedIn(true);
        } else {
            alert('Invalid Email or Password');
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>Login Page</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={validateEmail}
                    error={emailError}
                    helperText={emailError ? "Enter a valid email address" : ""}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={validatePassword}
                    error={passwordError}
                    helperText={passwordError ? "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character" : ""}
                />
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: "20px" }}>
                    Login
                </Button>
            </form>
        </Container>
    );
}

export default Login;