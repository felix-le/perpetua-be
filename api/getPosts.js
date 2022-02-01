const { axiosInstance } = require('./baseApi');
async function getAllPostsFromServerLink(
  tag,
  sortBy = 'id',
  direction = 'asc'
) {
  if (!tag) {
    const mess = {
      error: 'The tag parameter is required',
    };
    return mess;
  }
  return await axiosInstance.get(
    `?tag=${tag}&sortBy=${sortBy}&direction=${direction}`
  );
}
module.exports = { getAllPostsFromServerLink };
