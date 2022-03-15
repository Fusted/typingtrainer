module.exports = {
  //mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "css-modules-typescript-loader" }, 
        ],
      },
    ],
  },
};
