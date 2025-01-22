A responsive web application that allows users to view and analyze different options trading strategies based on market views and dates. also making it AI based, it will allow users add their information and can put remainder like alert.

## Features

- View toggle between different market outlooks:
  - Bullish
  - Bearish
  - Rangebound
  - Volatile
- Interactive date selector with dropdown menu
- Strategy cards showing strategy names and counts
- Responsive design that works on all devices
- Empty state handling when no strategies are available

## Demo



## Technologies Used

- HTML5
- CSS3
- JavaScript
- No external libraries or frameworks

## Project Structure

```
Interactive-UI/
├── index.html
├── nerve_style.css
├── Js
|    └── nerve_js.js
|    └── nerve_data.js
├── Images/
     └── favicon.ico
     └── site.webmanifest
```

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/AlexAjit/Interact-UI.git
```

2. Navigate to the project directory:
```bash
cd Interact-UI
```

3. Open `index.html` in your web browser to view the application

## Usage

1. Select a market view (Bullish, Bearish, Rangebound, or Volatile)
2. Choose a date from the dropdown menu
3. View the available strategies for the selected combination
4. Each strategy card shows:
   - Strategy name
   - Number of occurrences (displayed as "Strategy" for single occurrence or "Strategies" for multiple)

## Data Structure

The application uses two main data arrays:

1. `dateArray`: Contains available dates
2. `strategyArray`: Contains strategy data organized by:
   - View (market outlook)
   - Date
   - Strategy names and counts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
