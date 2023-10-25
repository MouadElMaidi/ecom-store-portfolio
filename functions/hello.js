// domain/.netlify/functions/hello

// eslint-disable-next-line no-undef
exports.handler = async function () {
  return {
    statusCode: 200,
    body: "Hello world!",
  };
};
