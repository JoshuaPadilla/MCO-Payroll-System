document.getElementById('add-emp').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    window.location.href = 'http://localhost:3000/add?'; // Replace with the page you want to redirect to
});

document.getElementById('new-payroll').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    window.location.href = 'http://localhost:3000/new-payroll'; // Replace with the page you want to redirect to
});


