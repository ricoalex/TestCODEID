import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const addContactAction = (data, navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/contact`, data)
    .then(res => {
      // console.log('Result : ', res);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      showMessage(res?.data?.message, 'success');
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      // console.log('Response ', err.response);
      showMessage(err?.response?.data?.message, 'danger');
    });
};

export const getContactAction = () => dispatch => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/contact`)
    .then(res => {
      // console.log('Result : ', res);
      dispatch(setLoading(false));
      dispatch({type: 'SET_CONTACT', value: res.data.data});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log('Response ', err.response);
      // showMessage(err?.response?.data?.message, 'danger');
    });
};

export const editContactAction = (id, data, navigation) => dispatch => {
  // console.log(data);
  // console.log('Result : ', id);
  Axios.put(`${API_HOST.url}/contact/${id}`, data)
    .then(res => {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      showMessage(res?.data?.message, 'success');
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log('Response ', err.response);
      showMessage(err?.response?.data?.message, 'danger');
    });
};

export const deleteContactAction = (id, navigation) => dispatch => {
  // console.log(`${API_HOST.url}/contact/${id}`);
  Axios.delete(`${API_HOST.url}/contact/${id}`)
    .then(res => {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      showMessage(res?.data?.message, 'success');
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log('Response ', err.response);
      showMessage(err?.response?.data?.message, 'danger');
    });
};
