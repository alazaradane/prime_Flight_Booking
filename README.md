# Prime Flight: Flight Booking System

PrimeFlight is a flight booking system designed using a Micro-Service Architecture. It aims to
streamline the process of searching, booking, and managing flight reservations through a set of
specialized microservices. The system enhances user experience by providing reliable and
efficient services while ensuring scalability and maintainability. Each microservice is dedicated
to a specific functionality, allowing for independent development and deployment, which is
crucial for adapting to the dynamic needs of the airline industry.

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

To run Prime Flight locally, follow these steps found on the attached files


[Comprehensive Guide on setup Prime Flight on your machine](https://docs.google.com/document/d/1ZdC436I1vT-BnRntRcEmPKh7Bv-fCZI2bZq5kdjZNGc/edit?usp=sharing)



## Contributing

We welcome contributions to Prime Flight! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
