document.addEventListener('DOMContentLoaded', function () {
    var faqQuestionContainers = document.querySelectorAll('.faq-question-container');

    faqQuestionContainers.forEach(function (container, index) {
        var iconPlus = container.querySelector('.icon-plus');
        var iconMinus = container.querySelector('.icon-minus');
        var faqAnswer = container.querySelector('.faq-answer');

        container.addEventListener('click', function () {
            toggleAnswerState();
        });

        // Toggle visibility of icons and answer based on the state
        function toggleAnswerState() {
            if (faqAnswer.style.display === 'none' || getComputedStyle(faqAnswer).getPropertyValue('display') === 'none') {
                // Expand the question
                iconPlus.style.display = 'none';
                iconMinus.style.display = 'inline-block';
            } else {
                // Collapse the question
                iconPlus.style.display = 'inline-block';
                iconMinus.style.display = 'none';
            }

            // Toggle the active class on the container
            container.classList.toggle('active');
        }

        // Keyboard navigation
        container.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                // Toggle answer on Enter key press
                toggleAnswerState();
            } else if (event.key === 'ArrowUp' && index > 0) {
                // Navigate to the previous question on ArrowUp key press
                faqQuestionContainers[index - 1].focus();
            } else if (event.key === 'ArrowDown' && index < faqQuestionContainers.length - 1) {
                // Navigate to the next question on ArrowDown key press
                faqQuestionContainers[index + 1].focus();
            }
        });
    });
});