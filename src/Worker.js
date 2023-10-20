module.exports = {
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
    ],
  },
};

onmessage = function (e) {
  let start = Date.now();
  let delay = e.data.delay;
  while (Date.now() - start < delay) {}
  let randomNumber = Math.floor(Math.random() * (e.data.max + 1));
  postMessage(randomNumber);
};
