import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const faker = [{}];

export default () => {
  //set map state
  const [map, setMap] = React.useState({});

  // make GET request to server
  const initMap = () => {
    return axiosWithAuth()
      .get('https://lambda-mud-test.herokuapp.com/api/adv/rooms')
      .then(res => {
        console.log('initMap res.data : ', res.data);
        setMap(JSON.parse(res.data.rooms));
      })
      .catch(err => {
        console.log('initMap err : ', err);
      });
  };

  React.useEffect(() => {
    initMap();
  }, []);

  console.log('map : ', map);
  //   console.log(JSON.parse(JSON.stringify(map)));
  //   const testMap = JSON.parse(JSON.stringify(map));
  //   console.log(typeof testMap);

  return (
    <div>
      <h3>Map component</h3>
    </div>
  );
};
