import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer= document.getElementById('home-container')
const holi = <h1>holiaaa</h1>

//ReactDom.render(que voy a renderizar, donde lo hare);
render(<Home data={data}/>, homeContainer);
