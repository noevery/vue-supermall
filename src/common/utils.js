export function debounce(fn, delay=500) {
  let timer = null;
  return function (...res) {
    if (timer)  clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, ...res)
    }, delay)
  }
}
