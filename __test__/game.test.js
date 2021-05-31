const Game = require('../src/game').default
const fs = require('fs')

describe('App', () => {
  it('Contains the compiled JavaScript', async (done) => {
    fs.readFile('./public/main.js', 'utf8', (err, data) => {
      expect(err).toBe(null)
      expect(data).toMatchSnapshot()
      done()
    })
  })
})
