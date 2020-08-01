module.exports = function () {
  return function (req, res, next) {
    res.setHeader(
      "NEL",
      JSON.stringify({ report_to: "default", max_age: 2592000 })
    );
    next();
  };
};
