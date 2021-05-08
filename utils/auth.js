const withAuth = (req, res, next) => {
<<<<<<< HEAD
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
=======
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
