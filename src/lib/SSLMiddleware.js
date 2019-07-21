module.exports = function() {
  environments = ["production"];
  status = 302;
  return function(req, res, next) {
    if (environments.indexOf(process.env.NODE_ENV) >= 0) {
      if (
        req.get("x-forwarded-proto") != "https" &&
        req.path != "/healthz" &&
        req.host != "localhost"
      ) {
        res.redirect(status, `https://${req.hostname}${req.originalUrl}`);
      } else {
        next();
      }
    } else {
      next();
    }
  };
};
