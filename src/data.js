// all my info lives here so i only have to change one file
export const profile = {
  name: 'Hussain',
  fullName: 'Muhammad Hussain Jaura',
  role: 'Full Stack Software Engineer',
  headline: 'Turning ideas into fast, reliable web apps with Full Stack Engineering',
  intro:
    "I'm a Software Engineering student at Solent University in Southampton, and I've just finished a Software Engineer internship at Co-op. I build full stack apps with React, Node.js and Express, ship them to the cloud on AWS, and I'm always looking for the next hard problem to solve.",
  location: 'Southampton, UK',
  email: 'hussainjaura10@gmail.com',
  // put ur photo in public/ with this name
  photo: 'me.jpg',
  // drop the pdf in public/ and set this to 'cv.pdf'
  cv: '',
  socials: {
    github: 'https://github.com/hussainjaura',
    linkedin: 'https://www.linkedin.com/in/muhammad-hussain-jaura-b303482b1/',
    youtube: '',
  },
}

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Co-op',
    location: 'London, UK · Hybrid',
    period: 'Jan 2026 - Aug 2026',
    logo: 'Co',
    logoImg: 'logos/the_co_op_group_logo.jpg',
    summary: "Part of the engineering team building and maintaining scalable apps used across Co-op's digital platforms.",
    points: [
      'Worked with product, design and QA teams in an agile enviroment.',
      'Contributed to full stack feature development using modern web tech.',
      'Helped build and maintain RESTful APIs.',
      'Improved app performance and resolved production issues.',
      'Took part in code reviews and followed engineering best practices.',
      'Supported testing and deployment processes.',
    ],
    tags: ['Full stack', 'REST APIs', 'Docker', 'Agile', 'Web Engineering', 'Software Design'],
  },
]

export const skills = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Technologies & Frameworks',
    items: ['React', 'Node.js', 'Express.js', 'Django', 'Vite', 'Socket.IO', 'EJS', 'Mongoose', 'Sequelize', 'Jest'],
  },
  {
    title: 'Cloud, DevOps & Databases',
    items: ['AWS Lambda', 'AWS Amplify', 'Docker', 'GitHub Actions', 'Render', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Git'],
  },
  {
    title: 'Core Competencies',
    items: ['Full stack development', 'REST APIs & web services', 'Data structures & algorithms', 'Database design', 'Responsive UI / UX', 'Agile & testing', 'Debugging', 'AI & LLMs'],
  },
]

export const education = [
  {
    school: 'Solent University',
    degree: 'BSc (Hons) Software Engineering',
    location: 'Southampton, UK',
    period: 'Sep 2024 - Jun 2027',
    note: 'Currently maintaining First-Class level, working on my final year dissertation. Awarded a 20% tuition discount for academic performance.',
    logo: 'SU',
    logoImg: 'logos/solentuni_logo.jpg',
  },
  {
    school: 'Lahore Grammar School',
    degree: 'Matriculation (SSC), Computer Science / IT',
    location: 'Lahore, Pakistan',
    period: 'May 2012 - Sep 2022',
    note: 'Graduated with 1,057 marks.',
    logo: 'LGS',
    logoImg: 'logos/lahore_grammar_school_logo.jpg',
  },
]

export const certificates = [
  { name: 'Certificate in Practical Artificial Intelligence', issuer: 'Solent University', date: 'Feb 2026', logo: 'SU', logoImg: 'logos/solentuni_logo.jpg', skills: 'LLMs · AI' },
  { name: 'Getting Started with Artificial Intelligence', issuer: 'IBM', date: 'Feb 2026', logo: 'IBM', logoImg: 'logos/ibm_logo.jpg', skills: 'Algorithm design · Back-end' },
]

export const different = [
  "I don't stop at the tutorial. Every project I build gets real auth, a real database and a real deploy, because thats where the actual learning happens.",
  "I'm comfortable across the whole stack, from designing a normalised schema and writing triggers, to building REST APIs in Express, to shipping a React UI on AWS. I care about clean code that the next person can read.",
  'I keep my problem solving sharp on LeetCode and I learn fast. Give me a new tool and I will have something running with it by the end of the day.',
]

export const achievements = [
  { title: 'Software Engineer Intern at Co-op', desc: 'Eight months on a real engineering team shipping features and APIs used across Co-op digital platforms.', icon: '💼' },
  { title: '20% tuition scholarship', desc: 'Awarded a 20% tuition discount at Solent University for academic performance.', icon: '🎓' },
  { title: 'Highest mark, 93%', desc: 'Top grade on the full stack Theme Park assessment, while keeping a First-Class average.', icon: '🏆' },
]

export const projects = [
  {
    name: 'HalalNearMe',
    tag: 'Personal project',
    tech: ['React 19', 'Node.js', 'Express', 'AWS Lambda', 'AWS Amplify', 'PostgreSQL', 'JWT'],
    points: [
      'Finds halal restaurants near you anywhere in the UK with live GPS or city search.',
      'Serverless Express backend on AWS Lambda, frontend hosted on Amplify.',
      'JWT auth with protected routes and saved places in Neon Postgres.',
    ],
    live: 'https://main.d3uol1yp55se1c.amplifyapp.com',
    repo: 'https://github.com/hussainjaura/HalalNearMe',
  },
  {
    name: 'Jaura & Co Clothing',
    tag: 'Internship project',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Stripe', 'Jest'],
    points: [
      'Full e-commerce store with accounts, cart and Stripe checkout.',
      'Persistant cart in MySQL through the Sequelize ORM.',
      'Winston logging, Helmet security and Jest tests.',
    ],
    live: 'https://jaura-co-website.onrender.com',
    repo: 'https://github.com/hussainjaura/Jaura-Co-Website',
  },
  {
    name: 'Online Retail Database',
    tag: 'University assessment',
    tech: ['SQLite', 'SQL', 'Python', 'Tkinter'],
    points: [
      'Taken from business requirements to 3NF with a 6 table ERD.',
      'Triggers keep stock in sync, views power the reports.',
      'Python desktop app with CRUD and parameterised queries.',
    ],
    repo: 'https://github.com/hussainjaura/online-retail-database',
  },
  {
    name: 'Task Manager',
    tag: 'Internship project',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    points: [
      'Add, edit, star and complete tasks with live updates.',
      'Real time sync across clients with WebSockets.',
      'Mongoose schemas with env based config.',
    ],
    live: 'https://task-manager-hoaa.onrender.com',
    repo: 'https://github.com/hussainjaura/Task-Manager',
  },
  {
    name: 'Theme Park Website',
    tag: 'University assessment · 93%',
    tech: ['Node.js', 'Express', 'SQLite3', 'EJS', 'AJAX'],
    points: [
      'Rides, tickets, events and FAQ pages driven by SQLite.',
      'AJAX filtering and a spin the wheel discount game.',
      'Got the highest mark in the assessment.',
    ],
    repo: 'https://github.com/hussainjaura/Theme-Park',
  },
]
