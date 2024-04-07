# EtherRaise Project: Decentralized Crowfunding DApp

EtherRaise is a decentralized application (DApp) built on the Ethereum blockchain. It enables community-driven fundraising campaigns using smart contracts. 
Contributors can participate by sending ETH to project-specific contracts, and they will be marked as approvers who can govern the usage of the funds within the pool.

## Ethereum Smart Contract

The Ethereum part of the project is located in the `ethereum` directory. Here's a breakdown of the two Solidity contracts:
1. **CampaignFactory** Contract:
    - The `CampaignFactory` contract is responsible for creating new crowdfunding campaigns (individual instances of the Campaign contract).
    - Key Functions:
      - `createCampaign`: Allows anyone to create a new campaign by deploying an instance of the `Campaign` contract.
      - Manages a list of deployed campaign addresses.
2. **CampaignFactory** Contract:
    - Each campaign has its own instance of the `Campaign` contract.
    - Key Functions:
      - `contribute`: Allows contributors to send ETH to the campaign.
      - `createRequest`: Enables the campaign manager (creator) to make spending requests.
      - `approveRequest`: Contributors vote to approve or reject spending requests.
      - `finalizeRequest`: If approved, the manager can finalize the request and release funds.

### Usage
**Run on Remix.io**: Just copy the Campaign.sol in contracts folder and paste the code to remix.io to quickly test this project.

**Deploy to blockchain**: 
Replace mneumonic with your own mneumonic, and testnet_api with your own api key.
```bash
cd ethereum
node deploy.js
```

### Run test 
```bash
cd test
node Campaign.test.js
```

## React Frontend (Next.js)

 It’s a Next.js application that interacts with the Ethereum smart contract.

### Usage
To run the frontend locally, navigate to the root directory and run the following commands:
```bash
npm install
npm run dev
```

This will start the Next.js development server, and you can open the application in your web browser at http://localhost:3000.

## Frontend Snapshot

Here's what the frontend of the Lottery application looks like.

Home Page:
![Lottery Frontend](https://i.imgur.com/oUOhBmp.png)

View Campaign Page:
![Lottery Frontend](https://i.imgur.com/qKsE5yP.png)

Create Request Page:
![Lottery Frontend](https://i.imgur.com/5Oj4Vui.png)

View Request Page:
![Lottery Frontend](https://i.imgur.com/Nd5gelW.png)

Add Request Page:
![Lottery Frontend](https://i.imgur.com/SyYmdI9.png)

## Show your support
Give a ⭐ if this project helped you!





