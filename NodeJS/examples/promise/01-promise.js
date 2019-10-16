new Promise((resolve, reject) => {
  resolve('ok');
  // reject('err');
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });