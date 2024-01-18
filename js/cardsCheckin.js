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

function showNext(stepNum) {
    showStep(stepNum);
}

function showPrevious(stepNum) {
    showStep(stepNum);
}

// Initialize the form with the first step visible


document.addEventListener('DOMContentLoaded', function() {
    showStep(1);
});