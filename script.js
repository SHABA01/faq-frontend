document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            item.classList.toggle('active');
        });

        question.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                item.classList.toggle('active');
            }
        });
    });
});