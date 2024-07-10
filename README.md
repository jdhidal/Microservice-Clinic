# Microservice Clinic

The problem is having a separate clinical task system in microservices, this project separates the appointment service, doctors and patients, so if a change is made the other services are not affected.

## project members: 
Diego Hidalgo ,
Kevin Guaña
## Requirements

- [Node.js](https://nodejs.org/) (version 14)
- [Docker](https://www.docker.com/get-started)

 first we have to clone the github repository with the docker-compose file
 
```sh
https://github.com/jdhidal/Microservice-Shop.git
```
We open a terminal in the cloned project and enter the following command

```sh
docker-compose up --build
```
and then the created containers will be automatically executed 
To check the microservices, the following code must be run on the assigned port:

## Doctor service

Open your browser and navigate to [http://localhost:5001/users](http://localhost:5001/users)

On this page you can see the users in json format that are created.


## Patients Service

Open your browser and navigate to [http://localhost:5002/patients](http://localhost:5002/patients).

We open a new terminal and place the following CURL

 ``` sh
    $headers = @{
    "Content-Type" = "application/json"
    }

    $body = @{
    "name" = "John Doe"
    "age" = 30
    "contact" = "123-456-7890"
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "http://localhost:5002/patients" -Method POST -Headers $headers -Body $body
 ```
 And we must observe that a Patient registered successfully message is displayed

 
## Appointment service

Open your browser and navigate to [http://localhost:5003/appointments](http://localhost:5003/appointments).
We open a new terminal and place the following CURL
 ``` sh
    $headers = @{
    "Content-Type" = "application/json"
    }

    $body = @{
    "patientId" = 1
    "doctorId" = 1
    "date" = "2024-07-10"
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "http://localhost:5003/appointments" -Method POST -Headers $headers -Body $body
 ```
And we must observe that a Appointment booked successfully message is displayed
