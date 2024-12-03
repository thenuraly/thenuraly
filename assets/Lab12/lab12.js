function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+?\d{7,15}$/;
    return phoneRegex.test(phone);
}

function validateAddress(address) {
    return address.trim().length > 10;
}

function saveData() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const questions = [
        parseInt(document.getElementById('q1').value),
        parseInt(document.getElementById('q2').value),
        parseInt(document.getElementById('q3').value),
        parseInt(document.getElementById('q4').value),
        parseInt(document.getElementById('q5').value),
    ];

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!validateAddress(address)) {
        alert("Address must be at least 10 characters long.");
        return;
    }

    const average = questions.reduce((sum, val) => sum + val, 0) / questions.length;

    const data = {
        firstName,
        lastName,
        email,
        phone,
        address,
        questions,
        average: average.toFixed(2),
    };

    console.log(data);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Average Score:</strong> <span class="${getScoreClass(average)}">${data.average}</span></p>
    `;
    resultsDiv.style.display = 'block';
}

function getScoreClass(score) {
    if (score >= 7.2) {
        return "green";
    } else if (score >= 3.5) {
        return "orange";
    } else {
        return "red";
    }
}

