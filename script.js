function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Button hover sound could be added here
        });
        
        button.addEventListener('click', function() {
            // Button click sound could be added here
            this.blur();
        });
    });
});