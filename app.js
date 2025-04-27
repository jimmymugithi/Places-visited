document.addEventListener('DOMContentLoaded', function() {

    const placesContainer = document.getElementById('places-container');
    const addPlaceBtn = document.getElementById('add-place-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const placeForm = document.getElementById('place-form');

    const initialPlaces = [
      new Place('Paris', ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'], 'August 2022', 'Beautiful city with amazing architecture'),
      new Place('Tokyo', ['Shibuya Crossing', 'Tokyo Tower', 'Senso-ji Temple'], 'April 2021', 'Incredible food and culture'),
      new Place('New York', ['Statue of Liberty', 'Central Park', 'Times Square'], 'December 2023', 'The city that never sleeps')
    ];
  

    initialPlaces.forEach(place => {
      placesContainer.appendChild(place.createCard());
    });
  
   
    addPlaceBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    
    placeForm.addEventListener('submit', function(e) {
      e.preventDefault();
     
      const location = document.getElementById('location').value;
      const landmarks = document.getElementById('landmarks').value;
      const timeOfYear = document.getElementById('timeOfYear').value;
      const notes = document.getElementById('notes').value;
      
    
      const newPlace = new Place(location, landmarks, timeOfYear, notes);
      
   
      placesContainer.appendChild(newPlace.createCard());
      
     
      placeForm.reset();
      modal.style.display = 'none';
    });
  });