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
