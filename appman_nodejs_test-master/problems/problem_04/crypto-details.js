const Axios = require("axios");
const url = 'https://coinbin.org/'

const cryptoDetails = async (symbols = []) => {
  const promises = symbols.map(async symbol => {
    const coinData = await Axios({
      url: url+symbol,
      method: 'GET'
    })
    return coinData.data
  })
  return await Promise.all(promises)
};

module.exports = { cryptoDetails };

cryptoDetails(['eth', 'xrp']).then(console.log);
