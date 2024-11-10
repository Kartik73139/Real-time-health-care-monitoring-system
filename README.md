Real-Time Health Monitoring System
This is a real-time health monitoring system built using Java, MySQL, HTML, CSS, and JavaScript. The system allows healthcare professionals to register patients, monitor vital signs (such as heart rate, blood pressure, temperature, and oxygen levels), and display real-time health data.

Features
Patient Registration: Healthcare professionals can register patient information such as name, date of birth, gender, and contact number.
Real-Time Health Monitoring: Health data like heart rate, blood pressure, temperature, and oxygen levels are recorded and stored.
Data Storage: All the health monitoring data is stored in a MySQL database for future reference.
Real-Time Display: The system allows users to view the latest health data for each patient in real-time.
Technologies Used
Backend: Java Servlets, JDBC (MySQL)
Frontend: HTML, CSS, JavaScript
Database: MySQL
API: RESTful APIs for communication between frontend and backend
Libraries: Gson for JSON handling
Requirements
Prerequisites
Java Development Kit (JDK) 8 or higher
Apache Tomcat for servlet deployment
MySQL Database running locally or remotely
IDE: Eclipse or IntelliJ IDEA (or any Java IDE)
MySQL JDBC Driver for Java

Setting Up the Project
Step 1: Clone the Repository
   bash
   Copy code :
   git clone https://github.com/your-username/real-time-health-monitoring-system.git
   cd real-time-health-monitoring-system
   
Step 2: Set Up MySQL Database
  Create a MySQL database called health_monitoring and run the following SQL script to set up the tables:
  sql
  Copy code

Step 3: Configure Database Connection
  In the project, configure the MySQL connection by editing the DBConnection.java file with your MySQL database credentials:

Step 4: Deploy the Project
Open the project in your IDE (Eclipse/IntelliJ).
Add the MySQL JDBC driver JAR to the project’s build path.
Deploy the project to Apache Tomcat.
Access the system in your browser via http://localhost:8080/real-time-health-monitoring-system/index.html.

API Endpoints
1. Register Patient
URL: /PatientServlet
Method: POST
Request Body (JSON):
json
Copy code
Response: Returns a success message if the patient is registered successfully.

2. Submit Health Data
 URL: /HealthDataServlet
 Method: POST
 Request Body (JSON):
 json
 Copy code
 {
  "patient_id": 1,
  "heart_rate": 75,
  "blood_pressure": "120/80",
  "temperature": 36.7,
  "oxygen_level": 98.0
 }
Response: Returns a success message if health data is successfully submitted.

3. Fetch Health Data
URL: /HealthDataServlet?action=list
Method: GET
Response (JSON):
json
Copy code

[
  {
    "patient_id": 1,
    "heart_rate": 75,
    "blood_pressure": "120/80",
    "temperature": 36.7,
    "oxygen_level": 98.0,
    "recorded_at": "2024-11-10T12:30:00"
  },
  ...
]


Here’s an example of what you can include in the README.md file for your Real-Time Health Monitoring System project on GitHub:

Real-Time Health Monitoring System
This is a real-time health monitoring system built using Java, MySQL, HTML, CSS, and JavaScript. The system allows healthcare professionals to register patients, monitor vital signs (such as heart rate, blood pressure, temperature, and oxygen levels), and display real-time health data.

Features
Patient Registration: Healthcare professionals can register patient information such as name, date of birth, gender, and contact number.
Real-Time Health Monitoring: Health data like heart rate, blood pressure, temperature, and oxygen levels are recorded and stored.
Data Storage: All the health monitoring data is stored in a MySQL database for future reference.
Real-Time Display: The system allows users to view the latest health data for each patient in real-time.
Technologies Used
Backend: Java Servlets, JDBC (MySQL)
Frontend: HTML, CSS, JavaScript
Database: MySQL
API: RESTful APIs for communication between frontend and backend
Libraries: Gson for JSON handling
Requirements
Prerequisites
Java Development Kit (JDK) 8 or higher
Apache Tomcat for servlet deployment
MySQL Database running locally or remotely
IDE: Eclipse or IntelliJ IDEA (or any Java IDE)
MySQL JDBC Driver for Java
Setting Up the Project
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/your-username/real-time-health-monitoring-system.git
cd real-time-health-monitoring-system
Step 2: Set Up MySQL Database
Create a MySQL database called health_monitoring and run the following SQL script to set up the tables:
sql
Copy code
CREATE DATABASE health_monitoring;

USE health_monitoring;

CREATE TABLE patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_of_birth DATE,
    gender VARCHAR(10),
    contact_number VARCHAR(15)
);

CREATE TABLE health_data (
    data_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    heart_rate INT,
    blood_pressure VARCHAR(20),
    temperature DECIMAL(5, 2),
    oxygen_level DECIMAL(5, 2),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);
Step 3: Configure Database Connection
In the project, configure the MySQL connection by editing the DBConnection.java file with your MySQL database credentials:
java
Copy code
private static final String URL = "jdbc:mysql://localhost:3306/health_monitoring";
private static final String USERNAME = "your-username";
private static final String PASSWORD = "your-password";
Step 4: Deploy the Project
Open the project in your IDE (Eclipse/IntelliJ).
Add the MySQL JDBC driver JAR to the project’s build path.
Deploy the project to Apache Tomcat.
Access the system in your browser via http://localhost:8080/real-time-health-monitoring-system/index.html.
API Endpoints
1. Register Patient
URL: /PatientServlet
Method: POST
Request Body (JSON):
json
Copy code
{
  "first_name": "John",
  "last_name": "Doe",
  "dob": "1980-01-01",
  "gender": "Male",
  "contact": "1234567890"
}
Response: Returns a success message if the patient is registered successfully.
2. Submit Health Data
URL: /HealthDataServlet
Method: POST
Request Body (JSON):
json
Copy code
{
  "patient_id": 1,
  "heart_rate": 75,
  "blood_pressure": "120/80",
  "temperature": 36.7,
  "oxygen_level": 98.0
}
Response: Returns a success message if health data is successfully submitted.
3. Fetch Health Data
URL: /HealthDataServlet?action=list
Method: GET
Response (JSON):
json
Copy code
[
  {
    "patient_id": 1,
    "heart_rate": 75,
    "blood_pressure": "120/80",
    "temperature": 36.7,
    "oxygen_level": 98.0,
    "recorded_at": "2024-11-10T12:30:00"
  },
  ...
]



Folder Structure
sql
Copy code
/real-time-health-monitoring-system
|-- /WebContent
|   |-- index.html
|   |-- styles.css
|   |-- app.js
|-- /src
|   |-- /com/yourapp
|       |-- DBConnection.java
|       |-- PatientServlet.java
|       |-- HealthDataServlet.java
|       |-- Patient.java
|       |-- HealthData.java
|-- /lib
|   |-- mysql-connector-java.jar
|-- web.xml


Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow the below guidelines:

Fork the project.
Clone the forked repository to your local machine.
Create a new branch for your feature or bug fix.
Commit your changes and push them to your forked repository.
Open a pull request with a clear description of your changes.
