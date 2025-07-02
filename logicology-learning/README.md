# Logicology Learning Management System (LMS)

A complete, scalable Learning Management System built with Next.js, MongoDB, and TypeScript, featuring role-based authentication and real-time communication.

## Features

### 🎓 Student Features
- **Course Enrollment**: Browse and enroll in courses with different difficulty levels
- **Video Lectures**: Watch course content with video player and progress tracking
- **Live Classes**: Attend real-time virtual classrooms via WebRTC/Zoom integration
- **Interactive Tests**: Take MCQ and descriptive tests with instant feedback
- **Real-time Chat**: Ask questions and get help from instructors and peers
- **Progress Tracking**: View personal learning progress and achievements
- **Notes & Resources**: Access and download course materials

### 👨‍� Admin/Teacher Features
- **Course Management**: Create, edit, and publish courses with multimedia content
- **Classroom Management**: Schedule and host live virtual classes
- **Student Management**: Track student progress and manage enrollments
- **Test Creation**: Build interactive quizzes and assessments
- **Content Upload**: Upload videos, documents, and other learning materials
- **Analytics & Reports**: Generate detailed reports on student performance
- **Real-time Communication**: Chat with students and provide instant support

### 🚀 Technical Features
- **Role-based Authentication**: Secure login with Clerk authentication
- **Type-safe APIs**: Full-stack type safety with tRPC
- **Real-time Updates**: Live chat and notifications with Socket.io
- **File Management**: Secure file uploads with UploadThing
- **Responsive Design**: Modern UI with Tailwind CSS and shadcn/ui
- **Database**: MongoDB with Mongoose for flexible data modeling
- **Deployment Ready**: Docker containerization with CI/CD pipeline

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Backend**: Next.js API Routes, tRPC, MongoDB with Mongoose
- **Authentication**: Clerk
- **UI/UX**: Tailwind CSS, shadcn/ui components, Lucide React icons
- **Real-time**: Socket.io for live chat and notifications
- **File Upload**: UploadThing for media and document uploads
- **State Management**: TanStack React Query for server state
- **Deployment**: Docker, NGINX, SSL support
- **CI/CD**: GitHub Actions

## Project Structure

```
logicology-learning/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Main dashboard
│   │   ├── courses/           # Course pages
│   │   ├── sign-in/           # Authentication pages
│   │   └── sign-up/
│   ├── components/            # Reusable React components
│   │   ├── ui/               # Base UI components
│   │   ├── dashboard/        # Dashboard-specific components
│   │   └── courses/          # Course-related components
│   ├── lib/                  # Utility functions and configurations
│   ├── models/               # MongoDB/Mongoose models
│   ├── server/               # tRPC server configuration
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── .github/workflows/        # CI/CD pipelines
├── docker-compose.yml        # Docker composition
├── Dockerfile               # Container configuration
├── nginx.conf              # NGINX configuration
└── package.json            # Dependencies and scripts
```

## Database Models

### Core Models
- **User**: Student and admin profiles with role-based permissions
- **Course**: Course information, pricing, and enrollment data
- **Lecture**: Video content, resources, and transcripts
- **Classroom**: Virtual classroom scheduling and management
- **Test**: Quiz creation with multiple question types
- **TestSubmission**: Student test attempts and scoring
- **Chat**: Real-time messaging between users
- **Attendance**: Class attendance tracking
- **Note**: Course notes and resource sharing

## Getting Started

### Prerequisites
- Node.js 18 or later
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd logicology-learning
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/lms_database
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # UploadThing (for file uploads)
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Setup

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   - HTTP: http://localhost
   - HTTPS: https://localhost (requires SSL certificates)

## Configuration

### Authentication Setup (Clerk)
1. Sign up at [Clerk.com](https://clerk.com)
2. Create a new application
3. Copy the publishable key and secret key to your `.env.local`
4. Configure sign-in/sign-up pages in Clerk dashboard

### File Upload Setup (UploadThing)
1. Sign up at [UploadThing](https://uploadthing.com)
2. Create a new app
3. Add the secret and app ID to your environment variables

### MongoDB Setup
- **Local**: Install MongoDB locally or use Docker
- **Cloud**: Use MongoDB Atlas for production
- **Connection**: Update the `MONGODB_URI` in your environment

## Deployment

### Docker Deployment
1. **Build the Docker image**
   ```bash
   docker build -t lms-app .
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

### Production Deployment
1. **Set up a VPS or cloud server**
2. **Install Docker and Docker Compose**
3. **Clone the repository and configure environment**
4. **Run the application with SSL certificates**

### CI/CD with GitHub Actions
The project includes automated deployment via GitHub Actions:
- **Testing**: Runs on every push and PR
- **Building**: Creates Docker images on main branch
- **Deployment**: Deploys to production server

Required GitHub Secrets:
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password
- `PRODUCTION_HOST`: Production server IP
- `PRODUCTION_USER`: SSH username
- `PRODUCTION_SSH_KEY`: SSH private key

## API Routes

### tRPC Endpoints
- **auth**: User authentication and profile management
- **course**: Course CRUD operations and enrollment
- **classroom**: Virtual classroom management
- **lecture**: Video content and resources
- **test**: Quiz creation and submission
- **chat**: Real-time messaging
- **attendance**: Class attendance tracking
- **note**: Course notes and materials

## Development

### Code Structure
- **Components**: Follow the atomic design pattern
- **API**: Use tRPC for type-safe server communication
- **Styling**: Utility-first CSS with Tailwind
- **State**: Server state with React Query, client state with Zustand

### Best Practices
- TypeScript for type safety
- ESLint and Prettier for code quality
- Conventional commits for version control
- Component-driven development
- Mobile-first responsive design

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## Roadmap

### Phase 1 (Current)
- ✅ Basic course management
- ✅ User authentication
- ✅ Dashboard interfaces
- ✅ Docker deployment

### Phase 2 (Upcoming)
- 🔄 Real-time video streaming
- 🔄 Advanced test types
- 🔄 Mobile application
- 🔄 Analytics dashboard

### Phase 3 (Future)
- 📅 AI-powered recommendations
- 📅 Advanced reporting
- 📅 Multi-tenant support
- 📅 Integration marketplace

---

Built with ❤️ by the Logicology Learning team
