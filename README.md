## Authen

Authentication system built with Next.js, TypeScript, NextAuth, and MongoDB.

### User Registeration Form

![Image Description](public/screenshot/register.png)

### User Sign in Form

![Image Description](public/screenshot/sign-in.png)

### Overview

Authen is a simple authentication system that showcases how to implement user login and registration in web applications. It demonstrates the integration of Next.js with NextAuth.js for social login providers, along with MongoDB for storing user information.

### Features:

- 🔐 Multiple authentication providers (Google, GitHub)
- 👤 User management with MongoDB
- 🛡️ Role-based authorization
- 📝 Form validation with Zod
- 🎨 Customizable UI components (built with Shadcn & Tailwind CSS)
- 📱 Responsive design
- 🌐 TypeScript support for end-to-end type safety
- 🔄 Session management with NextAuth.js
- 📨 Toast notifications for user feedback

### Technologies:

- Framework: Next.js
- Authentication: NextAuth.js
- Database: MongoDB
- Language: Typescript
- Form Management: React Hook Form
- Validation: Zod
- UI Components: Headless UI
- Styling: Tailwind CSS

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/authen.git
cd authen

# Install dependencies
npm install
```

### Environment Setup

Create a .env.local file in the root directory with the following variables:

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-[npx auth secret]

# MongoDB
MONGODB_URI=your-mongodb-connection-string

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

### Usage

Starting the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the result.
