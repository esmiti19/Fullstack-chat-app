import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // the token will expire after 7 days
  });

  res.cookie("jwt", token, {
    // jwt is the name that we gave to the token.
    maxAge: 7 * 24 * 60 * 1000, // 7 days in milisecounds
    httpOnly: true, // prevents xss attacks
    sameSite: "strict", //prevent csrf attacks"
    secure: process.env.NODE_ENV !== "development", // the site will be https if only the 'development' mode is in "production" mode
  });

  return token;
};
