document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content1');

    const starters = [
        {
            name: "Creole Soul Chicken",
            description: "Skewered soy chicken charbroiled and marinated in coconut curry seasoning. Served with peanut chili dressing.",
            price: "$12.00",
            image: "StartersImg/strs1.webp"
        },
        {
            name: "Chicken Satay",
            description: "Our signature soy chicken nuggets panko-breaded with Cajun and rosemary seasoning and fried. Served with our hickory-smoked vidalia dressing.",
            price: "$12.00",
            image: "StartersImg/strs2.webp"
        },
        {
            name: "Grilled Bourbon Chicken",
            description: "Jerk-marinated soy chicken grilled over an open fire. Served with a side of sweet chili sauce.",
            price: "$12.00",
            image: "StartersImg/strs3.webp"
        },
        {
            name: "Chicken and Fries",
            description: "Two fried soy drumsticks from our southern fried chicken with french fries and a side of BBQ sauce.",
            price: "$12.00",
            image: "StartersImg/strs4.webp"
        },
        {
            name: "Roti Bread",
            description: "Indian flatbread",
            price: "$4.00",
            image: "StartersImg/strs5.webp"
        },
        {
            name: "Spring Rolls",
            description: "Two fried vegan rolls filled with cabbage, carrots and mushroom. Served with vegan duck sauce.",
            price: "$7.00",
            image: "StartersImg/strs7.webp"
        },
        {
            name: "Curry Wings",
            description: "Soy chicken drumsticks and potatoes tossed in a sweet coconut curry sauce.",
            price: "$16.00",
            image: "StartersImg/strs6.webp"
        }
    ];

    const sandwiches = [
        {
            name: "Bamburger",
            description: "Vegan soy beef burger marinated and grilled. Topped with lettuce, tomato, pickles, caramelized red onions and vegan mayo on a sesame seed bun.",
            price: "$10.00",
            image: "SandwichesImg/dish1.webp"
        },
        {
            name: "Chicken Cutlet Sandwich",
            description: "Two breaded fried soy chicken cutlets with dijon mustard, vegan mayo, lettuce and tomato. Served on ciabatta bread with fries or salad.",
            price: "$15.00",
            image: "SandwichesImg/dish2.webp"
        },
        {
            name: "Soul Chicken Sandwich",
            description: "Panko-breaded fried soy chicken nuggets with vegan mayo and vidalia dressing, lettuce and tomato. Served on a ciabatta roll with fries or salad.",
            price: "$15.00",
            image: "SandwichesImg/dish5.webp"
        },
        {
            name: "Chicken Gyro",
            description: "Grilled lemon herb soy chicken topped with lettuce, diced tomatoes, red onions, cucumber and vegan tahini sauce on pita bread. Served with fries or salad.",
            price: "$16.00",
            image: "SandwichesImg/dish3.webp"
        },
        {
            name: "Breakfast Sandwich",
            description: "Two organic vegan eggs on ciabatta bread with cheddar cheese. Choice of vegan sausage patties or tempeh bacon. Side of tater tots.",
            price: "$15.00",
            image: "SandwichesImg/dish4.webp"
        }
    ];

    const mainCourse = [
        {
            name: "Citrus Beef",
            description: "Citrus soy beef stir-fried with broccoli, red and yellow peppers, zucchini and yellow squash. Served with brown or white rice.",
            price: "$18.00",
            image: "MainCourseImg/mc1.webp"
        },
        {
            name: "Southern Fried Chicken",
            description: "Herb-breaded soy chicken and two drumsticks served with your choice of 2 sides.",
            price: "$22.00",
            image: "MainCourseImg/mc2.webp"
        },
        {
            name: "Butterfly Soy Chops",
            description: "Lightly breaded soy pork chops topped with roasted apples and raisins. Served with sautéed collard greens with soy ham and garlic mashed potatoes with gravy.",
            price: "$20.00",
            image: "MainCourseImg/mc3.webp"
        },
        {
            name: "Thai Beef Curry",
            description: "Massaman sweet coconut milk curry with a zip. Shredded soy beef simmered with slow cooked potatoes, carrots and green beans. Served with white or brown rice.",
            price: "$18.00",
            image: "MainCourseImg/mc4.webp"
        },
        {
            name: "Sizzling Pepper Steak Platter",
            description: "Black pepper soy steak sautéed with mushrooms and red and green peppers on a hot plate. Topped with fried onion rings. Served with a side of white or brown rice.",
            price: "$22.00",
            image: "MainCourseImg/mc5.webp"
        },
        {
            name: "Steak and Potatoes",
            description: "Vegan soy steak served with vegan buttered fingerling potatoes and roasted garlic French beans topped with sliced almonds.",
            price: "$18.00",
            image: "MainCourseImg/mc6.webp"
        },
        {
            name: "Sweet and Sour Chicken",
            description: "Battered soy chicken sautéed with onions, pineapples, lychees, carrots, green and red bell peppers. Served with white or brown rice.",
            price: "$18.00",
            image: "MainCourseImg/mc7.webp"
        },
        {
            name: "Chicken Parmesan",
            description: "Breaded soy chicken cutlets topped with vegan NUMU mozzarella cheese and a tomato basil marinara sauce. Served with a side of garlic toast.",
            price: "$17.00",
            image: "MainCourseImg/mc8.webp"
        },
        {
            name: "Barbecue Ribs",
            description: "Flame-grilled soy pork ribs served with a side of steamed carrots, broccoli, snap peas, garlic mashed potatoes and gravy.",
            price: "$18.00",
            image: "MainCourseImg/mc9.webp"
        },
        {
            name: "Mango Chicken",
            description: "Slices of mango, grilled soy chicken, red onions, red and green bell peppers sautéed in a mildly spicy citrus sauce served with a side of white or brown rice.",
            price: "$18.00",
            image: "MainCourseImg/mc10.webp"
        }
    ];

    const noodlesAndPasta = [
        {
            name: "Teriyaki Chicken Bowl",
            description: "Vegan pasta stir-fried with broccoli, snap peas, carrots, zucchini, teriyaki chicken and topped with sesame seeds.",
            price: "$18.00",
            image: "NoodlesPastaImg/dish1.webp"
        },
        {
            name: "Spaghetti and Meatballs",
            description: "Soy meatballs over a bed of pasta smothered in our special marinara sauce and served with garlic toast.",
            price: "$15.00",
            image: "NoodlesPastaImg/dish2.webp"
        },
        {
            name: "Veggie Lo Mein",
            description: "Vegan noodles sautéed with zucchini, squash, snap peas, carrots and broccoli.",
            price: "$15.00",
            image: "NoodlesPastaImg/dish3.webp"
        },
        {
            name: "Mac and Cheese",
            description: "Elbow macaroni with melted vegan cheddar cheese.",
            price: "$15.00",
            image: "NoodlesPastaImg/dish4.webp"
        },
        {
            name: "Rigatoni Bolognese",
            description: "Rigatoni pasta tossed in a slow cooked sauce of tomatoes, minced vegan soy beef and herbs.",
            price: "$18.00",
            image: "NoodlesPastaImg/dish5.webp"
        }
    ];

    const desserts = [
        {
            name: "Coconut Custard Cake",
            description: "Tahitian vanilla bean cake filled with whipped coconut custard and coated in toasted coconut.",
            price: "$9.00",
            image: "DessertsImg/dessert1.webp"
        },
        {
            name: "White Chocolate Raspberry Cheesecake",
            price: "$10.00",
            image: "DessertsImg/dessert2.webp"
        },
        {
            name: "Unicorn Confetti Cake",
            description: "Tahitian vanilla bean cake with bursts of rainbow sprinkles baked in light and fluffy vanilla frosting. Finished with light and fluffy vanilla frosting and rainbow sprinkles.",
            price: "$9.00",
            image: "DessertsImg/dessert3.webp"
        },
        {
            name: "Brownie Cheesecake",
            price: "$10.00",
            image: "DessertsImg/dessert4.webp"
        },
        {
            name: "Peanut Butta Heaven",
            description: "Alternating layers of chocolate and vanilla cake filled with peanut butter mousse. Finished with peanut butter mousse, encased in Belgian chocolate, peanut butter drip down, and accented with handmade peanut butter cup halves.",
            price: "$10.00",
            image: "DessertsImg/dessert5.webp"
        },
        {
            name: "Oreo Cheesecake",
            price: "$10.00",
            image: "DessertsImg/dessert6.webp"
        },
        {
            name: "Death By Chocolate",
            description: "Chocolate cake with one layer of chocolate mousse and one layer of decadent chocolate frosting. Finished with chocolate frosting encased in Belgian chocolate and finished with gold leaf Swiss chocolate.",
            price: "$10.00",
            image: "DessertsImg/dessert7.webp"
        },
        {
            name: "Chocolate Mousse",
            description: "Chocolate cake filled with decadent chocolate frosting and finished with Chocolate mousse, layer of chocolate ganache and chocolate drip down.",
            price: "$10.00",
            image: "DessertsImg/dessert8.webp"
        }
        
    ];

    const createProductCard = (product) => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = `Image of ${product.name}`;
        cardImage.appendChild(img);

        const cardDetails = document.createElement('div');
        cardDetails.className = 'card-details';
        const h2 = document.createElement('h2');
        h2.textContent = product.name;
        const p = document.createElement('p');
        p.textContent = product.description;
        const readMore = document.createElement('span');
        readMore.textContent = 'Read more';
        readMore.className = 'read-more';

        readMore.addEventListener('click', () => {
            if (p.classList.contains('expanded')) {
                p.classList.remove('expanded');
                readMore.textContent = 'Read more';
            } else {
                p.classList.add('expanded');
                readMore.textContent = 'Show less';
            }
        });

        const cardPrice = document.createElement('div');
        cardPrice.className = 'card-price';
        cardPrice.textContent = product.price;

        cardDetails.appendChild(h2);
        cardDetails.appendChild(p);
        cardDetails.appendChild(readMore);
        cardDetails.appendChild(cardPrice);
        

        card.appendChild(cardImage);
        card.appendChild(cardDetails);

        return card;
    };

    const appendTitle = (title) => {
        const h2 = document.createElement('h2');
        h2.className = 'menu-title';
        h2.textContent = title;
        const titleWrapper = document.createElement('div');
        titleWrapper.style.gridColumn = "1 / -1"; // This makes the title span the full width of the grid
        titleWrapper.appendChild(h2);
        
        content.appendChild(titleWrapper);
    };

    const appendProducts = (title, products) => {
        appendTitle(title);
        products.forEach(product => {
            const card = createProductCard(product);
            content.appendChild(card);
        });
    };

    appendProducts('Starters', starters);
    appendProducts('Sandwiches and Burgers', sandwiches);
    appendProducts('Main Course', mainCourse);
    appendProducts('Noodles and Pasta', noodlesAndPasta);
    appendProducts('Desserts', desserts);

    function loadContactPage() {
        fetch('../contact/contact.html')
            .then(response => response.text())
            .then(data => {
                // Check if the contact page is already in the DOM
                if (!document.getElementById('uniqueContactPage')) {
                    const content1 = document.getElementById('content1');
                    content1.innerHTML += data; // Append contact page HTML instead of replacing

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

    document.getElementById('contact-btn').addEventListener('click', loadContactPage);
});
