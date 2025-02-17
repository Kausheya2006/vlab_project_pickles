# VLab Project

**Virtual Labs** is an interactive platform designed to provide students with hands-on learning experiences in a virtual environment. The platform is built with a modern UI, providing an intuitive and engaging interface. It includes features like a responsive design, a chatbot for support, and integrations with Google Maps and OpenAI APIs for enhanced functionality.

## Features

- **Responsive Design**: The website is fully responsive, ensuring optimal user experience across a variety of devices including desktops, tablets, and smartphones.
- **Chatbot Integration**: A real-time chatbot powered by OpenAI provides users with instant support, answering questions and assisting with navigating the platform.
- **Modern User Interface**: The platform features a sleek, user-friendly UI with smooth animations and intuitive navigation for a seamless experience.
- **Google Maps Integration**: Users can interact with a Google Map to find locations or resources easily.
- **MongoDB Database**: The app is powered by a MongoDB database to store user data, lab information, and more.

## Installation

Follow these steps to set up and run this project on your local machine.

## Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local setup or a MongoDB Atlas cluster)
- [Git](https://git-scm.com/)

## Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kausheya2006/vlab_project_pickles.git
   ```
2. **Navigate to the project directory**:
   ```
   cd virtuallabs
   ```

3. **Install dependencies:**
   Run the following command to install the required packages:
   ```
   npm install
   ```
4. **Set up environment variables:**
   Create a .env.local file in the root directory of the project and add the following variables:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   OPENAI_API_KEY=your-openai-api-key
   MONGODB_URI=your-mongodb-connection-string
   ```
   
5. **Run the development server:**
   After setting up the environment variables, you can start the app by running:
   ```
   npm run dev
   ```
   The app should now be running at http://localhost:3000.
   
## Frameworks and Libraries Used

1. Next.js: A React-based framework used for server-side rendering and building modern web applications.
2. Tailwind CSS: A utility-first CSS framework for building responsive and customizable user interfaces.
3. MongoDB: A NoSQL database used for storing data.
4. Google Maps API: Used for embedding Google Maps and providing location-based services.
5. OpenAI API: Used for integrating a chatbot to provide instant assistance to users.
   
## Contributing

We welcome contributions! If you have suggestions, improvements, or fixes, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Open a pull request.
   
### Thank you for checking out Virtual Labs! If you have any questions or feedback, please feel free to reach out.
