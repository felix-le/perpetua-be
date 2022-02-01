const { axiosInstance } = require('./baseApi');
async function getAllPostsFromServerLink(
  tags,
  sortBy = 'id',
  direction = 'asc'
) {
  if (!tags) {
    const mess = {
      error: 'The tag parameter is required',
    };
    return mess;
  }

  return await axiosInstance.get(
    `?tag=${tags}&sortBy=${sortBy}&direction=${direction}`
  );
}
module.exports = { getAllPostsFromServerLink };
