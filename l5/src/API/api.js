import axios from 'axios';
const API=axios.create({baseURL:'https://react-rumble.onrender.com'});
const tryme=()=> API.get('/level5/lastLevelDudee');
const iamreal=()=> API.get('/level5/congratulation');
const yugotme=()=> API.get('/level5/okGoodGoing');

export {tryme,iamreal,yugotme};