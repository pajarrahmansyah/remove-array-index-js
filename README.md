# @pajarrahmansyah/remove-array-index-js

[![npm (scoped)](https://img.shields.io/npm/v/@pajarrahmansyah/remove-array-index-js.svg)](https://www.npmjs.com/package/@pajarrahmansyah/remove-array-index-js)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@pajarrahmansyah/remove-array-index-js.svg)](https://www.npmjs.com/package/@pajarrahmansyah/remove-array-index-js)

Javascript removing by index or value from array

## Install

```
$ npm install @pajarrahmansyah/remove-array-index-js
```

## Usage

```js
const remove = require("@pajarrahmansyah/remove-array-index-js");
const array = ["haha", "hihi", "123"];
remove.value(array, "hihi");
//=> "["haha", "123"]"

remove.value(1337);
//=> Uncaught TypeError: value wants a array!
//    at value (<anonymous>:2:41)
//    at <anonymous>:1:1
```
