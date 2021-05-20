describe('Spotlight', () => {
  beforeEach(() => {
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
  })

  it('a movie should be able to be clicked then display a spotlighted version of a movie', () => {

    cy.visit('http://localhost:3000/')
      cy.get('a[href*="694919"]').click()
        .get('h2').contains('Money Plane')
  });

  it('if a user types in the wrong url it redirects back to the home page', () => {
    cy.visit('http://localhost:3000/fgsdfg')
  });

});
