function showStep(stepNum) {
    var steps = document.getElementsByClassName('step-card');
    var stepIndicators = document.getElementsByClassName('step');

    for (var i = 0; i < steps.length; i++) {
        if(steps[i] && stepIndicators[i]) {
            steps[i].classList.remove('slide-in', 'active-step');
            steps[i].classList.add('slide-out');
            stepIndicators[i].classList.remove('active-step-indicator');
        }
    }

    var currentStep = document.getElementById('step-' + stepNum);
    var currentIndicator = document.getElementById('step-indicator-' + stepNum);
    currentStep.classList.remove('slide-out');
    currentStep.classList.add('slide-in', 'active-step');
    currentIndicator.classList.add('active-step-indicator');
}

function showSummary() {
    var birthdate = document.getElementById('birthdateInput').value;
    var gender = document.getElementById('genderInput').value;
    var phone = document.getElementById('phoneInput').value;
    var entrepreneurshipTime = document.getElementById('entrepreneurshipTimeInput').value;
    var difficultAspect = document.getElementById('difficultAspectInput').value;
    var interestArea = document.getElementById('topicSelect').value;

    var summaryHtml = `
        <p><strong>Fecha de Nacimiento:</strong> ${birthdate}</p>
        <p><strong>Género:</strong> ${gender}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Tiempo emprendiendo:</strong> ${entrepreneurshipTime}</p>
        <p><strong>Aspecto difícil de emprender:</strong> ${difficultAspect}</p>
        <p><strong>Área de interés:</strong> ${interestArea}</p>
    `;

    document.getElementById('summary').innerHTML = summaryHtml;
    showStep(5);
}

function showNext(stepNum) {
    showStep(stepNum);
    if(stepNum == 5) {
    showSummary()
    }
}

function showPrevious(stepNum) {
    showStep(stepNum);
}

// Initialize the form with the first step visible


document.addEventListener('DOMContentLoaded', function() {
    showStep(1);
});