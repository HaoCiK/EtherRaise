import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x77D49E50c3020C33064cB1eD7c75B5d486748F0B'
);

export default instance;