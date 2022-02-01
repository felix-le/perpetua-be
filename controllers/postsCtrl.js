const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constants');
const logger = require('../utils/logger');
const postsCtrl = {
  getAllPosts: async (req, res) => {
    try {
      const mockData = [
        {
          id: 1,
          author: 'Rylee Paul',
          authorId: 9,
          likes: 960,
          popularity: 0.13,
          reads: 50361,
          tags: ['tech', 'health'],
        },
      ];
      logger.info(mockData);
      return responseServer(
        res,
        statusConstants.SUCCESS_CODE,
        'Get all Posts successfully',
        mockData
      );
    } catch (error) {
      logger.error(error);
      return raiseException(
        res,
        statusConstants.SERVER_ERROR_CODE,
        'Internal server error'
      );
    }
  },
};

module.exports = postsCtrl;
