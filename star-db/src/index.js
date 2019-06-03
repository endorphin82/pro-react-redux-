const url = 'https://swapi.co/api/people/1/';

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource(url)
  .then((body) => console.log(body));

// fetch(url)
//   .then(res => res.json())
//   .then(body => console.log(body));