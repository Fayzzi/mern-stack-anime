const SendAdminToken = (user, code, res) => {
  const admin_token = user.createJWtToken();
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(code).cookie("token_admin", admin_token, options).json({
    success: true,
    message: "success",
    user,
    admin_token,
  });
};
module.exports = SendAdminToken;
