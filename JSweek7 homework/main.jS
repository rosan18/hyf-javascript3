class Movie {
    constructor(title, director) {
      // add your code here
      this.title = title;
      this.director=director;
    }
  
    getTitle() {
      // add your code here
      return this.title;
    }
  
    getDirector() {
      // add your code here
      return this.director();
    }
  
    addStar(star) {
      // add your code here
      this.push(star);

    }
  
    getStars() {
      // add your code here
      return this.star
    }
  
    addWriter(writer) {
      // add your code here
      this.push(writer);
    }
  
    getWriters() {
      // add your code here
      return this.writer;
    }
  
    addRating(rating) {
      // add your code here
      this.push(rating);
    }
  
    getAverageRating() {
      // add your code here
      return this.rating;
    }
  
    // ... Add yours :-) Look to IMDB for inspiration
  }
  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      // add your code here
      this.name= name;
      this.role=role;
      this.dateOfBirth= dateOfBirth;
      this.movie = []
    }
  
    addMovie(movie) {
      // add your code here
      this.movie.append(movie);
    }
  
    getName() {
      // add your code here
      return this.name;
    }
  
    getRole() {
      // add your code here
      return this.role;
    }
  
    getAge() {
      // add your code here
      let newYear =2000
      return newYear-this.dateOfBirth;
    }
  }

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie('The Godfather', 'Pulp fiction');
 
const firstActor = new StaffMember('Marlon Brando','Boss','April 3,1924');
const secondActor = new StaffMember('Al Pacino', 'Comedic', 'April 25,1940');
const thirdActor = new StaffMember('Tim Roth', 'Robber','May 14 1961');
const fourthActor = new StaffMember('Laura lovelace', 'waitress', 'March 23 1957')
myMovie.addStar(firstActor);
myMovie.addStar(secondActor);
myMovie.addStar(thirdActor);
myMovie.addStar(fourthActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);

let div = document.querySelector('div');
myMovie.getStars().map(actor => div.innerHTML += `${actor.getName()} ${actor.getAge()} <br>`);