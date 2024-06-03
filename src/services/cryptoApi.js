const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'ad905b7620msh4160c6227a9ae3fp1eb987jsn50bab84549f2',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};