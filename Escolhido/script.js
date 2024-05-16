document.addEventListener('DOMContentLoaded', function() {
    const accordionData = [
        { name: "Maçã", quantidade: 18, impacto: "1.000.508.748,63" },
        { name: "Pecuária/pastagem", quantidade: 8, impacto: "626.865.379,59" },
        { name: "Arroz", quantidade: 8, impacto: "577.227.669,34" },
        { name: "Tecnologias para produção de grãos", quantidade: 3, impacto: "491.453.731,36" },
        { name: "Banana", quantidade: 5, impacto: "490.539.492,00" },
        { name: "Cebola", quantidade: 12, impacto: "383.930.217,15" },
        { name: "Tecnologias ambientais", quantidade: 11, impacto: "252.799.294,39" },
        { name: "Tecnologias para olericultura", quantidade: 4, impacto: "164.762.423,02" },
        { name: "Uva/Vinho", quantidade: 16, impacto: "112.571.526,29" },
        { name: "SPDH", quantidade: 1, impacto: "100.038.800,00" },
        { name: "Erva-mate", quantidade: 2, impacto: "94.080.475,00" },
        { name: "Aquicultura", quantidade: 2, impacto: "62.243.503,18" },
        { name: "Mandioca", quantidade: 4, impacto: "37.857.040,00" },
        { name: "Maracujá", quantidade: 2, impacto: "34.927.700,00" },
        { name: "Ameixa", quantidade: 4, impacto: "34.454.080,73" },
        { name: "Tomate", quantidade: 5, impacto: "25.109.863,25" },
        { name: "Pêra", quantidade: 1, impacto: "6.462.093,88" },
        { name: "Alface", quantidade: 1, impacto: "6.403.238,45" },
        { name: "Apoio ao PNAE", quantidade: 1, impacto: "3.949.859,70" },
        { name: "Pêssego", quantidade: 3, impacto: "3.220.389,50" },
        { name: "Batata doce", quantidade: 6, impacto: "2.908.912,20" },
        { name: "Milho", quantidade: 2, impacto: "2.888.162,20" },
        { name: "Caqui", quantidade: 1, impacto: "2.723.000,00" },
        { name: "Mel", quantidade: 1, impacto: "1.335.152,00" },
        { name: "Feijão", quantidade: 1, impacto: "1.021.650,00" }
    ];

    const accordionContainer = document.querySelector('.accordion-container');

    accordionData.forEach((item, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const button = document.createElement('button');
        button.id = `accordion-button-${index + 1}`;
        button.classList.add('accordion-button');
        button.setAttribute('aria-expanded', 'false');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('accordion-symbol');
        symbolSpan.textContent = '+';

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('accordion-title');
        titleSpan.textContent = item.name;

        button.appendChild(symbolSpan);
        button.appendChild(titleSpan);

        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.style.maxHeight = '0';

        const primaryTable = document.createElement('table');
        primaryTable.id = 'primary-table';
        primaryTable.innerHTML = `
            <thead>
                <tr>
                    <th>Produto/Tecnologia</th>
                    <th>Quantidade</th>
                    <th>Impacto econômico atribuído à Epagri (R$)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantidade}</td>
                    <td>${item.impacto}</td>
                </tr>
            </tbody>
        `;

        const secondaryTable = document.createElement('div');
        secondaryTable.classList.add('secondary-table');
        secondaryTable.style.display = 'none';

        let secondaryTableContent = '';
        if (item.name === "Maçã") {
            secondaryTableContent = `
                <table>
                    <thead>
                        <tr>
                            <th>Tecnologias</th>
                            <th>Adoção</th>
                            <th>Impacto social</th>
                            <th>Impacto ambiental</th>
                            <th>Impacto econômico</th>
                            <th>Quantidade</th>
                            <th>Impacto econômico atribuído à Epagri (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Agroalertas - Sistema de alerta fitossanitário para o controle de doenças na cultura da maçã</td><td>19.000 ha</td><td>++</td><td>+</td><td>104.737.500,00</td></tr>
                        <tr><td>Aumento da conservação da maçã Fuji após a colheita com baixo teor de CO2</td><td>287.800 t</td><td>++</td><td>N</td><td>124.149.172,00</td></tr>
                        <tr><td>Controle da maturação e aumento da conservação da qualidade de frutas (maçã, ameixa e kiwi) após a colheita</td><td>384.000 t</td><td>++</td><td>N</td><td>57.102.941,93</td></tr>
                        <tr><td>Controle do crescimento vegetativo da macieira</td><td>11.000 ha</td><td>++</td><td>N</td><td>22.099.000,00</td></tr>
                        <tr><td>Cultivar de maçã Daiane</td><td>315 ha</td><td>++</td><td>++</td><td>2.179.366,20</td></tr>
                        <tr><td>Cultivar de maçã Epagri 405 (Fuji Suprema)</td><td>8.000 ha</td><td>++</td><td>N</td><td>95.060.800,00</td></tr>
                        <tr><td>Cultivar de maçã Epagri 408 (Condessa)</td><td>425 ha</td><td>++</td><td>++</td><td>1.739.195,31</td></tr>
                        <tr><td>Cultivar de maçã Epagri SCS441 Gala Gui</td><td>302 ha</td><td>++</td><td>++++</td><td>2.051.220,39</td></tr>
                        <tr><td>Indução da brotação da macieira</td><td>27.500 ha</td><td>+++</td><td>++</td><td>124.626.600,00</td></tr>
                        <tr><td>Manejo alternativo do controle de lagartas da macieira utilizando feromônios sexuais</td><td>11.648 ha</td><td>+++</td><td>+++</td><td>7.537.420,80</td></tr>
                        <tr><td>Manejo da colheita da macieira com o uso de AVG</td><td>3.500 ha</td><td>+++</td><td>N</td><td>7.274.260,00</td></tr>
                        <tr><td>Manejo da densidade de plantio em pomares de macieira</td><td>16.500 ha</td><td>+++</td><td>N</td><td>61.987.695,00</td></tr>
                        <tr><td>Manejo das pragas da macieira no Sul do Brasil</td><td>27.419 ha</td><td>+++</td><td>+++</td><td>69.474.262,20</td></tr>
                        <tr><td>Melhoria da frutificação efetiva da macieira ‘Gala’</td><td>12.082 ha</td><td>+++</td><td>N</td><td>32.381.400,00</td></tr>
                        <tr><td>Pack test Epagri: Programa de qualidade de maçã na pré-colheita</td><td>2.628 ha</td><td>+++</td><td>+</td><td>14.587.268,00</td></tr>
                        <tr><td>Tecnologia de pós-colheita e mercado de maçã</td><td>150.000 t</td><td>+++</td><td>+</td><td>89.925.000,00</td></tr>
                        <tr><td>Tratamento de água utilizada em pós-colheita de maçã</td><td>2.500 ha</td><td>+++</td><td>N</td><td>40.172.428,50</td></tr>
                        <tr><td>Tratamento fitossanitário na cultura da macieira</td><td>12.000 ha</td><td>+++</td><td>++</td><td>55.201.000,00</td></tr>
                        <tr><td>Uso de EPIs no manejo da cultura da maçã</td><td>900 ha</td><td>+++</td><td>N</td><td>5.444.500,00</td></tr>
                        </tbody>
                        </table>
                        `;
                        }
                        secondaryTable.innerHTML = secondaryTableContent;

                        accordionItem.appendChild(button);
                        accordionItem.appendChild(content);
                        content.appendChild(primaryTable);
                        content.appendChild(secondaryTable);
                    
                        accordionContainer.appendChild(accordionItem);
                    
                        button.addEventListener('click', () => {
                            const expanded = button.getAttribute('aria-expanded') === 'true' || false;
                    
                            button.setAttribute('aria-expanded', !expanded);
                            symbolSpan.textContent = expanded ? '+' : '-';
                    
                            if (!expanded) {
                                content.style.maxHeight = `${content.scrollHeight}px`;
                                secondaryTable.style.display = 'block';
                            } else {
                                content.style.maxHeight = '0';
                                secondaryTable.style.display = 'none';
                            }
                        });
                    });
                });                    
