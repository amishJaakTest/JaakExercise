import React, { Component } from 'react';
import GraphlQueries from "../../shared/graphlQueries";
import getConfig from "../../shared/config";
import request from 'minimal-request-promise';
import promise from 'bluebird';

const getAlbums = () => {
  var albumQuery = GraphlQueries.albumQuery;
  var config = getConfig();
  const graphqlUrl = config.environments["local"].graphqlHost;
  const graphqlAction = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/graphql'
      },
      body: albumQuery
  };
  
  return request.post(graphqlUrl, graphqlAction, promise).then(
    function (response) {
      return response.body;
    },
    function (response) {
        console.log(response);
      console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    }
  );

};
  
export default { getAlbums };