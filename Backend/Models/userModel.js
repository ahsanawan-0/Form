const User = require("./definitions/user");

module.exports = {
  createCandidateDetails: async (body) => {
    try {
      const user = new User({ ...body });
      await user.save();

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
