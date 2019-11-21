import React, { useEffect, useState } from 'react';

import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import { Graph } from 'react-d3-graph';

const myConfig = {
  nodeHighlightBehavior: true,
  height: 240,
  width: 400,
  staticGraph: true,
  staticGraphWithDragAndDrop: false,
  d3: {
    alphaTarget: 0,
    gravity: -400,
    linkLength: 500,
    linkStrength: 1
  },
  node: {
    renderLabel: false,
    color: '#35ff69',
    size: 100,
    highlightStrokeColor: 'SAME',
    strokeWidth: 2
  },
  link: {
    color: '#35ff69',
    highlightColor: 'SAME'
  }
};

const MapSample = ({ mapRooms, gameInfo }) => {
  console.log(mapRooms);
  console.log(gameInfo);

  const validNodes = [];

  mapRooms.forEach(room => {
    const directions = ['n_to', 's_to', 'e_to', 'w_to'];
    directions.forEach(dir => {
      if (room[dir]) {
        validNodes.push(room[dir]);
      }
    });
  });

  const southLinks = mapRooms
    .filter(room => {
      if (validNodes.includes(room.id)) {
        if (validNodes.includes(room.s_to)) {
          return true;
        }
        return false;
      }
    })
    .map(link => ({
      source: link.id,
      target: link.s_to
    }));

  const eastLinks = mapRooms
    .filter(room => {
      if (validNodes.includes(room.id)) {
        if (validNodes.includes(room.e_to)) {
          return true;
        }
        return false;
      }
    })
    .map(link => ({
      source: link.id,
      target: link.e_to
    }));

  const adjacentNodes = mapRooms.filter(room => validNodes.includes(room.id));

  const graph = {
    nodes: [
      ...mapRooms.map(room => {
        return {
          ...room,
          x: room.x * 30,
          y: room.y * -30,
          color: room.id === gameInfo.room_id ? '#090909' : '#35ff69',
          strokeColor: room.id === gameInfo.room_id ? '#3F3F3F' : 'none',
          size: room.id === gameInfo.room_id ? 350 : 'same'
        };
      }),
      ...adjacentNodes.map(room => {
        return {
          ...room,
          x: room.x * 30,
          y: room.y * -30,
          color: room.id === gameInfo.room_id ? '#090909' : '#35ff69',
          size: room.id === gameInfo.room_id ? 350 : 100,
          strokeColor: room.id === gameInfo.room_id ? '#35ff69' : 'none'
        };
      })
    ],
    links: [...southLinks, ...eastLinks]
  };

  // Working code to create rooms map
  // const adjacent = new Set();

  // rooms.forEach(room => {
  //   const directions = new Set(['north', 'south', 'east', 'west']);
  //   directions.forEach(dir => {
  //     if (room[dir]) {
  //       adjacent.add(room[dir]);
  //     }
  //   });
  // });

  // const south_links = rooms
  //   .filter(room => {
  //     if (adjacent.has(room.id)) {
  //       if (adjacent.has(room.south)) {
  //         return true;
  //       }
  //       return false;
  //     }
  //   })
  //   .map(link => ({
  //     source: link.id,
  //     target: link.south
  //   }));

  // const east_links = rooms
  //   .filter(room => {
  //     if (adjacent.has(room.id)) {
  //       if (adjacent.has(room.east)) {
  //         return true;
  //       }
  //       return false;
  //     }
  //   })
  //   .map(link => ({
  //     source: link.id,
  //     target: link.east
  //   }));

  // const adjacentNodes = rooms.filter(room => adjacent.has(room.id));

  // const graph = {
  //   nodes: [
  //     ...rooms.map(room => {
  //       return {
  //         ...room,
  //         x: room.x * 25,
  //         y: room.y * -25
  //       };
  //     }),
  //     ...adjacentNodes.map(room => {
  //       return {
  //         ...room,
  //         x: room.x * 25,
  //         y: room.y * -25
  //       };
  //     })
  //   ],
  //   links: [...south_links, ...east_links]
  // };
  return (
    <div className="sample-map-container">
      <Graph className="graph" data={graph} id="tunnel-map" config={myConfig} />
    </div>
  );
};

export default MapSample;
