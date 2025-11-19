//protection logic 
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  // Check if the request headers contain an Authorization token,
  // and if it starts with 'Bearer'.
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get the token from the header (e.g., "Bearer eyJhbGci...")
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using our secret key. This will decode the payload.
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get the user's ID from the decoded token payload and find the user
      // in the database. We exclude the password when fetching.
      req.user = await User.findById(decoded.id).select('-password');

      // Move on to the next function (our route controller).
      next();
    } catch (error) {
      // If the token is invalid or expired, send an error.
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If there's no token in the header at all, send an error.
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};