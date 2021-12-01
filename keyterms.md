**Js101/lesson 5/ 4**

```javascript
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
``` 

We use the multi-dimensional array `[[1, 2], [3, 4]]` to call `forEach`. Each inner array is passed to the callback, in turn, and assigned to the parameter `arr`. We then use the element reference operator, `[]`, to get the value at index `0` of the array. On the first invocation of the callback, `arr[0]` returns `1`, and on the second, it returns `3`. In each invocation, console.log outputs a string representation of the value returned by `arr[0]`. Since this is a single statement callback, the callback's return value is the return value of `console.log(arr[0])`, which is undefined. forEach doesn't do anything with that returned value though. Finally, no matter what the callback returns, `forEach` always returns `undefined`.

```javascript
let a = 2;
```

We are declaring the variable `a` and assigning it the primitive value `2`. Variable declaration always returns undefined