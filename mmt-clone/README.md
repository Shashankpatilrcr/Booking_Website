# MMT Clone - Booking Website

A modern, full-stack booking application inspired by MakeMyTrip (MMT). This project features a React-based frontend and a Node.js/Express backend with MongoDB.

## 🚀 Features

- **Dynamic Homepage**: A stunning UI for searching flights, hotels, and more.
- **Authentication**: Secure login and registration pages.
- **Responsive Design**: Optimized for all devices with premium aesthetics.
- **Full-Stack Integration**: Connected frontend and backend for real-time data.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Styling**: Vanilla CSS with modern design principles.

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose 9](https://mongoosejs.com/)
- **Middleware**: [CORS](https://github.com/expressjs/cors), [Dotenv](https://github.com/motdotla/dotenv)

## 📂 Project Structure

```text
mmt-clone/
├── frontend/           # React application
│   ├── src/           # Component and logic source code
│   ├── public/        # Static assets
│   └── index.html     # Entry point
├── backend/            # Node.js API
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API endpoints
│   └── server.js      # Server entry point
└── README.md           # Project documentation
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd mmt-clone
    ```

2.  **Setup Backend**:
    ```bash
    cd backend
    npm install
    # Create a .env file with your MONGO_URI and PORT
    npm start
    ```

3.  **Setup Frontend**:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

## 🎨 Design Principles
- **Visual Excellence**: Vibrant color palettes and modern typography.
- **Micro-animations**: Smooth transitions for an interactive feel.
- **Premium Feel**: Glassmorphism and subtle gradients.

---

Built with ❤️ by Antigravity.
