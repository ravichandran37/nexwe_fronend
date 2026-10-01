export const projects = [
  {
    id: 1,
    number: "01",
    editorialLabel: "01 // RESTAURANT SYSTEM",
    title: "CRAVO KITCHEN & BAR",
    image: "/projects/cravo.jpg",
    liveUrl: "https://cravo-two.vercel.app",
    features: [
      "Online Food Ordering",
      "Kitchen Dashboard",
      "Live Stock Control"
    ],
    badges: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT Auth", "REST API"],
    caseStudy: {
      overview: "A modern, high-performance food ordering website and comprehensive administrative management platform engineered for Cravo Kitchen & Bar. The platform bridges customer storefront ordering with real-time kitchen operations, providing instantaneous dish search, dynamic cart calculations with free delivery thresholds, automated tax computations, and a secured JWT admin portal for live ticket tracking and menu management.",
      problem: "Independent culinary venues frequently encounter heavy third-party marketplace commissions (up to 30%), clunky ordering experiences that cause customer abandonment, and an absence of direct, real-time ticket orchestration in the kitchen.",
      solution: "Engineered a bespoke, commission-free fullstack restaurant solution with a client storefront boasting instant dish filtering, dynamic subtotal calculations, and streamlined checkout, alongside an authenticated administrative suite for live order status updates (Pending → Preparing → Ready → Delivered) and instant dish inventory toggling.",
      features: "Features multi-category filtering (Burgers, Pizza, Chicken, Snacks, Drinks, Desserts), dynamic search, quantity adjustments, transparent delivery milestones (free delivery over $40), tax calculation (8.25%), kitchen dashboard with live metrics (Total Orders, Pending, Preparing, Ready, Delivered), and one-click stock toggle.",
      architecture: "Decoupled architecture: Vite + React 19 + TypeScript frontend with Tailwind CSS and Lucide React, styled using Google Stitch AI's Warm Epicurean design tokens. Communicates via typed REST endpoints with a Node.js/Express backend, JWT token protection, bcrypt password hashing, and MySQL database persistence with auto-detecting embedded dev mode.",
      technologies: "React 19, TypeScript, Vite, Tailwind CSS, React Router DOM v7, Node.js, Express.js, MySQL, JWT, bcryptjs, Lucide React, Google Stitch AI.",
      challenges: "Synchronizing real-time order lifecycle changes across customer checkout and admin dashboard while upholding warm epicurean typography, responsive layout fluidity, and enterprise-grade input validation.",
      result: "Deployed live to production at cravo-two.vercel.app with zero-configuration embedded resiliency, providing a premium dining experience and seamless kitchen operational efficiency."
    }
  },
  {
    id: 2,
    number: "02",
    editorialLabel: "02 // E-COMMERCE",
    title: "E-COMMERCE PLATFORM",
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://cravo-two.vercel.app",
    features: [
      "Dynamic Product Catalog",
      "Secure Cart & Checkout",
      "Order Management Engine"
    ],
    badges: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL", "REST API"],
    caseStudy: {
      overview: "A comprehensive e-commerce platform designed to provide a seamless shopping experience. It handles everything from user registration to product browsing and order management.",
      problem: "Traditional physical stores are limited by geography and business hours. Customers need a 24/7 accessible platform to browse and purchase products conveniently.",
      solution: "Developed a full-stack web application with a responsive frontend for users and a robust Django backend to manage inventory, users, and orders securely.",
      features: "Includes secure user authentication, dynamic product catalog, shopping cart functionality, order processing, and REST APIs for potential mobile app integration.",
      architecture: "The application follows a client-server architecture. The frontend uses HTML/CSS/JS communicating with a Django REST API, which in turn reads and writes to a MySQL database.",
      technologies: "Python, Django, HTML, CSS, JavaScript, MySQL, REST API.",
      challenges: "Ensuring secure user authentication and designing a normalized database schema to handle products, users, and orders efficiently without redundancy.",
      result: "A fully functional, responsive e-commerce platform capable of handling user registration, product browsing, and seamless order management."
    }
  },
  {
    id: 3,
    number: "03",
    editorialLabel: "03 // AI & AUTOMATION",
    title: "AI CUSTOMER SUPPORT CHATBOT",
    image: "/projects/chatbot.jpg",
    liveUrl: "https://cravo-two.vercel.app",
    features: [
      "Natural Language Processing",
      "Intent Classification Engine",
      "Automated Support Triage"
    ],
    badges: ["Python", "Django", "Django REST Framework", "Scikit-learn", "NLP", "MySQL"],
    caseStudy: {
      overview: "An intelligent chatbot integrated into a web platform to assist users with common queries, significantly reducing the workload on human support agents.",
      problem: "Customer support teams often spend a significant amount of time answering repetitive questions, leading to delayed response times for more complex issues.",
      solution: "Implemented an AI-driven chatbot using Natural Language Processing (NLP) to understand user intents and provide immediate, context-aware responses.",
      features: "Features text preprocessing, tokenization, intent classification using machine learning models, and a RESTful API for seamless integration with frontend interfaces.",
      architecture: "User messages are sent to the Django backend via REST API. The backend preprocesses the text, tokenizes it, and feeds it into an ML classifier. The classified intent triggers the appropriate response generation.",
      technologies: "Python, Django, Django REST Framework, Scikit-learn, NLP, MySQL.",
      challenges: "Training the intent classification model with sufficient and diverse data to ensure high accuracy and handling edge cases where the bot doesn't understand the query.",
      result: "A responsive chatbot capable of handling a wide variety of customer queries instantly, demonstrating the practical application of NLP in web services."
    }
  }
];
