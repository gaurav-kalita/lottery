import React, { useState} from 'react';
import {Button, Alert } from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';

import {Link, useHistory} from 'react-router-dom';

function Dashboard() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

    const handleLogout = async () =>{
        setError('')
        
        try {
            await logout()
            history.push('./') 

        } catch (error) {
            setError(error)
        }
    }
    
    return (
        <div>
            { error && <Alert variant='danger'>{error}</Alert>}
            <Button variant='link' onClick={handleLogout}>Log Out</Button>           
        </div>
    )
}

export default Dashboard
