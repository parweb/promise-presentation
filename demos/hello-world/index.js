function sleep(time) {
  return new Promise(function(resolv, reject) {
    setTimeout(resolv, time);
  });
}

console.log('before');

sleep(3000).then(function() {
  console.log('wait enought !');
});

console.log('after');
