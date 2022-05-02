const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSStats = {};
  domains.map((domain) => {
    let nameDomain = '';
    let newArray = domain.split('.')
    newArray = newArray.reverse();

    for (let i = 0; i < newArray.length; i++) {
      nameDomain += `.${newArray[i]}`;

      if (DNSStats[nameDomain] === undefined) {
        DNSStats[nameDomain] = 1;
      } else {
        DNSStats[nameDomain]++;
      }
    }
  });
  return DNSStats;
}

module.exports = {
  getDNSStats
};
