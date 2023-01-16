const request = require('supertest');

describe('Design', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('create', () => {
    test('Debe devolver error 500', async () =>{
      const res = await request("http://localhost:8000")
        .post('/api/design')
        .send({});

      expect(res.status).toBe(500);
    });
  })
})