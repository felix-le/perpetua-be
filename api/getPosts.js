const { axiosInstance } = require('./baseApi');
async function getAllPostsFromServerLink(tag) {
  if (!tag) {
    const mess = {
      error: 'The tag parameter is required',
    };
    return mess;
  }
  return await axiosInstance.get(`?tag=${tag}`);
}
module.exports = { getAllPostsFromServerLink };
