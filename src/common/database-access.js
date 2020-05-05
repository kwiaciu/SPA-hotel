export const databaseAccess = {
  getRooms() {
    // pobiera liste wszystkich pokoi
    return fetch('http://localhost:3000/rooms').then(response => response.json());
  },
  getRoom(id) {
    // pobiera jeden pokoj o zadanym id
    return fetch(`http://localhost:3000/rooms/${id}`).then(response => response.json());
  },
  getTreatments() {
    // pobiera jeden pokoj o zadanym id
    return fetch(`http://localhost:3000/treatments`).then(response => response.json());
  },
  getTreatment(id) {
    // pobiera jeden pokoj o zadanym id
    return fetch(`http://localhost:3000/treatments/${id}`).then(response => response.json())
  },

  getUser(id) {
    return fetch(`http://localhost:3000/users/${id}`).then(response => response.json().then(data => ({
      data: data,
      status: response.status
    })))
  },

  postUser(data) {
    return fetch(`http://localhost:3000/users/`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        return ('Account successfully created ');
      })
      .catch((error) => {
        // console.error('Error:', error);
        console.error('Error:', error);
        return ('Error:', error);
      });
  },


  checkRooms(dates) {
    return fetch(`http://localhost:3000/rooms/`).then(response => response.json()).then(rooms => {
      const roomsOccupiedAtDates = [];
      rooms.forEach(room => {
        const found = room.occupied.some(date => dates.includes(date))
        if (found) {
          roomsOccupiedAtDates.push(room.id)
        }
      });
      return roomsOccupiedAtDates
    })
  },

  checkRoom(id, dates) {
    return fetch(`http://localhost:3000/rooms/${id}`).then(response => response.json()).then(room => {
      const status = room.occupied.some(date => dates.includes(date))
      return status
    })
  }
};
