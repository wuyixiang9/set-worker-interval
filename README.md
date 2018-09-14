# set-worker-interval

use WebWorker impl setInterval

## Usage
```js
  const setWorkerInterval = require('set-worker-interval');
  let counter = 0
  let stopInterval = setWorkerInterval(function (){
    if(counter > 5){
      stopInterval()
    }
    counter++;
  }, 1000)
```