const sleep = time => new Promise(
  resolv => setTimeout(resolv, time)
);

(async () => {
  await sleep(3000);
  console.log('waited enought !');
})();
