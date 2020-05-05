import React , {useState} from 'react';
import {TabContainer,Tabs,Tab} from 'react-bootstrap';
import AccountDetails from './AccountDetails';
import PersonalDetails from './PersonalDetails';
import FurtherInformation from './FurtherInformation';
import TermsandMailing from './TermsandMailing';
import './../static/signup.css';

const SignUp = () => {
    const [key,setKey] = useState('')
    return (
        <div className='back'>
            <TabContainer>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="AccountDetails" title="AccountDetails">
                        <AccountDetails />
                    </Tab>
                    <Tab eventKey="PersonalDetails" title="PersonalDetails">
                        <PersonalDetails />
                    </Tab>
                    <Tab eventKey="FurtherInformation" title="FurtherInformation">
                        <FurtherInformation />
                    </Tab>
                    <Tab eventKey="TermsandMailing" title="TermsandMailing">
                        <TermsandMailing />
                    </Tab>
                </Tabs>
            </TabContainer>
        </div>
    )
}
export default SignUp;