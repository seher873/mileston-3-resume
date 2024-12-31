// dynamic resume mileston 3//
var form = document.getElementById('resumeForm');
var generateBtn = document.getElementById('generateBtn');
// Resume display elements
var profileImg = document.getElementById('profile');
var nameElement = document.querySelector('.right-panel #name');
var profileElement = document.getElementById('profil');
var phoneElement = document.querySelector('#contactList #phone');
var emailElement = document.querySelector('#contactList #email');
var addressElement = document.querySelector('#contactList #address');
var educationElement = document.querySelector('.right-panel #education');
var experienceElement = document.querySelector('.right-panel #experience');
var skillsList = document.querySelector('.right-panel #skills');
// Event listener for the generate button
generateBtn.addEventListener('click', function () {
    // Collect input values
    var nameInput = document.getElementById('name').value;
    var profileInput = document.getElementById('profile').value;
    var phoneInput = document.getElementById('phone').value;
    var emailInput = document.getElementById('email').value;
    var addressInput = document.getElementById('address').value;
    var educationInput = document.getElementById('education').value;
    var experienceInput = document.getElementById('experience').value;
    var skillsInput = document.getElementById('skills').value;
    // Update resume sections (non-editable)
    nameElement.textContent = nameInput || 'Your Name';
    profileElement.textContent = profileInput || 'Your profile description will appear here.';
    phoneElement.textContent = phoneInput || 'Your phone';
    emailElement.textContent = emailInput || 'Your email';
    addressElement.textContent = addressInput || 'Your address';
    educationElement.textContent = educationInput || 'Your education details';
    experienceElement.textContent = experienceInput || 'Your experience';
    // Update skills section (non-editable)
    skillsList.innerHTML = ''; // Clear existing skills
    if (skillsInput) {
        skillsInput.split(',').forEach(function (skill) {
            var skillItem = document.createElement('li');
            skillItem.textContent = skill.trim();
            skillItem.setAttribute('style', 'pointer-events: none;'); // Disable interaction
            skillsList.appendChild(skillItem);
        });
    }
    // Disable all the input fields after generating the resume
    var inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.disabled = true;
    });
});
