document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('car-list');
    const cars = [
        {
            name: 'XJ6',
            price: '$10,000',
            image: 'XJ6 foto.jpeg',
            description: 'O motor de 600cc com duplo comando (DOHC), 16 válvulas e arrefecimento a água desenvolve potência de 77,5 cavalos a 10.000 rpm e torque de 6,1 kgf.m a 8.500 rpm.'
        },
        {
            name: 'Factor 150 2024',
            price: '$15,000',
            image: 'Factor 150 2024 foto.jpeg',
            description: 'Factor 150 2024 traz motor de 149 cc, SOHC, monocilíndrico, duas válvulas, quatro tempos, refrigeração a ar e movido com gasolina ou etanol. O motor gera 12,2 cv de potência com gasolina e 12,4 cv com etanol a 7.500 rpm. O torque máximo é de 1,3 kgfm com os dois combustíveis a 5.500 rpm.'
        },
        {
            name: 'MT 07',
            price: '$20,000',
            image: 'MT 07 foto.jpeg',
            description: 'Com apenas 183 kg, 6,9 kgf.m e 74,8 cv, a MT-07 é ágil, potente e com o torque brutal do DNA Master of Torque. Essa moto de 689cc promete agilidade e performance de uma autêntica street fighter.'
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
        description.classList.add('description'); 
        carContent.appendChild(description);

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Ver Detalhes';
        detailsButton.classList.add('details-button');
        carContent.appendChild(detailsButton);

        detailsButton.addEventListener('click', function() {
            description.classList.toggle('show');
            if (description.classList.contains('show')) {
                detailsButton.textContent = 'Ocultar Detalhes';
            } else {
                detailsButton.textContent = 'Ver Detalhes';
            }
        });

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.classList.add('buy-button');
        carContent.appendChild(buyButton);

        const targetHTML = 'teste.html'; 
        buyButton.addEventListener('click', function() {
            window.location.href = targetHTML;
        });

        carList.appendChild(carItem);
    });
});