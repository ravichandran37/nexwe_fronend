export const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "A full-stack e-commerce web application built using Python, Django, HTML, CSS, JavaScript and MySQL.",
    badges: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL", "REST API"],
    features: [
      "User Authentication",
      "Product Catalog",
      "Order Management",
      "REST APIs",
      "Database Integration",
      "Responsive UI"
    ],
    architectureSteps: [
      "Frontend (HTML/CSS/JS)",
      "Django REST API",
      "MySQL Database"
    ],
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
    id: 2,
    title: "AI Customer Support Chatbot",
    description: "An AI-powered customer support chatbot using Natural Language Processing and Machine Learning.",
    badges: ["Python", "Django", "Django REST Framework", "Scikit-learn", "NLP", "MySQL"],
    features: [
      "Text Preprocessing",
      "Tokenization",
      "Intent Classification",
      "REST APIs",
      "External API Integration",
      "Context-aware Responses"
    ],
    architectureSteps: [
      "User Message",
      "Text Preprocessing",
      "Tokenization",
      "Intent Classification",
      "Response Generation",
      "API Response"
    ],
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
