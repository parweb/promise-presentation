(async () => {
  async function sleep(time) {
    return new Promise(function(resolv, reject) {
      setTimeout(resolv, time);
    });
  }

  await sleep(3000);
  console.log('waited enought !');
})();
