// const request = require('supertest');

// describe('Design', () => {
//   beforeEach(() => {
//     jest.resetModules();
//   });

//   describe('create', () => {
//     test('Debe devolver error 500', async () =>{
//       const res = await request("http://localhost:8000")
//         .post('/api/design')
//         .send({});

//       expect(res.status).toBe(500);
//     });
//   })
// })
import { getCountByUser } from '../components/DesignContent'
describe('funciones de design content', () => {
  describe('getCountByUser', () => {
    test('debe devolver un número', () => {
      const result = getCountByUser;
      expect(typeof result).toBe('integer');
    });
  })
});