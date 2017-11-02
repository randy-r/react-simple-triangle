# react-simple-triangle

![alt text](https://raw.githubusercontent.com/randy-r/react-simple-triangle/master/screenshot.png)

Responsive triangle rendering react component.

The motivation behind this project/package emerged after attempts to apply a glow to the side(segments) composing a triangle.

The component will fill the width of the container element.

## Installation

```$npm install --save react-simple-triangle``` or ```yarn add react-simple-triangle```

or as an UMD module
```html
<script crossorigin src="https://unpkg.com/react-simple-triangle/umd/react-simple-triangle.min.js"></script>
```

## Usage
You can use it by writing in node
```javascript
import Triangle from '../react-simple-triangle/src/index';
```
or
```javascript
const Triangle = require('../react-simple-triangle/src/index').default;
```
(if using UMD)
```javascript
const Triangle = reactSimpleTriangle.Triangle
```

and place it where ever you need it. None of the props is necessary.

```javascript
ReactDOM.render(
  <div style={containerStyle} >
    <Triangle color="#f0ffef" glowColor='rgb(0,255,0)' onClick={() => alert('cliked')} />
  </div>,
  document.getElementById('root'),
);
```

## Licence
This project is licensed under the terms of the MIT license.
