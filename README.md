# 🌤️ Weather App

A clean, modern, responsive weather application built with **React + Vite**.  
Search any city and instantly see real-time weather powered by the **OpenWeatherMap API**.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔍 City Search | Type any city, press Enter or click Search |
| 🌡️ Current Weather | Temperature (°C), condition, description, feels-like |
| 📊 Detail Cards | Humidity · Wind Speed · Pressure · Visibility |
| 🕐 Search History | Last 3 searches saved — click to re-search instantly |
| ⏳ Loading State | Spinner shown while data loads |
| ❌ Error Handling | Friendly messages for bad city, no network, bad key |
| 📱 Responsive | Works great on mobile, tablet, and desktop |

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
cd weather-app
npm install
```

### 2. Add your OpenWeatherMap API key

Open the `.env` file at the project root:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

Replace `your_openweathermap_api_key_here` with your real API key.

> **Get a free API key:**  
> Sign up at [https://openweathermap.org/api](https://openweathermap.org/api)  
> → Go to **My API Keys** → copy your key.  
> **Note:** New keys may take ~10 minutes to activate.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── api/
│   │   └── weatherApi.js       # Fetch logic & error handling
│   ├── components/
│   │   ├── SearchBar.jsx       # Search input + button
│   │   ├── WeatherCard.jsx     # Main weather display
│   │   ├── WeatherDetails.jsx  # Humidity, Wind, Pressure, Visibility cards
│   │   ├── Loading.jsx         # Spinner component
│   │   └── ErrorMessage.jsx    # Error alert component
│   ├── App.jsx                 # Root component & state management
│   ├── App.css                 # All styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global reset & CSS variables
├── .env                        # ← Put your API key here
├── index.html
└── package.json
```

---

## 🌐 API Used

**OpenWeatherMap Current Weather API**

```
https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={KEY}&units=metric
```

The API key is read via `import.meta.env.VITE_WEATHER_API_KEY` — it is **never hardcoded**.

---

## 🎨 Color Theme

| Token | Value | Usage |
|---|---|---|
| Background | `#0F172A` | Page background |
| Card | `#1E293B` | Weather cards |
| Primary | `#6366F1` | Search button, focus rings |
| Accent | `#38BDF8` | Weather condition, links |
| Text | `#F8FAFC` | Main text |
| Secondary | `#94A3B8` | Labels, muted text |

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Lucide React** — Icon library
- **OpenWeatherMap API** — Weather data
- **Fetch API** — HTTP requests
- **localStorage** — Search history persistence
