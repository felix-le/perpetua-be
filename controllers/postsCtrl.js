const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constants');
const logger = require('../utils/logger');
const { getAllPostsFromServerLink } = require('../api/getPosts');
const _ = require('lodash');

const postsCtrl = {
  getAllPosts: async (req, res) => {
    try {
      const { tags, sortBy = 'id', direction = 'asc' } = req.query;

      if (tags.replace(/\s/g, '')) {
        const sourceData = await getAllPostsFromServerLink(tags);

        const posts = sourceData.posts;

        // group all posts by authorId
        const groupedData = _.groupBy(posts, 'authorId');
        // merge properties likes, popularity, reads, tags array in the same authorId
        const mergedData = _.map(groupedData, (value, key) => {
          const authorId = key;
          // keep the value of author
          const author = value[0].author;
          const id = value[0].id;
          const likes = _.sumBy(value, 'likes');
          const popularity = _.sumBy(value, 'popularity');
          const reads = _.sumBy(value, 'reads');
          const tags = _.uniq(_.flatten(_.map(value, 'tags')));
          return {
            id,
            author,
            authorId,
            likes,
            popularity,
            reads,
            tags,
          };
        });

        const sortByKeys = Object.keys(mergedData[0]);

        if (sortByKeys.includes(sortBy)) {
          // sort by sortBy and direction
          const sortedData = _.orderBy(mergedData, sortBy, direction);

          return responseServer(
            res,
            statusConstants.SUCCESS_CODE,
            'Get all Posts successfully',
            sortedData
          );
        } else {
          return raiseException(
            res,
            statusConstants.BAD_REQUEST_CODE,
            `sortBy parameter is invalid`
          );
        }
      } else {
        return raiseException(
          res,
          statusConstants.BAD_REQUEST_CODE,
          'The tag parameter is required'
        );
      }
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
