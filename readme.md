#  Youssef Aibi - Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

A modern, responsive portfolio website for **Youssef Aibi**, showcasing skills in **Oracle Database Administration, Data Cleansing, and Law**. Built with cutting-edge web technologies.

🌐 **Live Demo:** [https://youssef-aibi.vercel.app](https://youssef-aibi.vercel.app)

---

## ✨ Features

### 🎯 Core Features
- **Responsive Design** – Works perfectly on mobile, tablet, and desktop.
- **Contact Form** – Integrated with EmailJS for direct email delivery.
- **Modern Animations** – Smooth transitions with Framer Motion.
- **Performance Optimized** – Lighthouse score 95+.
- **SEO Friendly** – Metadata and structured data included.

### 📱 Sections
1. **Hero** – Personal introduction with social links.
2. **About** – Professional background and experience.
3. **Skills** – Technical expertise with visual indicators.
4. **Projects** – Interactive project showcase.
5. **Contact** – Functional contact form with real-time validation.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 15.5.9 |
| **TypeScript** | Type Safety | 5.x |
| **Tailwind CSS** | Styling | 3.x |
| **React** | UI Components | 18.x |

### Integrations
| Technology | Purpose |
|------------|---------|
| **EmailJS** | Email service integration |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **Sonner** | Toast notifications |

### Deployment
| Technology | Purpose |
|------------|---------|
| **Vercel** | Hosting & CI/CD |
| **GitHub** | Version Control |
| **Google Analytics** | Visitor tracking |

---

## 📁 Project Structure

```text
yahya-portfolio/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Homepage
│   ├── contact/          # Contact page
│   │   └── page.tsx
│   ├── projects/         # Projects page
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # React Components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── lib/                   # Utilities
│   └── analytics.ts
├── public/                # Static assets
│   ├── yahyaphotopro.png
│   └── favicon.ico
├── .env.local             # Environment variables
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```
## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/youssefaibi2018-code/your-repo-name
cd youssef-portfolio
Install dependencies

npm install
# or
yarn install
# or
pnpm install
Set up environment variables

cp .env.local.example .env.local
Edit .env.local with your EmailJS credentials:

env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

```
## Run development server

```
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open your browser at http://localhost:3000

## Contact Form Setup

Create an EmailJS account – https://www.emailjs.com/

Add Gmail service (use App Password for authentication)

Create an email template with variables:

{{from_name}} – Sender's name

{{from_email}} – Sender's email

{{message}} – Message content

Copy Service ID, Template ID, and Public Key to .env.local

## Links

Portfolio Live: https://youssef-aibi.vercel.app

GitHub Repository: https://github.com/youssefaibi2018-code

## License

> *If I can’t even protect my captain’s dream, then whatever ambition I have is nothing but talk.*  
> — **Roronoa Zoro**, One Piece
