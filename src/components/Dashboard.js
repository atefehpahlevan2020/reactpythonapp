import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Jumbotron>
            <h1>Dashboard</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}
export default Dashboard;