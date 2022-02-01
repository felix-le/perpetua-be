const { raiseException, responseServer } = require('../utils/response');
const { statusConstants } = require('../constants/status.constants');

const logger = require('../utils/logger');

const testServerCtrl = {
  getServerTest: async (req, res) => {
    try {
      const mockData = {
        success: true,
      };
      logger.info(mockData);

      return responseServer(
        res,
        statusConstants.SUCCESS_CODE,
        'Test the server successfully',
        mockData
      );
    } catch (error) {
      logger.error(error);
      return raiseException(
        res,
        statusConstants.SERVER_ERROR_CODE,
        'Can not test the server'
      );
    }
  },
};

module.exports = testServerCtrl;
