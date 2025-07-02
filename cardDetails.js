//details
async function fetchdata() {
    try {
        const response = await fetch ('cardDetails.json');

        if (!response) {
            throw new Error('ошибка JSON');
        }
        const data = await response.json();
        const itemDetails = document.getElementById('details-box');

        data.forEach(({id, img, alt, heading, text, button}) => {
            const itemEl = `
                <div class="details__item" id="${id}">
                    <img class="details__img" src="${img}" alt="${alt}">
                    <h3 class="details__heading">${heading}</h3>
                    <p class="details__text">${text}</p>
                    <button class="details__button">${button}</button>
                </div>
            `;
            itemDetails.insertAdjacentHTML('beforeend', itemEl)
        });
    } catch (error) {
        console.log(error);
    };
};

fetchdata();
