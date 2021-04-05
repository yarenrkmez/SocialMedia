import axios from 'axios';
const header = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const post = async (url, parameters) => {
  try {
    const res = await axios.post(url, parameters, {
      headers: header,
    });
    return res;
  } catch (err) {
    return err;
  }
};

const get = async url => {
  try {
    const res = await axios.get(url, {
      headers: header,
    });
    return res;
  } catch (err) {
    return err;
  }
};

export {post, get};
