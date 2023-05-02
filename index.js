const enhancedResolve = require('enhanced-resolve');
const process = require('process');

const resolve = enhancedResolve.create.sync({
  conditionNames: []
});

console.log(resolve(process.cwd(), '@watchable/store-react'));
