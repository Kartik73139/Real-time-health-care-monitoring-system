document.addEventListener("DOMContentLoaded", function() {
    // Handle patient registration form submission
    document.getElementById('register-patient-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const patientData = {
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            contact: document.getElementById('contact').value
        };

        fetch('PatientServlet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patientData)
        }).then(response => response.json())
          .then(data => alert("Patient Registered Successfully!"));
    });

    // Handle health data form submission
    document.getElementById('health-data-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const healthData = {
            patient_id: document.getElementById('patient-id').value,
            heart_rate: document.getElementById('heart-rate').value,
            blood_pressure: document.getElementById('blood-pressure').value,
            temperature: document.getElementById('temperature').value,
            oxygen_level: document.getElementById('oxygen-level').value
        };

        fetch('HealthDataServlet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(healthData)
        }).then(response => response.json())
          .then(data => alert("Health Data Submitted Successfully!"));
    });

    // Fetch and display health data for a patient
    fetchHealthData();

    function fetchHealthData() {
        fetch('HealthDataServlet?action=list')
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById('health-data-list');
                list.innerHTML = "";
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `Patient ID: ${item.patient_id}, Heart Rate: ${item.heart_rate}, Blood Pressure: ${item.blood_pressure}, Temp: ${item.temperature}°C, Oxygen: ${item.oxygen_level}%`;
                    list.appendChild(li);
                });
            });
    }
});
