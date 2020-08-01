module.exports = function (app) {
  return function (req, res, next) {
    res.setHeader(
      "Report-To",
      JSON.stringify({
        group: "default",
        max_age: 10886400,
        endpoints: [
          {
            url: `https://reportd.natwelch.com/report/${app}`,
          },
        ],
      })
    );
    next();
  };
};
