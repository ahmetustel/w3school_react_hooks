import React from 'react';
import ReactDOM from 'react-dom/client';
import FavoriteColor from './FavoriteColor'
import Car from './Car'
import App from './App'
import Counter from './Counter';
import Timer from './Timer';
import Child from './Child';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Child/>
  </React.StrictMode>
);
