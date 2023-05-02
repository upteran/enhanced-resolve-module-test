# Enhanced-resolve request test

Reproduce repo for npm package request with [enhanced-resolve](https://github.com/webpack/enhanced-resolve)

## test

```js
yarn install // install pack
```

```js
yarn add <package-name> // install package you want to check
```


go to index.js
```js
console.log(resolve(process.cwd(), `{package-name}`));  // put your package
```

run script and check result
```js
node index.js
```


