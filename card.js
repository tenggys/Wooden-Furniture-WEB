async function fetchdata() {
    try {
        const response = await fetch('card.json');

        if (!response) {
            throw new Error('Ошибка загрузки JSON');
        }
        const data = await response.json();
        const cardItem = document.getElementById('card-box');

        data.forEach(({id, img, alt, title, from, price, subtitle, description, button}, index) => {
            const reverseClass = (index % 2 === 1) ? 'card__item_reverse' : '';
            const itemEl = `
                <div class="card__item ${reverseClass}" id="${id}">
                    <div class="card__content">
                        <h2 class="card__title">${title}</h2>
                        <p class="card__subtitle">${subtitle}</p>
                        <p class="card__price">${from}<span>${price}</span></p>
                        <p class="card__description">${description}</p>
                        <button class="card__button">${button}</button>
                    </div>
                    <img class="card__img" src="${img}" alt="${alt}">
                </div>
            `;
            cardItem.insertAdjacentHTML('beforeend', itemEl);

            const lastButton = cardItem.lastElementChild.querySelector('button');
            lastButton.addEventListener('click', function() {
                const originalText = this.textContent;
                this.disabled = true;
                this.textContent = 'Функционала еще нет';
                
                setTimeout(() => {
                    this.disabled = false;
                    this.textContent = originalText;
                }, 2000);
            });
        });
    } catch (error) {
        console.error('Ошибка:', error);
    };
};

fetchdata();