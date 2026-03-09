#  Fatima Ezzahra BARRADI - Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

Portfolio moderne et responsive pour **Fatima Ezzahra BARRADI**, mettant en valeur ses compétences en **Data, Business Intelligence et développement informatique**. Construit avec des technologies web de pointe.

🌐 **Live Demo:** `https://<your-vercel-app-url>`

---

## ✨ Features

### 🎯 Core Features
- **Responsive Design** – Works perfectly on mobile, tablet, and desktop.
- **Contact Form** – Intégration avec EmailJS pour l'envoi d'emails.
- **Animations Modernes** – Transitions fluides avec Tailwind CSS.
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
| **Next.js** | React Framework | 15.5.12 |
| **TypeScript** | Type Safety | 5.x |
| **Tailwind CSS** | Styling | 3.x |
| **React** | UI Components | 19.x |

### Integrations
| Technology | Purpose |
|------------|---------|
| **EmailJS** | Email service integration |
| **Lucide React** | Icons |
| **Sonner** | Toast notifications |

### Deployment
| Technology | Purpose |
|------------|---------|
| **Vercel** | Hosting & CI/CD |
| **GitHub** | Version Control |

---

## 📁 Project Structure

```text
fatima-portfolio/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Homepage
│   ├── contact/          # Contact page
│   │   └── page.tsx
│   ├── projects/         # Projects page
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # Composants React
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── public/                # Static assets
│   ├── fatima-photo.png
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
git clone https://github.com/fatimaezzahra137/your-repo-name
cd fatima-portfolio
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

Portfolio Live: `https://<your-vercel-app-url>`

GitHub Repository: https://github.com/fatimaezzahra137

## License
