import React from 'react';
import {render} from 'react-dom';

const MyComponent = ()=> <h1>Hello from React</h1>;

render(<MyComponent />, document.getElementById('react'));