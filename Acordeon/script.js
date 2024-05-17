document.addEventListener('DOMContentLoaded', function() {
    // Função para configurar eventos de clique nos botões dos acordeões
    function setupAccordionButton(button, content, secondaryTables) {
        button.onclick = function() {
            let expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            this.children[0].textContent = expanded ? '+' : '-';
            if (!expanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        };

        const primaryRows = content.querySelectorAll('#primary-table tbody tr');
        primaryRows.forEach((row, index) => {
            row.addEventListener('click', () => {
                const secondaryTable = secondaryTables[index];
                secondaryTable.style.display = secondaryTable.style.display === 'none' ? 'block' : 'none';
            });
        });
    }

    // Seleciona todos os acordeões e configura eventos de clique
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(accordion => {
        const button = accordion.querySelector('.accordion-button');
        const content = accordion.querySelector('.accordion-content');
        const secondaryTables = accordion.querySelectorAll('.secondary-table');
        setupAccordionButton(button, content, secondaryTables);
    });
});
