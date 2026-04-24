import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

export const listTools = [
  // Backend
  { id: 1, gambar: "/assets/tools/java.png", nama: "Java 8–17", ket: "Backend", dad: "100" },
  { id: 2, gambar: "/assets/tools/spring.png", nama: "Spring Boot", ket: "Backend", dad: "200" },
  { id: 3, gambar: "/assets/tools/microservices.png", nama: "Microservices", ket: "Backend", dad: "300" },
  { id: 4, gambar: "/assets/tools/hibernate.png", nama: "Hibernate", ket: "Backend", dad: "400" },
  
  // Frontend
  { id: 5, gambar: "/assets/tools/reactjs.png", nama: "React.js", ket: "Frontend", dad: "500" },
  { id: 6, gambar: "/assets/tools/js.png", nama: "JavaScript", ket: "Frontend", dad: "600" },
  { id: 7, gambar: "/assets/tools/html.png", nama: "HTML", ket: "Frontend", dad: "700" },
  { id: 8, gambar: "/assets/tools/tailwind.png", nama: "Tailwind CSS", ket: "Frontend", dad: "800" },

  // Database
  { id: 9, gambar: "/assets/tools/mysql.png", nama: "MySQL", ket: "Database", dad: "900" },
  { id: 10, gambar: "/assets/tools/PostgreSQL.png", nama: "PostgreSQL", ket: "Database", dad: "1000" },
  { id: 11, gambar: "/assets/tools/mongodb.png", nama: "MongoDB", ket: "Database", dad: "1100" },
  { id: 12, gambar: "/assets/tools/redis.png", nama: "Redis", ket: "Database", dad: "1200" },

  // Cloud & DevOps
  { id: 13, gambar: "/assets/tools/aws.png", nama: "AWS", ket: "Cloud", dad: "1300" },
  { id: 14, gambar: "/assets/tools/docker.png", nama: "Docker", ket: "DevOps", dad: "1400" },
  { id: 15, gambar: "/assets/tools/kubernetes.png", nama: "Kubernetes", ket: "DevOps", dad: "1500" },
  { id: 16, gambar: "/assets/tools/jenkins.png", nama: "Jenkins", ket: "CI/CD", dad: "1600" },

  // Messaging & Testing
  { id: 17, gambar: "/assets/tools/kafka.png", nama: "Kafka", ket: "Messaging", dad: "1700" },
  { id: 18, gambar: "/assets/tools/rest.png", nama: "REST APIs", ket: "Messaging", dad: "1800" },
  { id: 19, gambar: "/assets/tools/junit.png", nama: "JUnit", ket: "Testing", dad: "1900" },
  { id: 20, gambar: "/assets/tools/elk.png", nama: "ELK Stack", ket: "Monitoring", dad: "2000" },
];

export const listProyek = [
  {
    id: 1,
    image: "/assets/proyek/b2b_logo.jpg",
    title: "Gulbarga B2B Accounts",
    subtitle: "Full-Stack Business Management Dashboard",
    fullDescription: "A production-grade, offline-capable business accounting dashboard built for Gulbarga B2B Services. Key features: \n• Real-time financial metrics (Sales, Dues, Expenses)\n• Inventory management with auto-deduction on sales\n• WhatsApp reminder integration for dues\n• Professional A4 PDF invoice generator\n• Cloudflare Edge architecture (Workers, D1, R2)\n• PWA support for offline access.",
    borderColor: "#4f46e5",
    gradient: "linear-gradient(145deg, #4f46e5, #000)",
    url: "https://b2b-gulbarga-accounts.pages.dev",
    dad: "100",
  },
  {
    id: 2,
    image: "/nl_connect.png",
    title: "N&L Connect",
    subtitle: "Skeuomorphic SuperApp Ecosystem",
    fullDescription: "An ambitious mobile ecosystem integrating Chat, Music, AI, and Gaming with a custom skeuomorphic UI. Built with React and AI integrations.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://nl-connect.pages.dev/home",
    dad: "200",
  },
  {
    id: 3,
    image: "/bites_n_more.png",
    title: "Bites N' More",
    subtitle: "Full Stack ERP for Restaurants",
    fullDescription: "Complete restaurant automation system: Customer App, Kitchen Display, Admin Portal, and Rider Tracking. Built with Java Spring Boot and React.",
    borderColor: "#f97316",
    gradient: "linear-gradient(145deg, #f97316, #000)",
    url: "https://bnm-customer.pages.dev/",
    dad: "300",
  },
  {
    id: 4,
    image: "/ramzan.png",
    title: "Ramzan 2026",
    subtitle: "Islamic Utility & Live Feed App",
    fullDescription: "Comprehensive Islamic utility with prayer times, Quran player, and live Mecca/Madina feeds. Built with Vite and Firebase.",
    borderColor: "#10b981",
    gradient: "linear-gradient(145deg, #10b981, #000)",
    url: "https://ramzan2026.vercel.app/",
    dad: "400",
  },
  {
    id: 5,
    image: "/time_machine.png",
    title: "Time Machine",
    subtitle: "Python Hex-Key Decryption Tool",
    fullDescription: "Automated decryption tool for recovering gallery files using hex-key manipulation. Specialized Python utility for file recovery.",
    borderColor: "#8b5cf6",
    gradient: "linear-gradient(145deg, #8b5cf6, #000)",
    url: "#",
    dad: "500",
  },
  {
    id: 6,
    image: "/assets/proyek/kct_events.png",
    title: "KCT Events",
    subtitle: "College Event Management Android App",
    fullDescription: "Explore upcoming events, view the event timetable, and book tickets seamlessly. Built for Android.",
    borderColor: "#F97316",
    gradient: "linear-gradient(145deg, #F97316, #000)",
    url: "https://kct-events.en.uptodown.com/android",
    dad: "600",
  },
  {
    id: 7,
    image: "/assets/proyek/python_data.png",
    title: "Data Analytics Suite",
    subtitle: "8 Python Data Analysis Projects",
    fullDescription: "Meticulous analysis of Weather, Cars, Police, Covid, London Housing, Census, Udemy, and Netflix datasets using Pandas and Matplotlib.",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #000)",
    url: "#",
    dad: "700",
  },
  {
    id: 8,
    image: "/assets/proyek/madrasa.png",
    title: "Madrasa Darut Taleem",
    subtitle: "Educational & Community Portal",
    fullDescription: "A comprehensive website for a madrasa featuring results, gallery, donations, and course listings.",
    borderColor: "#065f46",
    gradient: "linear-gradient(145deg, #065f46, #000)",
    url: "https://daruttaleemwattarbiyah.netlify.app/",
    dad: "800",
  },
  {
    id: 9,
    image: "/assets/proyek/snake_game.png",
    title: "Snake Game Android",
    subtitle: "Modern Mobile Arcade Experience",
    fullDescription: "A modern take on the classic Snake game, optimized for mobile experience and smooth performance.",
    borderColor: "#ef4444",
    gradient: "linear-gradient(145deg, #ef4444, #000)",
    url: "https://com-mukeshsolanki-snake.en.uptodown.com/android",
    dad: "900",
  },
  {
    id: 10,
    image: "/assets/proyek/python_data.png",
    title: "Jupyter WebApp Demo",
    subtitle: "Notebook-to-Web Application",
    fullDescription: "Code for creating interactive web applications using Jupyter Notebook and Voila rendering engine.",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg, #f59e0b, #000)",
    url: "https://mybinder.org/v2/gh/nghweigeok/jupyter_webapp_demo/HEAD?urlpath=%2Fvoila%2Frender%2FDemo.ipynb",
    dad: "1000",
  },
];
