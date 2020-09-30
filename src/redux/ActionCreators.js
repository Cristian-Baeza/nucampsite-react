// * is a wild card that lets us import all action types from ActionTypes.js

import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text
  }
});