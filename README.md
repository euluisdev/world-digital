# World Digital — Institutional Website with data base

Institutional website developed for **World Digital**, focused on presenting digital marketing and technology services, strengthening the company's online presence, and connecting potential customers with its solutions.

🌐 **Live Demo:** [worlddigitaltec.firebaseapp.com](https://worlddigitaltec.firebaseapp.com)

## 📌 About the Project

World Digital is an institutional website developed to showcase the company's services, business solutions, and digital strategies.

The application provides visitors with an overview of the company's offerings through dedicated sections for services, business advantages, commercial plans, and customer contact.

In addition to the institutional content, the website includes a customer registration form integrated with **Firebase Cloud Firestore**, allowing submitted information to be stored in a cloud database and accessed by the business owner.

This project was developed during my early journey in web development and represents one of my first applications deployed to a production environment.

## ✨ Features

- **Institutional Presentation:** Homepage introducing the company and its digital solutions.
- **Services Showcase:** Dedicated presentation of technology and digital marketing services.
- **Business Differentials:** Section highlighting the company's competitive advantages.
- **Pricing and Plans:** Presentation of commercial solutions and service packages.
- **Customer Registration Form:** Interface for collecting information from potential customers.
- **Cloud Database Integration:** Form submissions are stored in Firebase Cloud Firestore.
- **Data Management:** The business owner can access submitted customer registration records through the Firebase Console.
- **Navigation:** Organized navigation between the main website sections.
- **Static Deployment:** Static site generation for deployment through Firebase Hosting.

## 📱 Responsive Design

The website was developed following a **Mobile First** approach, prioritizing the mobile user experience and progressively adapting the interface to larger screen sizes.

- Fully responsive layout across mobile, tablet, and desktop devices.
- Mobile-first design strategy.
- Flexible layouts and adaptive components.
- Consistent user experience across different screen sizes.

## 🔄 Customer Registration Workflow

The website includes a registration form connected to Firebase Cloud Firestore.

The workflow follows these steps:

1. A visitor accesses the website and fills out the registration form.
2. The application processes the submitted information.
3. The registration data is sent to Cloud Firestore.
4. The information is stored in the cloud database.
5. The business owner accesses the submitted records through the Firebase Console for customer follow-up.

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| JavaScript | Application development |
| React | Component-based user interface |
| Next.js 15 | Application framework and static site generation |
| Firebase SDK | Integration with Firebase services |
| Cloud Firestore | Cloud database and data persistence |
| Firebase Hosting | Production deployment |
| Swiper | Interactive content sliders |
| React Icons | Interface icons |

## 📂 Project Structure

```text
world-digital/
│
├── components/       # Reusable interface components
│
├── public/           # Static assets
│
├── src/
│   └── app/          # Next.js application
│
├── firebase.json     # Firebase Hosting configuration
├── .firebaserc       # Firebase project configuration
├── next.config.mjs   # Next.js static export configuration
├── package.json      # Dependencies and scripts
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm

### 1. Clone the repository

```bash
git clone https://github.com/euluisdev/world-digital.git
```

### 2. Navigate to the project directory

```bash
cd world-digital
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Production Build

The project is configured for static export using Next.js.

Generate the production build:

```bash
npm run build
```

The generated static files are placed in the `out/` directory.

## 🚀 Deployment

The application is hosted using Firebase Hosting.

The deployment configuration points to the generated `out/` directory.

To deploy a new version, with Firebase CLI configured and authenticated:

```bash
firebase deploy --only hosting
```

## 🌐 Live Application

[https://worlddigitaltec.firebaseapp.com](https://worlddigitaltec.firebaseapp.com)

## 👨‍💻 Developer

**Luís Fernando**

- GitHub: [@euluisdev](https://github.com/euluisdev)
