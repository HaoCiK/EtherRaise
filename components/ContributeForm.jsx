import React, { useState } from "react";
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import getCampaign from '../ethereum/campaign';
import web3 from "../ethereum/web3";

const ContributeForm = (props) => {
    const {
        address,
    } = props;

    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        const campaign = getCampaign(address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            });

            // use replace instead of push so no browser history
            Router.replaceRoute(`/campaigns/${address}`);
        } catch (err) {
            setErrorMessage(err.message);
        }
        
        setLoading(false);
    };


    return (
        <Form onSubmit={onSubmit} error={!!errorMessage}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                    label="ether"
                    labelPosition="right"
                    value={value}
                    onChange={(event) => {setValue(event.target.value)}}
                />
            </Form.Field>
            <Message error header="Oops!" content={errorMessage} />
            <Button primary loading={loading}>Contribute!</Button>
        </Form>
    )
};

export default ContributeForm;