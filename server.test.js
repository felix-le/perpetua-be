const request = require('supertest');
const app = require('./server');

// test GET /api/ping
function removeQuotes(str) {
  // convert JSON to string
  let newStr = JSON.stringify(str);
  return newStr.replace(/\"/g, '');
}

// Test Get /
// describe('GET /', () => {
//   // return 200 Ok and the response should be Welcome to the Perpetua - API, and the content type header should be json
//   it('should return 200 OK and the response should be Welcome to the Perpetua - API, and the content type header should be json', async function () {
//     // eslint-disable-line
//     const response = await request(app).get('/');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toMatch(/json/);
//     expect(response._body).toEqual('Welcome to the Perpetua - API');
//   });
// });

// // Test Get /api
// describe('GET /api', () => {
//   // return 200 Ok and the response should be Welcome to the Perpetua - API, and the content type header should be json
//   it('should return 200 OK and the response should be Welcome to the Perpetua - API, and the content type header should be json', async function () {
//     // eslint-disable-line
//     const response = await request(app).get('/api');
//     expect(response.status).toBe(200);
//     expect(response.headers['content-type']).toMatch(/json/);
//     expect(response._body).toEqual(
//       'There are two routes: /api/posts and /api/testServer - Please notice that the /api/posts route requires a tag parameter'
//     );
//   });
// });

// Test Get /ping
// describe('GET /api/ping', () => {
//   it('should return 200 OK and the response should beTest the server successfully, and the content type header should be json', async function () {
//     // eslint-disable-line
//     try {
//       const response = await request(app)
//         .get('/api/ping')
//         .set('Accept', 'application/json');

//       expect(response.status).toBe(200);
//       expect(response.headers['content-type']).toMatch(/json/);
//       expect(response._body['message']).toEqual('Test the server successfully');
//       expect(removeQuotes(response._body['data'])).toEqual('{success:true}');
//     } catch (error) {
//       const response = await request(app)
//         .get('/api/ping')
//         .set('Accept', 'application/json');
//       expect(response.status).toBe(500);
//       expect(response._body['message']).toEqual('Can not test the server');
//     }
//   });
// });
// Test Get /posts
describe('GET /api/posts', () => {
  it('should return 200 OK and the response should beTest the server successfully, and the content type header should be json', async function () {
    // eslint-disable-line
    try {
      const response = await request(app)
        .get('/api/post')
        .set('Accept', 'application/json');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response._body['message']).toEqual('Test the server successfully');
      expect(removeQuotes(response._body['data'])).toEqual('{success:true}');
    } catch (error) {
      const response = await request(app)
        .get('/api/ping')
        .set('Accept', 'application/json');
      expect(response.status).toBe(500);
      expect(response._body['message']).toEqual('Can not test the server');
    }
  });
});
