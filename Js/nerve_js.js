let currentView = 'Bullish';
let currentDate = dateArray[0];

const viewButtons = document.querySelectorAll('.view-toggle button');
const dateDropdown = document.querySelector('.date-dropdown');
const dateOptions = document.querySelector('.date-options');
const strategyCards = document.querySelector('.strategy-cards');

// logic to setup for view toggle
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        viewButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        currentView = button.textContent;
        updateStrategyCards();
    });
});

// logic to setup date dropdown
dateArray.forEach(date => {
    const option = document.createElement('div');
    option.className = 'date-option';
    option.textContent = date;
    option.addEventListener('click', () => {
        currentDate = date;
        dateDropdown.firstChild.textContent = date;
        dateOptions.classList.remove('show');
        dateDropdown.classList.remove('open');
        updateStrategyCards();
    });
    dateOptions.appendChild(option);
});

dateDropdown.addEventListener('click', () => {
    dateOptions.classList.toggle('show');
    dateDropdown.classList.toggle('open');
});

// Logic to close dropdown when clicking outside data
document.addEventListener('click', (e) => {
    if (!dateDropdown.contains(e.target)) {
        dateOptions.classList.remove('show');
        dateDropdown.classList.remove('open');
    }
});

function getStrategyCount(strategies) {
    const counts = {};
    strategies.forEach(strategy => {
        counts[strategy] = (counts[strategy] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({
        name,
        count
    }));
}

function updateStrategyCards() {
    strategyCards.innerHTML = '';
    
    const viewData = strategyArray.find(v => v.View === currentView);
    const strategies = viewData?.Value[currentDate];

    if (!strategies || strategies.length === 0) {
        strategyCards.innerHTML = `
            <div class="empty-state">
                <p>There are no strategies for</p>
                <p>${currentDate}</p>
            </div>
        `;
        return;
    }

    const strategyCounts = getStrategyCount(strategies);
    
    strategyCounts.forEach(({name, count}) => {
        const card = document.createElement('div');
        card.className = 'strategy-card';
        card.innerHTML = `
            <div class="strategy-name">${name}</div>
            <div class="strategy-count">${count} ${count === 1 ? 'Strategy' : 'Strategies'}</div>
        `;
        strategyCards.appendChild(card);
    });
}

// Initialized with default values
dateDropdown.firstChild.textContent = currentDate;
updateStrategyCards();