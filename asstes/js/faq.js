/**
 * Accessible FAQ Accordion Component
 * Operates on semantic <button> elements with aria-expanded and aria-controls
 * Uses the native 'hidden' attribute for optimal performance and accessibility
 */
document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-toggle-btn');
    if (!faqButtons.length) return;

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const targetId = this.getAttribute('aria-controls');
            const targetAnswer = document.getElementById(targetId);
            const icon = this.querySelector('.faq-icon');

            if (!targetAnswer) return;

            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                targetAnswer.setAttribute('hidden', '');
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            } else {
                this.setAttribute('aria-expanded', 'true');
                targetAnswer.removeAttribute('hidden');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });
});

