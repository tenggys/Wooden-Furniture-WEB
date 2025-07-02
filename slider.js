document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.project__imgs');
    const buttons = document.querySelectorAll('.project__buttons_btn');
    const images = document.querySelectorAll('.project__imgs img');
    const imageCount = images.length;
    let currentIndex = 0;
    
    // Инициализация слайдера
    function initSlider() {
        // Показываем только 3 изображения
        updateSlider();
        
        // Добавляем обработчики для кнопок
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (index >= 0 && index <= imageCount - 3) {
                    currentIndex = index;
                    updateSlider();
                }
            });
        });
    }
    
    // Обновление слайдера
    function updateSlider() {
        // Скрываем все изображения
        images.forEach(img => {
            img.style.display = 'none';
        });
        
        // Показываем только 3 изображения, начиная с currentIndex
        for (let i = currentIndex; i < currentIndex + 3 && i < imageCount; i++) {
            images[i].style.display = 'block';
        }
        
        // Обновляем активную кнопку
        buttons.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
    }
    
    // Инициализируем слайдер
    initSlider();
    
    // Опционально: добавляем автоматическую прокрутку
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % (imageCount - 2);
            updateSlider();
        }, 3000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Запускаем автоматическую прокрутку
    startAutoSlide();
    
    // Останавливаем при наведении на слайдер
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
});