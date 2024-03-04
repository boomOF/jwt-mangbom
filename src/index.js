// jwtManager.js

const jwt = require('jsonwebtoken');

class JWTManager {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  createToken(payload, expiresIn) {
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}

module.exports = JWTManager;
