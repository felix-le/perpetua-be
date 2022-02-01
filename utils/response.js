function responseServer(response, statusCode, message, data) {
  const responseData = {
    statusCode: statusCode,
    message,
  };

  if (data) {
    responseData.data = data;
  }

  response.status(statusCode).json(responseData);
}

function raiseException(response, statusCode, message, error) {
  const excetionBody = {
    statusCode: statusCode,
    message,
  };
  if (error) {
    excetionBody.error = error;
  }
  return response.status(statusCode).json(excetionBody);
}

module.exports = { responseServer, raiseException };
