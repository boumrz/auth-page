// import { Redirect } from 'react-router-dom';
// import React from 'react';
// import { authData } from './auth-data';

export function login({ login, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === 'admin@teko.io' && password === 'admin123') {
        resolve({ data: { token: '123', user: login, expires: Date.now() + 10000 } });
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ message: 'Wrong credentials', code: 401 });
      }
    }, 600);
  });
}

export function getCurrentUser({ login, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === 'admin@teko.io' && password === 'admin123') {
        resolve();
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject();
      }
    }, 600);
  });
}
