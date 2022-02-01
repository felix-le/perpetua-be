const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constants');
const logger = require('../utils/logger');
const { getAllPostsFromServerLink } = require('../api/getPosts');

const postsCtrl = {
  getAllPosts: async (req, res) => {
    try {
      const { tag } = req.query;
      const sourceData = await getAllPostsFromServerLink(tag);

      logger.info(sourceData);

      return responseServer(
        res,
        statusConstants.SUCCESS_CODE,
        'Get all Posts successfully',
        sourceData
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
