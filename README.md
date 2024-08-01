

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Idealização Banco de dados 

```mermaid
erDiagram
    COORDENADOR {
        string id PK
        string name
        string email
        string password
        datetime createDateTime
        datetime updateDateTime
    }

    PROJECT {
        string id PK
        string name
        string descricao
        string banner
        datetime createDateTime
        datetime updateDateTime
        boolean status
        string coordinator_id FK
    }

    DEV {
        string id PK
        string name
        string photo
        string project_id FK
    }

    ANJO {
        string id PK
        string name
        string photo
        string project_id FK
    }

    CATEGORY {
        string id PK
        string name
    }

    PROJECT_CATEGORY {
        string project_id FK
        string category_id FK
    }

    COORDENADOR ||--o{ PROJECT: "1..N"
    PROJECT ||--o{ DEV: "1..N"
    PROJECT ||--o{ ANJO: "1..N"
    PROJECT ||--o{ PROJECT_CATEGORY: "1..N"
    CATEGORY ||--o{ PROJECT_CATEGORY: "1..N"
    COORDENADOR ||--o{ DEV: "1..N"
    COORDENADOR ||--o{ ANJO: "1..N""
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
