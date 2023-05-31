import axios from 'axios';

export default {
  getProfile: (token: string) => {
    const endpoint = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`;
    const request = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    };

    return axios.get(endpoint, request);
  }
};
