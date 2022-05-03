import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = function (request) {
  console.log("inside requires auth");
  console.log(" Request " + JSON.stringify(request));
  const encodedToken = request.requestHeaders.Authorization;
  console.log(" encoded token " + encodedToken);
  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email });
    console.log(" User " + user);
    if (user) {
      return user._id;
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
