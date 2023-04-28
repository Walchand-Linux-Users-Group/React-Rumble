import axios from 'axios';
const API=axios.create({baseURL:'https://react-rumble.onrender.com'});
const tryme=()=> API.get('/level3/comeOnTryy');
const iamreal=()=> API.get('/level3/youWillFail');
const yugotme=()=> API.get('/level3/closeButNotClose');

export {tryme,iamreal,yugotme};