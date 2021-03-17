import React, {useEffect, useState} from 'react';
import { useSelector,useDispatch, } from 'react-redux';
import { useHistory} from 'react-router-dom';

import {emailSignInStart} from '../redux/reducers/user/user-actions';

import {Form, Card, Button, Alert } from "react-bootstrap";


const mapState = ({user}) => ({
    currentUser: user.currentUser
});

function LoginComponent() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const { currentUser} = useSelector(mapState)
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/dashboard');
        }
    }, [currentUser])

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch(emailSignInStart());
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Admin Login</h2>
                   {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit = {handleSubmit} >
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="emial" required/>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group id="password">
                            <Form.Label>
                               Password
                            </Form.Label>
                            <Form.Control type="password"  required/>
                        </Form.Group>
                    </Form>
                    <Form>
                        
                    <Button  disabled={loading} className="w-100" type="submit">
                        Login
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default LoginComponent
