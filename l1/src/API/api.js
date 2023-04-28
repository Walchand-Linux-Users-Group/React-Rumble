import axios from 'axios';
const API=axios.create({baseURL:'https://react-rumble.onrender.com'});
const tryme=()=> API.get('/level1/maybeIamRight');
const iamreal=()=> API.get('/level1/giveUP');
const yugotme=()=> API.get('/level1/okYouGotME');

export {tryme,iamreal,yugotme};