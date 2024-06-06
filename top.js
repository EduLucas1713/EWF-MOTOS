document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('car-list');
    const cars = [
        {
            name: 'moto 1',
            price: '$10,000',
            image: 'moto.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor lacus vel neque consequat, sit amet ultricies libero vulputate.'
        },
        {
            name: 'moto 2',
            price: '$15,000',
            image: 'car2.jpg',
            description: 'Sed eget massa et nulla scelerisque vehicula id non turpis. Morbi fringilla pharetra mauris vitae viverra.'
        },
        {
            name: 'moto 3',
            price: '$20,000',
            image: 'car3.jpg',
            description: 'Praesent ultricies dictum felis nec ultricies. Cras dapibus volutpat elit, non suscipit justo varius at.'
        }
    ];

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car');

        const image = document.createElement('img');
        image.src = car.image;
        carItem.appendChild(image);

        const carContent = document.createElement('div');
        carContent.classList.add('car-content');
        carItem.appendChild(carContent);

        const name = document.createElement('h2');
        name.textContent = car.name;
        carContent.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `Preço: ${car.price}`;
        carContent.appendChild(price);

        const description = document.createElement('p');
        description.textContent = car.description;
        carContent.appendChild(description);

        carList.appendChild(carItem);
    });
});