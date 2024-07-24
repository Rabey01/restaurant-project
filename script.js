document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const content = document.getElementById('content');

    const profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = './logo1.jpg'; // Ensure the path is correct
    header.prepend(profilePic);

    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';

    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://www.facebook.com/';
    facebookLink.target = '_blank';
    facebookLink.className = 'social-icon';
    const facebookIcon = document.createElement('img');
    facebookIcon.src = 'fbIcon.webp';
    facebookIcon.alt = 'Facebook';
    facebookLink.appendChild(facebookIcon);
    socialIcons.appendChild(facebookLink);

    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://www.instagram.com/';
    instagramLink.target = '_blank';
    instagramLink.className = 'social-icon';
    const instagramIcon = document.createElement('img');
    instagramIcon.src = 'instaLogo.webp';
    instagramIcon.alt = 'Instagram';
    instagramLink.appendChild(instagramIcon);
    socialIcons.appendChild(instagramLink);

    const twitterLink = document.createElement('a');
    twitterLink.href = 'https://www.twitter.com/';
    twitterLink.target = '_blank';
    twitterLink.className = 'social-icon';
    const twitterIcon = document.createElement('img');
    twitterIcon.src = 'twitterLogo1.png';
    twitterIcon.alt = 'Twitter';
    twitterLink.appendChild(twitterIcon);
    socialIcons.appendChild(twitterLink);

    header.appendChild(socialIcons);

    function homeControls() {
        content.innerHTML = '';


        const headlinePic = document.createElement('div');
        headlinePic.className = 'headline-pic';
        const homePic = document.createElement('img');
        homePic.className = 'home-pic';
        homePic.src = './Opulent Dining Awaits 2.png'; // Ensure the path is correct
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = "Step into the luxurious world of Rabey's, where every meal is a celebration of taste and elegance. Our chefs blend tradition with innovation, using only the finest ingredients to create a menu that delights and surprises. In a setting that radiates sophistication, Rabey's offers a dining experience that is both intimate and grand. Join us and indulge in the unparalleled luxury of Rabey's.";
        const quotes = document.createElement('img');
        quotes.className = 'quotes';
        quotes.src = 'double-quotes.png';

        headlinePic.appendChild(homePic);
        content.appendChild(headlinePic);
        content.appendChild(description);
        description.appendChild(quotes);

        const imgGal = document.createElement('div');
        imgGal.className = 'image-gallery';

        // Create an array to hold image URLs
        const imageUrls = [
            'img1/1.jpg',
            'img1/2.jpg',
            'img1/3.jpg',
            'img1/4.jpg',
            'img1/5.jpg',
            'img1/6.jpg'
        ];

        // Initialize current image index
        let currentImageIndex = 0;

        // Function to update active image
        function updateActiveImage() {
            const images = imgGal.querySelectorAll('img');
            images.forEach((img, index) => {
                if (index === currentImageIndex) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        }

        // Create initial image elements
        imageUrls.forEach((url, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = `Image ${index + 1}`;
            if (index === 0) {
                imgElement.classList.add('active');
            }
            imgGal.appendChild(imgElement);
        });

        // Create navigation buttons container
        const navButtonsContainer = document.createElement('div');
        navButtonsContainer.className = 'nav-buttons';

        // Create navigation buttons
        const leftBtn = document.createElement('button');
        leftBtn.className = 'nav-btn left';
        leftBtn.textContent = '<';
        leftBtn.addEventListener('click', () => navigateGallery(-1));

        const rightBtn = document.createElement('button');
        rightBtn.className = 'nav-btn right';
        rightBtn.textContent = '>';
        rightBtn.addEventListener('click', () => navigateGallery(1));

        navButtonsContainer.appendChild(leftBtn);
        navButtonsContainer.appendChild(rightBtn);

        content.appendChild(imgGal);
        content.appendChild(navButtonsContainer);

        function navigateGallery(direction) {
            const images = imgGal.querySelectorAll('img');
            let newIndex = currentImageIndex + direction;
        
            // Ensure newIndex wraps around within the imageUrls array length
            if (newIndex < 0) {
                newIndex = images.length - 1;
            } else if (newIndex >= images.length) {
                newIndex = 0;
            }
        
            // Fade out current image
            images[currentImageIndex].style.opacity = 0;
        
            // Fade in new image after a short delay
            setTimeout(() => {
                images[newIndex].style.opacity = 1; // Fade in new image
                currentImageIndex = newIndex;
        
                // Ensure only the active image is visible
                images.forEach((img, index) => {
                    if (index === currentImageIndex) {
                        img.classList.add('active');
                    } else {
                        img.classList.remove('active');
                    }
                });
            }, 300); // Adjust the delay time (in milliseconds) as needed
        }
        
        // Function to update active image initially
        updateActiveImage();

        const extraBtn = document.createElement('button');
        extraBtn.className = "extra-menu";
        extraBtn.textContent = "Explore More Dishes here";

        content.appendChild(extraBtn);

        extraBtn.addEventListener('click', ()=>{
            location.href = 'menu/menu.html';
        });
    }
    function loadContactPage() {
        fetch('contact/contact.html')
            .then(response => response.text())
            .then(data => {
                // Check if the contact page is already in the DOM
                if (!document.getElementById('uniqueContactPage')) {
                    const content = document.getElementById('content');
                    content.innerHTML += data; // Append contact page HTML instead of replacing
    
                    // Reattach the event listeners after injecting the HTML
                    document.getElementById('uniqueCloseButton').addEventListener('click', function() {
                        closeContactPage();
                    });
                }
    
                // Show the contact page with transition
                const contactPage = document.getElementById('uniqueContactPage');
                setTimeout(() => {
                    contactPage.style.right = '0';
                }, 10); // Timeout to ensure the element is in the DOM before transition
    
                document.addEventListener('click', outsideClickListener);
            })
            .catch(error => {
                console.error('Error loading contact page:', error);
            });
    }
    
    function closeContactPage() {
        const contactPage = document.getElementById('uniqueContactPage');
        contactPage.style.right = '-30%';
        document.removeEventListener('click', outsideClickListener);
    
        // Remove the contact page from DOM after transition
        setTimeout(() => {
            contactPage.remove();
        }, 500); // Duration matches the CSS transition time
    }

    function outsideClickListener(event) {
        const contactPage = document.getElementById('uniqueContactPage');
        const button = document.getElementById('contact-btn');
        if (!contactPage.contains(event.target) && !button.contains(event.target)) {
            closeContactPage();
        }
    }
    
    document.getElementById('home-btn').addEventListener('click', homeControls);
    document.getElementById('menu-btn').addEventListener('click', () => {
        location.href = 'menu/menu.html';
    });
    document.getElementById('contact-btn').addEventListener('click', loadContactPage);
    homeControls();
});
