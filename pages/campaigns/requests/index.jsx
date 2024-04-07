import React from "react";
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from "../../../components/Layout";
import getCampaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

// export async function 

const RequestIndex = ({ address, requests, requestCount, approversCount }) => {
    const { Header, Row, HeaderCell, Body } = Table;

    const renderRows = () => {
        return requests.map((request, index) => {
            return <RequestRow 
                key={index}
                id={index}
                request={request}
                address={address}
                approversCount={approversCount}
            />
        })
    };

    return (
        <Layout>
            <h3>Requests</h3>
            <Link route={`/campaigns/${address}/requests/new`}>
                <a>
                    <Button primary floated="right" style={{ marginBottom: 10}}>Add Request</Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>{renderRows()}</Body>
            </Table>
            <div>Found {requestCount} requests.</div>
        </Layout>
    );
};

RequestIndex.getInitialProps = async (context) => {
    const address = context.query.address;
    const campaign = getCampaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
        // use Array.fill(# number of count).fill() create # number of count of array, this is just get index faster
        Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {
                return campaign.methods.requests(index).call()
            })
    );
  
    return {
        address,
        requests,
        requestCount,
        approversCount
    };
}
export default RequestIndex;