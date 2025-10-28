// Навигация по разделам
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки навигации
    const navLinks = document.querySelectorAll('nav a');
    // Получаем все секции
    const sections = document.querySelectorAll('.section');

    // Функция для переключения активной секции
    function setActiveSection(sectionId) {
        // Скрываем все секции
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // Показываем активную секцию
        document.getElementById(sectionId).classList.add('active-section');

        // Обновляем активную ссылку в навигации
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Сохраняем активную секцию в localStorage
        localStorage.setItem('activeSection', sectionId);
    }

    // Обработчик кликов по навигации
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            setActiveSection(sectionId);

            // Плавная прокрутка к началу страницы
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Восстанавливаем активную секцию из localStorage при загрузке
    const savedSection = localStorage.getItem('activeSection') || 'home';
    setActiveSection(savedSection);

    // Добавляем случайные эффекты для элементов с классом chuchuki-special
    const specialElements = document.querySelectorAll('.chuchuki-special');
    specialElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами галереи и инцидентами
    const animatedElements = document.querySelectorAll('.gallery-item, .incident, .report');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });

    // Случайный генератор контента для демонстрации
    function generateRandomContent() {
        const physicsTitles = [
            "Неудачный опыт с сухим льдом",
            "Взрыв шарика с гелием",
            "Создание ракеты из бутылки",
            "Магнитный хаос",
            "Оптическая иллюзия по-чучучьи"
        ];

        const roomTitles = [
            "Комната №3 - 'Гнездо орлов'",
            "Комната №8 - 'Штаб коварства'",
            "Комната №12 - 'Логово сладкоежек'",
            "Комната №6 - 'Лабиринт сюрпризов'"
        ];

        // Здесь можно добавить логику для генерации случайного контента
        // если потребуется в будущем
    }

    // Инициализация генератора контента
    generateRandomContent();

    // Добавляем эффект параллакса для фонового изображения
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.camp-image');

        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
});