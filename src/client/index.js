import 'aframe';
import React from 'react';
import { render } from 'react-dom';
import { getQueryParams } from './utils';
import Client from './Client';

export const run = selector => () =>
    render(<Client />, document.querySelector(selector));

document.addEventListener('DOMContentLoaded', run('#root'));
