
describe('Dashboard', () => {

  it('it should display the data provided as movie cards', () => {
    const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    cy.intercept('GET', `${baseURL}`, {
      'movies': [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.666666666666667,
      "release_date": "2020-09-29"
    },
    {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 4.909090909090909,
      "release_date": "2020-09-04"
    },
    {
      "id": 718444,
      "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
      "title": "Rogue",
      "average_rating": 5.428571428571429,
      "release_date": "2020-08-20"
    },
    ]
    })
    cy.visit('http://localhost:3000/')
      .get('h1').contains('Rancid')
      .get('h1').contains('Tomatillos')
      .get('article')

  });

  it('it should display Loading if no movies are retrieved', () => {
    cy.visit('http://localhost:3000/')
      .get('h2').contains('Loading')
  });

  it('it should display an error of something went wrong when something goes wrong with the host', () => {
    const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    cy.intercept('GET', `${baseURL}`, {})
      .visit('http://localhost:3000/')
      .get('h3').contains('Something went wrong')
  });

});
