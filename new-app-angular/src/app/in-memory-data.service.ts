import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Delhi' , lat: 28.6139 , lng: 77.2090 , desc: 'Capital of India'  },
      { id: 2, name: 'Mumbai' , lat: 19.0760	, lng: 72.8777 , desc: 'City in India'},
      { id: 3, name: 'Moscow' , lat: 55.75, lng: 37.62 , desc: 'Capital of Russia'	},
      { id: 4, name: 'Tokyo	' , lat: 35.6895	, lng:139.6917 , desc: 'Capital of Japan' },
      { id: 5, name: 'New York' , lat:40.7128 , lng:-74.0060 , desc: 'City in USA'	},
      { id: 6, name: 'London' , lat:	51.5074	, lng: -0.1278 , desc: 'Capital of England'},
      { id: 7, name: 'Singapore	' , lat: 1.3521	, lng: 103.8598 , desc: 'Capital of Singapore'},
      { id: 8, name: 'Los Angeles' , lat: 34.0522	, lng:-118.2437 , desc: 'City in USA' },
      { id: 9, name: 'Cape Town' , lat: -33.9249		, lng: 18.4241 , desc: 'Capital of South Africa' },
      { id: 10, name: 'Madrid' , lat: 	40.4168	, lng: -3.7038 , desc: 'Capital of Spain'}
    ];
    return {heroes};
  }
}