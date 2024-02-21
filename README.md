<div align="center">
<img src='/github/logo-modified.png'/>
</div>

<h1 align="center">EduSphere: 📚 Empowering Education</h1>

![App Screenshot](/github/EduSphere.png)

<p>EduSphere 🎓 is a transformative project dedicated to revolutionizing education through innovative courses and cutting-edge learning experiences. With a commitment to fostering knowledge, EduSphere offers a diverse range of courses designed to empower learners in various domains. From interactive virtual classrooms to hands-on practical sessions, the project prioritizes engaging and personalized education. EduSphere's mission is to create a dynamic learning sphere where students thrive, gaining not just knowledge but also essential skills for the future. Join EduSphere and embark on a journey of educational excellence, where every course opens doors to endless possibilities. 🌐📚</p>

# EduSphere Key Features

## Modular Architecture 🏗️

- Built on a modular architecture for scalability and ease of maintenance.

## User Management 👤

- Comprehensive user management system for registration, authentication, and profile management.
- Role-based access control ensures secure operations.

## Analytics Insights 📊

- Gain valuable insights into user behavior, course performance, and order patterns.
- Analytics module provides detailed reports for informed decision-making.

## Course Management 📚

- Flexible course management functionalities for creation, editing, and deletion.
- Simplified course retrieval ensures easy access to learning materials.

## Customizable Layouts 🎨

- Customize layouts effortlessly with dynamic layout management capabilities.
- Update banners to enhance visual appeal and user experience.

## Real-time Notifications 🔔

- Stay informed with real-time notifications for important updates and events.
- Easily manage notification status and retrieval for effective communication.

## Order Processing 💳

- Streamlined order management system for creating, retrieving, and processing orders.
- Secure payment processing ensures a seamless transaction experience.

# EduSphere API Endpoints

<p>🚀 Our project API offers a comprehensive suite of endpoints categorized by modules. The root route acts as the gateway to various application modules. Users can perform operations like registration, authentication, and profile management. Analytics, Courses, Layouts, Notifications, and Orders modules streamline data retrieval and management, enhancing user experience.</p>

## User Operations

`/users`

- POST /registration: Register a new user.
- POST /social-auth: Authenticate user via social media.
- POST /activate-user: Activate user account.
- POST /login: Log in user.
- GET /logout: Log out user.
- GET /refresh: Refresh access token.
- GET /me: Get user information.
- PATCH /update-userinfo: Update user information.
- PATCH /update-user-password: Update user password.
- PUT /update-avatar: Update user avatar.
- GET /get-all-users: Get all users (admin only).
- PATCH /update-user-role/:email: Update user role (admin only).
- DELETE /delete-user/:userId: Delete user (admin only).

## Analytics

`/analytics`

- GET /get-user-analytics: Get user analytics (admin only).
- GET /get-course-analytics: Get course analytics (admin only).
- GET /get-order-analytics: Get order analytics (admin only).

## Courses

`/courses`

- POST /create-course: Create a new course (admin only).
- PATCH /edit-course/:courseId: Edit a course (admin only).
- GET /get-course/:courseId: Get a single course.
- GET /get-courses: Get all courses.
- GET /get-course-content/:courseId: Get course content by user.
- PATCH /add-question: Add a question.
- PATCH /add-answer: Add an answer.
- PATCH /add-review/:courseId: Add a review.
- GET /get-all-courses: Get all courses (admin only).
- POST /get-vdocipherOTP: Generate Video URL.
- DELETE /delete-course/:courseId: Delete a course (admin only).

## Layouts

`/layout`

- POST /create-layout: Create a layout (admin only).
- PATCH /update-banner: Update layout banner (admin only).
- PATCH /edit-layout: Edit layout (admin only).
- GET /get-layout/:type: Get layout.

## Notifications

`/notifications`

- GET /: Get notifications (admin only).
- PATCH /update-status/:id: Update notification status (admin only).

## Orders

`/orders`

- POST /create-order: Create a new order.
- GET /get-all-orders: Get all orders (admin only).
- GET /payment/stripe-key: Get Stripe key.
- POST /payment: Make a payment.

# Authors

- [@Shuvo khan](https://github.com/ShuvoProgram)