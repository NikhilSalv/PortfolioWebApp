export const personalData = {
  name: "Nikhil Salvi",
  title: "Full Stack AI Developer",
  email: "nikhil.salvi1207@gmail.com",
  phone: "+91 8956608905",
  location: "Pune India",
  bio: "Passionate developer with expertise in modern web technologies.",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  },
  skills: [
    {
      category: "Backend",
      items: ["Python", "Java"],
    },
    {
      category: "Frontend",
      items: ["JavaScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks",
      items: ["Flask", "FastAPI", "Django", "React.js"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Cloud",
      items: ["AWS Lambda", "EC2", "DynamoDB"],
    },
    {
      category: "CI/CD & DevOps",
      items: ["Docker", "Git", "GitHub Actions"],
    },
    {
      category: "Testing",
      items: ["Pytest", "Unittest"],
    },
    {
      category: "Machine Learning",
      items: [
        "Logistic Regression",
        "Linear Regression",
        "Random Forest",
        "Decision Tree",
        "KNN",
      ],
    },
    {
      category: "LLM & GenAI",
      items: ["RAG", "HuggingFace"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "GDPR Compliance Assistant using RAG & FastAPI",
      description: `A fully containerized Retrieval-Augmented Generation (RAG) system that extracts 
      and embeds GDPR PDF content, stores vectors in Pinecone, and retrieves the top-3 relevant passages 
      to generate accurate, context-aware answers using ChatGPT. Built with FastAPI for the backend 
      and HTML/CSS/JS for the frontend, it showcases expertise in AI-powered search, vector databases, 
      LLM integration, and containerized full-stack development.`,
      image: "/assets/images/project1.jpg",
      technologies: ["FastAPI", "RAG", "Pinecone", "Docker"],
      github: "https://github.com/NikhilSalv/CRA_Assistant",
      live: "https://github.com/NikhilSalv/CRA_Assistant"
    },
    {
      id: 2,
      title: "Microservices-Based User Authentication & Content Management System",
      description: `A containerized microservice architecture consisting of a 
      Django authentication service with OTP-based signup/login (via Gmail SMTP) 
      secured using JWT and bcrypt encryption. A ReactJS frontend communicates with the Django API, 
      while a PostgreSQL Docker service stores user credentials and OTPs, 
      forming a scalable foundation for a content management system.`,
      image: "/assets/images/project2.jpg",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      github: "https://github.com/NikhilSalv/CMS_Microservice",
      live: "https://github.com/NikhilSalv/CMS_Microservice"
    }
  ],
  blogPosts: [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React development...",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Modern JavaScript Features",
      excerpt: "Exploring ES6+ features that make JavaScript better...",
      date: "2024-01-10",
      readTime: "7 min read"
    }
  ]
};

