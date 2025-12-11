export interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  code: string;
  demo: string;
  video?: string;
  image?: string | null;
}


export const projectsData: Project[] = [
  {
    id: 1,
    name: "ZK-SNARK Private Voting System",
    description: "A complete zero-knowledge proof voting system with smart contracts, nullifier-based privacy, and modern UI. Implements ZK circuits using Circom for anonymous voting while ensuring vote integrity and preventing double voting through nullifier hashes.",
    tools: ["Solidity", "Go", "Node.js", "Circom", "ZK-SNARKs", "React"],
    code: "https://github.com/smithp17/zsnark-voting-system-smartcontract-",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
    image: null
  },
  {
    id: 2,
    name: "Botfolio - AI Resume Chatbot",
    description: "Solved real-world hiring challenges by automating resume screening, reducing recruiter workload by 60%. Job seekers upload resumes and generate unique AI-powered chatbot links. Prompt-engineered OpenAI GPT-4 for real-time Q&A with recruiters. Ensured 100% chat anonymity with in-memory processing.",
    tools: ["React.js", "OpenAI GPT-4", "Node.js", "Firebase", "Prompt Engineering"],
    code: "https://github.com/smithp17/Botfolio_Application",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    image: null
  },
  {
    id: 3,
    name: "Event Management Platform",
    description: "Full-stack EventBrite-style platform with comprehensive role-based access control featuring regular users, RSO users, and administrators. Includes dual authentication, event CRUD operations, real-time messaging with Socket.io, and bulk import capabilities.",
    tools: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.io", "Docker", "Kubernetes"],
    code: "https://github.com/smithp17/Event-Management-App",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    image: null
  },
  {
    id: 4,
    name: "Blockchain AI Analyzer",
    description: "Ethereum blockchain data analysis tool combining Web3.py with Perplexity AI and ChromaDB vector database for production deployment. Analyzes transactions, smart contracts, and provides AI-powered insights on blockchain activity.",
    tools: ["Python", "Web3.py", "Perplexity AI", "ChromaDB", "Ethereum", "React", "FastAPI"],
    code: "https://github.com/smithp17/BlockChain-data-AI-analyzer",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
    image: null
  },
  {
    id: 5,
    name: "AutoDialer System",
    description: "Automated dialing system for efficient outbound calling campaigns. Features intelligent call scheduling, comprehensive contact management, and real-time analytics dashboard for tracking campaign performance and conversion rates.",
    tools: ["Python", "Twilio", "React", "Node.js", "MongoDB", "WebSocket", "Redis"],
    code: "https://github.com/smithp17/AutoDialer",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
    image: null
  },
  {
    id: 6,
    name: "Credit Card Fraud Detection",
    description: "End-to-end ML project for fraud detection using Logistic Regression, Random Forest, and XGBoost. Applied PCA for dimensionality reduction and handled imbalanced data. Achieved 90% accuracy with comprehensive evaluation. Deployed using AWS services.",
    tools: ["Python", "Scikit-learn", "XGBoost", "AWS Elastic Beanstalk", "Lambda", "S3", "PCA"],
    code: "https://github.com/smitpatne/fraud-detection",
    demo: "",
    video: "",
    image: null
  },
  {
    id: 7,
    name: "PWC Customer Forecasting",
    description: "Built classification model using Artificial Neural Network (ANN) to predict customer response in bank marketing campaigns. Pre-processed data with one-hot encoding and feature engineering. Implemented LIME for model interpretability, achieving 85% accuracy.",
    tools: ["Python", "TensorFlow", "Keras", "LIME", "Pandas", "NumPy", "Matplotlib"],
    code: "https://github.com/smitpatne/customer-forecasting",
    demo: "",
    video: "",
    image: null
  }
];

