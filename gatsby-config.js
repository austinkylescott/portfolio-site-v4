module.exports = {
  //configuration object
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
  ],
};
