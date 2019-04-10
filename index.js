function setTimeoutSync(callback, ms) {
  const start = Date.now()
  let now = start

  while (now - start < ms) {
    now = Date.now()
  }

  if (typeof callback === 'function') {
    callback()
  }
}

module.exports = setTimeoutSync
