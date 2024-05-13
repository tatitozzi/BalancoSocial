document.addEventListener('DOMContentLoaded', function() {
    const accordionButton = document.getElementById('accordion-button-1');
    accordionButton.onclick = function() {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        this.children[0].textContent = expanded ? '+' : '-'; // Update the symbol based on expanded state
        let content = this.nextElementSibling;
        if (!expanded) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    }
});
