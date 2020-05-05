import React , {useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const PersonalDetails = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateForm = () => {
        return email.length > 0 && confirmEmail.length > 0 && password.length > 0 && confirmPassword.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="accountdetails">
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="confirmEmail">
                    <Form.Label>ConfirmEmail</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={confirmEmail}
                        onChange={e => setConfirmEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>ConfirmPassword</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Button className='btn btn-info btn-lg btn-block' type="submit" disabled={!validateForm()}>
                    Next Step >
                </Button>
            </form>
        </div>
    )
}
export default PersonalDetails;