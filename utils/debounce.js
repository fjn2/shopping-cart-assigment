export const debounce = (fn, delay) => {
  let timeoutId
  return function _debounce(...args) {
    clearInterval(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

export const throttle = (func, delay) => {
  let inThrottle
  return function _throttle(...args) {
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, delay)
    }
  }
}
