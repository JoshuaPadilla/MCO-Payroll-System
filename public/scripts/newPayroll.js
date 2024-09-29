

document.getElementById('pay-back').addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = 'http://localhost:3000';
});

const baseSalaryInput = document.getElementById('baseSalary');
const hoursWorkedInput = document.getElementById('hoursWorked');
const OT = document.getElementById('hoursWorked')
const grossPayInput = document.getElementById('grossPay');
const taxInput = document.getElementById('tax');
const netPayInput = document.getElementById('netPay');

baseSalaryInput.addEventListener('input', calculatePayroll);
hoursWorkedInput.addEventListener('input', calculatePayroll);

function calculatePayroll() {
    // Get base salary and hours worked from input
    const baseSalary = parseFloat(baseSalaryInput.value) || 0;
    const hoursWorked = parseFloat(hoursWorkedInput.value) || 0;

    // Example formula for gross pay (base salary * hours worked)
    const grossPay = baseSalary * hoursWorked;

    // Example tax rate (10% of gross pay)
    const tax = grossPay * 0.10;

    // Net pay is gross pay minus tax
    const netPay = grossPay - tax;

    // Update the corresponding fields in the form
    grossPayInput.value = grossPay.toFixed(2);
    taxInput.value = tax.toFixed(2);
    netPayInput.value = netPay.toFixed(2);
}