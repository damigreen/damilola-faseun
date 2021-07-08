import axios from 'axios';

const dataUrl = './portfolioData.json'


const getData = async () => {
  const response = await axios.get(dataUrl);
  return response.data;
}

export default { getData, }
