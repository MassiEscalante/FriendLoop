# FriendLoop Social Network API

### 🚀 Connecting People, One Thought at a Time!

## 📜 Description

**FriendLoop** is a RESTful API designed for a social network application where users can share thoughts, react to friends' posts, and manage a friends list. Built using Express.js and MongoDB, FriendLoop is optimized for handling large amounts of unstructured data, making it ideal for social networks that grow quickly. This API is the foundation for a social media platform, enabling developers to build social networking features with ease.

## 🧠 Motivation

Creating meaningful connections online is crucial in today’s world, and FriendLoop serves as a streamlined way to handle complex social interactions in code. By building this API, we tackled the real-world problem of managing user-generated content, friend relationships, and interactive features in a scalable way.

## 🏆 Why Build This Project?

FriendLoop aims to provide a clean and robust solution for handling social network data and user interactions without relying on pre-built frameworks. This project serves as a base for anyone looking to implement social networking features in their app, giving developers complete control over data relationships and user interactions.

## 🔧 Technologies Used

- **Node.js & Express.js**: For efficient, scalable server-side operations and routing.
- **MongoDB & Mongoose**: To handle flexible, NoSQL storage ideal for social networking data.
- **Moment.js**: For consistent, human-readable timestamps across posts and reactions.
- **Insomnia**: For testing and interacting with the API during development.

## ⚙️ Features

- **User Management**: Create, update, and delete user accounts with unique usernames and emails.
- **Friends List**: Add and remove friends to build meaningful social connections.
- **Thoughts (Posts)**: Users can post thoughts, edit them, and delete them.
- **Reactions**: Nested within thoughts, reactions enable users to respond to each other's posts.
- **Data Relations**: Mongoose models with references and virtuals create efficient relationships between users, thoughts, and friends.

## 🌍 How It Works

FriendLoop leverages a combination of Express.js and MongoDB for flexible, unstructured data storage. The API provides multiple endpoints to handle CRUD operations on users and thoughts, with additional nested routes for friends and reactions. Each interaction is structured to handle high amounts of data, allowing the API to scale for larger social networking applications.

## 🧗 Challenges Faced & Lessons Learned

Building FriendLoop taught us how to structure a database for efficient querying in a social network environment. Some of the challenges included:
- Designing self-referencing relationships for the friends list.
- Handling cascading deletes for user data and associated thoughts.
- Creating virtual properties to count items efficiently.

Each challenge deepened our understanding of database relationships, NoSQL data handling, and best practices for API structure.

## 📈 Future Plans

1. **Enhanced Authentication**: Add JWT-based authentication to secure routes and allow private thoughts.
2. **Search and Pagination**: Add search functionality to easily find users and thoughts, along with pagination to handle large datasets.
3. **Notification System**: Real-time notifications for new reactions, friend requests, and thoughts.
4. **Data Caching**: Implement data caching for popular user and thought data, reducing load times and enhancing scalability.

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/friendloop-api.git
2. Install dependencies
3. Set up environment variables in a ".env" file: MONGODB_URI=<your-mongodb-connection-string>
4. Start the server: node server.js
5.  Test API endpoints using Insomnia or Postman.

Enjoy building FriendLoop! 🚀
