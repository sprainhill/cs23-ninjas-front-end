import React from 'react';

import { Graph } from 'react-d3-graph';
import { rooms } from './rooms.js';

const myConfig = {
  nodeHighlightBehavior: true,
  height: 240,
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
    highlightStrokeColor: 'SAME'
  },
  link: {
    color: '#35ff69',
    highlightColor: 'SAME'
  }
};

const MapSample = () => {
  const adjacent = new Set();

  rooms.forEach(room => {
    const directions = new Set(['north', 'south', 'east', 'west']);
    directions.forEach(dir => {
      if (room[dir]) {
        adjacent.add(room[dir]);
      }
    });
  });

  const south_links = rooms
    .filter(room => {
      if (adjacent.has(room.id)) {
        if (adjacent.has(room.south)) {
          return true;
        }
        return false;
      }
    })
    .map(link => ({
      source: link.id,
      target: link.south
    }));

  const east_links = rooms
    .filter(room => {
      if (adjacent.has(room.id)) {
        if (adjacent.has(room.east)) {
          return true;
        }
        return false;
      }
    })
    .map(link => ({
      source: link.id,
      target: link.east
    }));

  const adjacentNodes = rooms.filter(room => adjacent.has(room.id));

  const graph = {
    nodes: [
      ...rooms.map(room => {
        return {
          ...room,
          x: room.x * 25,
          y: room.y * -25
        };
      }),
      ...adjacentNodes.map(room => {
        return {
          ...room,
          x: room.x * 25,
          y: room.y * -25
        };
      })
    ],
    links: [...south_links, ...east_links]
  };
  return (
    <div className="sample-map-container">
      <Graph className="graph" data={graph} id="tunnel-map" config={myConfig} />
    </div>
  );
};

export default MapSample;
