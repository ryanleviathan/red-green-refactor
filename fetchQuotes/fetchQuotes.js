const request = require('superagent');

const fetchQuotes = async() => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/1');

  return {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image
  };
};

module.exports = {
  fetchQuotes
};