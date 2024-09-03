export const benchmark = (callback) => {
  console.time();
  callback();
  console.timeEnd();
};
