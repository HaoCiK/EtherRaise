import React, { useEffect, useState } from "react";
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from "../components/Layout";
import { Link } from "../routes";

const CampaignIndex = ({ campaigns }) => {
    // /* useEffect for client side render - faster but not straight show the correct data */
    // const [campaigns, setCampaigns] = useState([]);

    // useEffect(() => {
    //     const fetchCampaigns = async () => {
    //         const campaigns = await factory.methods.getDeployedCampaigns().call();
    //         setCampaigns(campaigns);
    //     }
    //     fetchCampaigns();
    // }, []);

    const renderCampaigns = () => {
        const items = campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaigns</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    };

    return (
        <Layout>
            <div>
                <h3>Open Campaigns</h3>
                <Link route="/campaigns/new">
                    <a>
                        <Button
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>
                {renderCampaigns()}
            </div>
        </Layout>
        
    )
}

/* use getServerSideProps/getInitialProps for more accurate render on first fetch (server side get) */
CampaignIndex.getInitialProps = async () =>  {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
}

export default CampaignIndex;