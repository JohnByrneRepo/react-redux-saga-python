import { put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'

let data = [
{ "name": "Product1", "id": "3fb31af5-c8f2-01a5-5dc0-782edbdf888d",
  "image": "https://images-na.ssl-images-amazon.com/images/I/61D5m7qtncL._SL500_SR160,160_.jpg", "votes": 1 },
{ "name": "Product2", "id": "d0c99aea-7733-7842-d6d4-9ad909c80dbf",
  "image": "https://images-na.ssl-images-amazon.com/images/I/71FfBSfMi1L._SL500_SR160,160_.jpg", "votes": 2 },
{ "name": "Product3", "id": "758a52a2-6647-5f01-5f19-f3773a7c5d66",
  "image": "https://images-na.ssl-images-amazon.com/images/I/61N4x8RbhRL._SL500_SR160,160_.jpg", "votes": 3 },
{ "name": "Product4", "id": "d05d5400-5f79-7b6f-9ad4-33ab994bd1cf",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51W%2BtCmovpL._SL500_SR160,160_.jpg", "votes": 4 },
{ "name": "Product5", "id": "c95af3df-13f0-8fc7-67c4-fe4e4c3092bb",
  "image": "https://images-na.ssl-images-amazon.com/images/I/61-PEghmBML._SL500_SR160,160_.jpg", "votes": 5 },
{ "name": "Product6", "id": "b65e3393-a9cc-7c16-2b79-392944bbc21e",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51WWPA21koL._SL500_SR160,160_.jpg", "votes": 1 },
{ "name": "Product7", "id": "4763fa99-b74f-5673-db2b-64b26fe63ff1",
  "image": "https://images-na.ssl-images-amazon.com/images/I/61HCnLk3aSL._SL500_SR160,160_.jpg", "votes": 2 },
{ "name": "Product8", "id": "15786389-3b44-4092-ffbf-e774be73dc33",
  "image": "https://images-na.ssl-images-amazon.com/images/I/81PAYBd5rSL._SL500_SR128,160_.jpg", "votes": 3 },
{ "name": "Product9", "id": "6c6c7574-6931-c58c-1521-7cc534dc7be9",
  "image": "https://images-na.ssl-images-amazon.com/images/I/81Rk0aarmyL._SL500_SR160,160_.jpg", "votes": 4 },
{ "name": "Product10", "id": "e9dc8fb2-78f6-48b5-cb0a-7c8135a4fe24",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51rdbpH6suL._SL500_SR160,160_.jpg", "votes": 5 }
];

function* init() {
  yield put({
    type: actions.SET_STATE,
    payload: {
      data
    }
  })
}

function* update(value) {
  let filteredData = data.filter((item) => item.votes <= value.payload);
  yield put({
    type: actions.SET_STATE,
    payload: {
      data: filteredData
    }
  })
}

export default function* sagas() {
  yield [
    takeLatest(actions.INIT, init),
    takeLatest(actions.UPDATE, update)
  ]
}
