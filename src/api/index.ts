import axios from 'axios';
import { toast } from 'react-toastify';
import TokenUtil from './TokenUtil';

const host = process.env.REACT_APP_API_HOST || 'http://localhost:8080';

const Api = axios.create({
  baseURL: host,
  withCredentials: true,
  headers: {
    Authorization: `Basic ${TokenUtil.get()}`
  }
});

Api.interceptors.response.use(
  (res) => res,
  (e) => {
    if (!e.response) {
      toast.error('🔥 네트워크 오류가 발생하였습니다.');
      return Promise.reject(e);
    }
    if (e.response.status === 500) {
      toast.error('🔥 오류가 발생하였습니다.');
    }

    return Promise.reject(e);
  }
);

export default Api;
