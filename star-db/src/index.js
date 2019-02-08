const url = 'https://swapi.co/api/people/14444/';

const getResource = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Cloud not fetch ${url},`
      + ` recieved ${res.status}`)
  }
  const body = await res.json();
  return body;
};

getResource(url)
  .then((body) => console.log(body))
  .catch(err => console.log('Could not fetch', err))

// fetch(url)
//   .then(res => res.json())
//   .then(body => console.log(body));