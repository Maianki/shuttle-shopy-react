export const throttle = (func) => {
  let isDispatchable = true;
  return function () {
    if (isDispatchable) {
      func();
      isDispatchable = false;
      setTimeout(() => {
        isDispatchable = true;
      }, 1000);
    }
  };
};
