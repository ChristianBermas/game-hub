import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c9d25e9fb79c44ceb38866721e822d25',
  },
});
