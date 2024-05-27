## CheQup

<strong>CheQup</strong> is a comprehensive web application designed to provide real-time network safety surveillance and monitoring across a wide range of IP devices. It offers features such as live streaming, recording, remote device control, and automated alerts triggered by various events. CheQup aims to deliver a seamless, secure, and efficient user experience across multiple platforms.


<strong>Table of Contents</strong><br>
Features<br>
Tech Stack<br>
Installation<br>
Usage<br>
Directory Structure<br>
Contributing<br>
License<br>


<strong>Features</strong><br>
CheQup includes the following key features:<br>

User Authentication and Authorization: Secure user access and role-based permissions.<br>
Device Linking and Management: Connect and manage IP devices seamlessly.<br>
Real-Time Network Safety Surveillance: Monitor network safety in real-time.<br>
Live Streaming and Recording: Stream live footage and record events.<br>
Remote Device Control: Control connected devices remotely.<br>
Automated Alerts and Triggers: Receive alerts based on predefined triggers.<br>
Location Tracking and GPS: Track device locations using GPS technology.<br>
Integration with Third-Party Applications: Seamlessly integrate with third-party apps like WhatsApp, WeChat, SnapChat and Facebook.<br>
Secure Communication and Data Handling: Ensure secure communication and data handling protocols.<br>


<strong>Tech Stack</strong><br>
Frontend<br>
React.js: JavaScript library for building user interfaces.<br>
Next.js: React framework for server-rendered applications.<br>
SuperTokens: Authentication library for secure user authentication.<br>
WebRTC: Real-Time Communication protocol for web applications.<br>
Socket.io: Library for real-time web applications enabling bidirectional communication.<br>

Backend<br>
NestJS: Node.js framework for building efficient, reliable, and scalable server-side applications.<br>
PostgreSQL: Open-source relational database management system.<br>
Docker: Platform for developing, shipping, and running applications in containers.<br>
Kubernetes: Container orchestration platform for automating deployment, scaling, and management of containerized applications.<br>
Wazuh: Security monitoring and threat detection platform.<br>
Grafana: Open-source analytics and monitoring solution for every database.<br>
Twilio: Cloud communications platform for building SMS, Voice & Messaging applications.<br>


<strong>Installation</strong><br>
Prerequisites:<br>
Node.js<br>
Docker and Docker Compose<br>

Steps<br>

Clone the repository:<br>
sh<br>
git clone https://github.com/yourusername/chequp.git<br>
cd chequp<br>

Install frontend dependencies:<br>
sh<br>
cd frontend<br>
npm install<br>

Install backend dependencies:<br>
sh<br>
cd ../backend<br>
npm install<br>

Set up environment variables:<br>
Create a .env file in both frontend and backend directories and add the necessary environment variables.<br>
Start the backend using Docker:<br>

sh<br>
docker-compose up --build<br>
Start the frontend:<br>

sh<br>
cd ../frontend<br>
npm run dev<br>
Usage<br>

Open your browser and navigate to:<br>
plaintext<br>
http://localhost:3000<br>

Register or log in to your account.<br>

Link your devices and start exploring the features of CheQup.<br>


<strong>Directory Structure</strong><br>
sql<br>

chequp/<br>
  |-- frontend/<br>
    |   |-- components/<br>
    |   |-- pages/<br>
    |   |-- public/<br>
    |   |-- styles/<br>
    |   |-- .env<br>
    |   |-- next.config.js<br>
    |   |-- package.json<br>
    |   |-- README.md<br>
  |<br>
  |-- backend/<br>
    |   |-- src/<br>
    |   |-- .env<br>
    |   |-- Dockerfile<br>
    |   |-- docker-compose.yml<br>
    |   |-- package.json<br>
    |   |-- README.md<br>
  |<br>
  |-- .gitignore<br>
  |-- README.md<br>

## Contributing

We welcome contributions from the community! To get started, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.

## License

This project is licensed under the MIT License.

