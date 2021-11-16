//라우터에 바로써도 되지만 중복되기 때문에 custom middleware로 따로 뽑아준 것

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인하지 않ㅇ느 사용자만 접근 가능합니다.");
  }
};
