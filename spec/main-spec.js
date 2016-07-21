const app = require('../main/app');

describe('running', () => {
   it('it is running', () => {
       expect(app.main()).toBe('testing');
   })
});
