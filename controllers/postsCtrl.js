const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constants');
const logger = require('../utils/logger');
const { getAllPostsFromServerLink } = require('../api/getPosts');
const _ = require('lodash');

const postsCtrl = {
  getAllPosts: async (req, res) => {
    try {
      const { tag } = req.query;
      const sourceData = await getAllPostsFromServerLink(tag);
      const posts = sourceData.posts;

      // group all posts by authorId
      const groupedData = _.groupBy(posts, 'authorId');
      // merge properties likes, popularity, reads, tags array in the same authorId
      const mergedData = _.map(groupedData, (value, key) => {
        const authorId = key;
        // keep the value of author
        const author = value[0].author;

        const likes = _.sumBy(value, 'likes');
        const popularity = _.sumBy(value, 'popularity');
        const reads = _.sumBy(value, 'reads');
        const tags = _.uniq(_.flatten(_.map(value, 'tags')));
        return {
          author,
          authorId,
          likes,
          popularity,
          reads,
          tags,
        };
      });

      return responseServer(
        res,
        statusConstants.SUCCESS_CODE,
        'Get all Posts successfully',
        mergedData
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
