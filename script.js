document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('#about-link');
    const contactLink = document.querySelector('#contact-link');
    const techstackLink = document.querySelector('#techstack-link');

    techstackLink.addEventListener('click', (e) => {
        e.preventDefault();
        const techstackSection = document.querySelector('#techstack');
        techstackSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({ behavior: 'smooth' , block: 'center'});
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        contactSection.scrollIntoView({ behavior: 'smooth' ,block: 'center'});
    });
});