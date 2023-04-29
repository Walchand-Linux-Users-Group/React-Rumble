import axios from 'axios';
const API=axios.create({baseURL:'https://react-rumble.onrender.com'});
const tryme=()=> API.get('/level2/somethingJustLikeThis');
const iamreal=()=> API.get('/level2/maiHuHiroTera');
const yugotme=()=> API.get('/level2/teraHoneLagaHu');

export {tryme,iamreal,yugotme};
