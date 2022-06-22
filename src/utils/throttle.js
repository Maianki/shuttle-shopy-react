export const throttle = (func, delay) => {
  let flag = true;
  return function () {
    let args = arguments,
      context = this;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
};
