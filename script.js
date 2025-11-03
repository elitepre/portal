document.addEventListener('DOMContentLoaded', function() {
const withdrawBtn = document.getElementById('withdrawBtn');
const withdrawalForm = document.getElementById('withdrawalForm');
const cancelWithdrawal = document.getElementById('cancelWithdrawal');
const withdrawalRequestForm = document.getElementById('withdrawalRequestForm');
const withdrawalModal = new bootstrap.Modal(document.getElementById('withdrawalModal'));
const detailToggle = document.getElementById('detailToggle');
const chartLine = document.querySelector('.chart-line');

// Show withdrawal form when Withdraw button is clicked
withdrawBtn.addEventListener('click', function() {
withdrawalForm.style.display = 'block';
withdrawalForm.scrollIntoView({ behavior: 'smooth' });
});

// Hide withdrawal form when Cancel button is clicked
cancelWithdrawal.addEventListener('click', function() {
withdrawalForm.style.display = 'none';
});

// Handle form submission
withdrawalRequestForm.addEventListener('submit', function(e) {
e.preventDefault();

// Validate form
const fullName = document.getElementById('fullName').value;
const bankName = document.getElementById('bankName').value;
const accountNumber = document.getElementById('accountNumber').value;
const routingNumber = document.getElementById('routingNumber').value;
const swiftCode = document.getElementById('swiftCode').value;
const withdrawalAmount = document.getElementById('withdrawalAmount').value;

if (!fullName || !bankName || !accountNumber || !routingNumber || !swiftCode || !withdrawalAmount) {
alert('Please fill in all fields');
return;
}

// Show confirmation modal
withdrawalModal.show();

// Reset form
withdrawalRequestForm.reset();
document.getElementById('fullName').value = 'Doretha Perry';
withdrawalForm.style.display = 'none';
});

// Toggle detailed view
detailToggle.addEventListener('change', function() {
const statsContainer = document.querySelector('.stats-container');
const recentTransactions = document.querySelector('.recent-transactions');

if (this.checked) {
statsContainer.style.display = 'flex';
recentTransactions.style.display = 'block';
chartLine.style.opacity = '1';
} else {
statsContainer.style.display = 'none';
recentTransactions.style.display = 'none';
chartLine.style.opacity = '0.5';
}
});

// Add animation to balance display
const balanceDisplay = document.querySelector('.balance-display');
setInterval(() => {
balanceDisplay.classList.toggle('pulse');
}, 4000);

// Simulate chart animation
setTimeout(() => {
chartLine.style.transform = 'translateY(0)';
chartLine.style.opacity = '1';
}, 500);
});
