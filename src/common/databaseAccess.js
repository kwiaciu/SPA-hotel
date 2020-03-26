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
    return fetch(`http://localhost:3000/treatments/${id}`).then(response => response.json());
  }
};
