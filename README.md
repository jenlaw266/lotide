# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `_.head(array)`: returns the first item of an array
- `_.tail(array)`: returns a shallow cope of an array without the first item
- `_.middle(array)`: return the middle item(s) of an array
- `_.assertArraysEqual(array1, array2)`: check if one array is equal to another
- `_.assertEqual(primitive1, primitive2)`: check if one item is equal to another
- `_.assertObjectsEqual(object1, object2)`: check if one object is equal to another
- `_.countLetters(string)`: count the letters in a string (no spaces)
- `_.countOnly(arrayOfItems, itemToCount)`: count items & recurring items in an array (returns an object)
- `_.eqArrays(array1, array2)`: check if one array is equal to another (result get passed to assertArraysEqual)
- `_.eqObjects(object1, object2)`: check if one object is equal to another (result get passed to asssertObjectsEqual)
- `_.findKey(object, callback)`: find the first key of an object with the object and a callback function as arguments
- `_.findKeyByValue(object, value)`: find the first key of an object with the object and value as argements
- `_.flatten(array)`: flatten the array by one layer
- `_.letterPosition(string).letter`: find the letter position in the given string (returns an array of index numbers)
- `_.map(array, function)`: returns a new array with changes made by the callback function
- `_.takeUntil(array, function)`: returns a new array with the original array values until the function's stopping condition
- `_.without(array, itemToRemove)`: remove the specified item in the array
