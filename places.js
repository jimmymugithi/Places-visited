function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = Array.isArray(landmarks) ? landmarks : landmarks.split(',').map(item => item.trim());
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  

  Place.prototype.getDetails = function() {
    return {
      location: this.location,
      landmarks: this.landmarks,
      timeOfYear: this.timeOfYear,
      notes: this.notes
    };
  };
  

  Place.prototype.addLandmark = function(landmark) {
    this.landmarks.push(landmark);
  };
  

  Place.prototype.updateNotes = function(newNotes) {
    this.notes = newNotes;
  };
  

  Place.prototype.createCard = function() {
    const card = document.createElement('div');
    card.className = 'place-card';
    
    const details = this.getDetails();
    
    card.innerHTML = `
      <h2>${details.location}</h2>
      <p><strong>Visited:</strong> ${details.timeOfYear}</p>
      <p><strong>Landmarks:</strong></p>
      <ul class="landmarks-list">
        ${details.landmarks.map(landmark => `<li>${landmark}</li>`).join('')}
      </ul>
      <p><strong>Notes:</strong> ${details.notes || 'No notes'}</p>
    `;
    
    return card;
  };