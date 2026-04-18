import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'NeuralChat — AI Conversational Platform',
    description:
      'A real-time AI chatbot platform built with GPT-4 integration, supporting multi-turn conversations, context memory, and semantic search across chat history.',
    longDescription:
      'NeuralChat is a production-grade conversational AI platform featuring real-time streaming responses, multi-turn context management, and vector-based semantic search. Built with a microservices architecture for scalability.',
    techStack: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Pinecone', 'MongoDB', 'Socket.io', 'Docker'],
    githubLink: 'https://github.com/alexmorgan-dev/neuralchat',
    liveLink: 'https://neuralchat-demo.vercel.app',
    image: '/projects/neuralchat.png',
    category: 'ai-ml',
    featured: true,
  },
  {
    id: 2,
    title: 'MediScan — Medical Image Classifier',
    description:
      'Deep learning-powered medical image classification system achieving 96.2% accuracy on chest X-ray diagnosis using custom CNN architecture with attention mechanisms.',
    longDescription:
      'MediScan leverages transfer learning with EfficientNet-B4 backbone and custom attention layers to classify medical images. Features include GRAD-CAM visualizations, DICOM file support, and a clinical dashboard.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'AWS S3'],
    githubLink: 'https://github.com/alexmorgan-dev/mediscan',
    liveLink: 'https://mediscan-app.herokuapp.com',
    image: '/projects/mediscan.png',
    category: 'ai-ml',
    featured: true,
  },
  {
    id: 3,
    title: 'ShopFlow — E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with real-time inventory management, Stripe payment integration, admin dashboard, and AI-powered product recommendations.',
    longDescription:
      'ShopFlow is a complete e-commerce solution featuring role-based access control, real-time inventory tracking, Stripe checkout, order management, and a recommendation engine powered by collaborative filtering.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe', 'Tailwind CSS'],
    githubLink: 'https://github.com/alexmorgan-dev/shopflow',
    liveLink: 'https://shopflow-store.vercel.app',
    image: '/projects/shopflow.png',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 4,
    title: 'SentimentScope — NLP Analytics Dashboard',
    description:
      'Real-time sentiment analysis dashboard processing social media feeds using BERT-based models with interactive visualizations and trend detection.',
    longDescription:
      'SentimentScope processes live Twitter and Reddit feeds through a fine-tuned BERT model for sentiment classification. Features include real-time streaming charts, topic modeling, and exportable analytics reports.',
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'React', 'D3.js', 'FastAPI', 'Kafka'],
    githubLink: 'https://github.com/alexmorgan-dev/sentimentscope',
    image: '/projects/sentiment.png',
    category: 'ai-ml',
    featured: true,
  },
  {
    id: 5,
    title: 'DevConnect — Developer Social Network',
    description:
      'A social networking platform for developers featuring real-time messaging, code sharing with syntax highlighting, project collaboration, and developer matching.',
    longDescription:
      'DevConnect connects developers through intelligent matching based on tech stacks and interests. Features include real-time chat, code snippet sharing, project boards, and an activity feed powered by WebSockets.',
    techStack: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'MongoDB', 'Socket.io', 'AWS'],
    githubLink: 'https://github.com/alexmorgan-dev/devconnect',
    liveLink: 'https://devconnect-social.vercel.app',
    image: '/projects/devconnect.png',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 6,
    title: 'AutoML Pipeline Builder',
    description:
      'Visual drag-and-drop interface for building end-to-end machine learning pipelines with automated feature engineering, model selection, and hyperparameter tuning.',
    longDescription:
      'A no-code ML pipeline builder that allows data scientists to visually construct ML workflows. Supports automated EDA, feature engineering, model comparison, and one-click deployment to REST endpoints.',
    techStack: ['React', 'Python', 'Scikit-learn', 'FastAPI', 'Celery', 'PostgreSQL', 'Docker'],
    githubLink: 'https://github.com/alexmorgan-dev/automl-builder',
    image: '/projects/automl.png',
    category: 'ai-ml',
    featured: false,
  },
];
