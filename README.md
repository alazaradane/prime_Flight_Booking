# FlyFinde: Flight Booking System

FlyFinde is a flight booking system implemented using Micro-Service Architecture. It consists of several microservices including Search Service, Booking Service, Authentication Service, Reminder Service, and API Gateway.

## Features

- **Micro-Service Architecture**: Implemented using 5 microservices:
  - Search Service
  - Booking Service
  - Authentication Service
  - Reminder Service
  - API Gateway

- **RabbitMQ Message Queue Service**: Utilized for sending reminders to users. The Reminder Service interacts with RabbitMQ for reliable message delivery.

- **Sequelize Package**: Utilized npm Sequelize package for interacting with SQL databases, ensuring efficient and reliable data storage and retrieval.

## Installation

To run FlyFinde locally, follow these steps:

1. Clone the repository:

git clone https://github.com/shubhamgupta2730/FlyFinder-Flight-Booking-System.git


2. Install dependencies for each microservice:

cd search-service && npm install
cd ../booking-service && npm install
cd ../authentication-service && npm install
cd ../reminder-service && npm install
cd ../api-gateway && npm install


3. Start each microservice:

cd search-service && npm start
cd ../booking-service && npm start
cd ../authentication-service && npm start
cd ../reminder-service && npm start
cd ../api-gateway && npm start


## Contributing

We welcome contributions to FlyFinde! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
