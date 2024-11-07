const { BinLookup } = require('./lib/main');

(async () => {
    const data = await BinLookup('466160122308');
    console.log(data);
})();