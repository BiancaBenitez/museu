const promessa = document.querySelector('.promessas');
const corporativos = document.querySelector('.corporativo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove('show')
        }
    });
}, {
    threshold: 0.5 
});

observer.observe(promessa);
observer.observe(corporativos);


document.querySelector('a[href="#contato"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contato').scrollIntoView({
        behavior: 'smooth'
    });
});


