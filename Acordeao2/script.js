document.addEventListener('DOMContentLoaded', function() {
    const accordionButton = document.getElementById('accordion-button-1');
    const primaryRows = document.querySelectorAll('#primary-table tbody tr');
    const secondaryTables = document.querySelectorAll('.secondary-table');

    accordionButton.onclick = function() {
        let expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        this.children[0].textContent = expanded ? '+' : '-';
        let content = this.nextElementSibling;
        if (!expanded) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    };

    primaryRows.forEach((row, index) => {
        row.addEventListener('click', () => {
            // Toggle visibility of the corresponding secondary table
            const secondaryTable = secondaryTables[index];
            secondaryTable.style.display = secondaryTable.style.display === 'none' ? 'block' : 'none';
        });
    });
});
