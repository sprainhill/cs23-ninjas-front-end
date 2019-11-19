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

  React.useEffect(() => {
    generateMap();
  }, []);

  // instantiate empty array
  // fill it with objects at every point
  // in matrix

  let gameMap = []
  let rows = 10
  let columns = 10
  let totalNodes = rows * columns

const generateMap = () => {
  for (let i = 0; i <= totalNodes; i++){
    gameMap.push({})
  }

}



  console.log("gameMap : ",gameMap)


  return (

    <div>
      <h3>Map component</h3>
    </div>
  );
};
