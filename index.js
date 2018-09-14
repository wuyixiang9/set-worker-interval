modules.exports =  function setWorkerInterval(fn, interval) {
  const blob = new Blob([`
  let timer
  onmessage = function (e) {
    const { interval, stop } = e.data
    if (stop) clearInterval(timer)
    timer = setInterval(() => postMessage(interval), interval)
  }
`], { type: 'text/javascript' });

  const worker = new Worker(window.URL.createObjectURL(blob));

  worker.postMessage({ interval })
  worker.onmessage = () => fn()
  return function () {
    worker.terminate()
  }
}