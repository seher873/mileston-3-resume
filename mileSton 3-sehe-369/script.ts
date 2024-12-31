// dynamic resume mileston 3//

const form = document.getElementById('resumeForm') as HTMLFormElement;
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;

// Resume display elements
const profileImg = document.getElementById('profile') as HTMLImageElement;
const nameElement = document.querySelector('.right-panel #name') as HTMLHeadingElement;
const profileElement = document.getElementById('profil') as HTMLParagraphElement;
const phoneElement = document.querySelector('#contactList #phone') as HTMLLIElement;
const emailElement = document.querySelector('#contactList #email') as HTMLLIElement;
const addressElement = document.querySelector('#contactList #address') as HTMLLIElement;
const educationElement = document.querySelector('.right-panel #education') as HTMLParagraphElement;
const experienceElement = document.querySelector('.right-panel #experience') as HTMLParagraphElement;
const skillsList = document.querySelector('.right-panel #skills') as HTMLUListElement;

// Event listener for the generate button
generateBtn.addEventListener('click', () => {
  // Collect input values
  const nameInput = (document.getElementById('name') as HTMLInputElement).value;
  const profileInput = (document.getElementById('profile') as HTMLTextAreaElement).value;
  const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
  const emailInput = (document.getElementById('email') as HTMLInputElement).value;
  const addressInput = (document.getElementById('address') as HTMLInputElement).value;
  const educationInput = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;

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
    skillsInput.split(',').forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill.trim();
      skillItem.setAttribute('style', 'pointer-events: none;'); // Disable interaction
      skillsList.appendChild(skillItem);
    });
  }

  // Disable all the input fields after generating the resume
const inputs = form.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
inputs.forEach((input) => {
  input.disabled = true;
});

});
