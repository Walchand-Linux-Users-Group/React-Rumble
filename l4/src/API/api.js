import axios from 'axios';
const API=axios.create({baseURL:'https://react-rumble.onrender.com'});
const tryme=()=> API.get('/level4/lastTwoLevelDudee');
const iamreal=()=> API.get('/level4/closeButNotClose');
const yugotme=()=> API.get('/level4/justChill');

export {tryme,iamreal,yugotme};