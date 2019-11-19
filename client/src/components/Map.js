import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

export default () => {
  //set map state
  const [map, setMap] = React.useState({});

  // make GET request to server
  const initMap = () => {
    return axiosWithAuth()
      .get('https://lambda-mud-test.herokuapp.com/api/adv/rooms')
      .then(res => {
        console.log('initMap res : ', res);
      })
      .catch(err => {
        console.log('initMap err : ', err);
      });
  };

  React.useEffect(() => {
    initMap();
  }, []);

  return (
    <div>
      <h3>Map component</h3>
    </div>
  );
};
