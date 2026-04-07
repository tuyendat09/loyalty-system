## 📁 Folder Structure

```
src/
├── assets/
├── components/                        # Shared toàn app
│   ├── ui/
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   ├── AuthLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   └── common/
├── pages/
│   ├── _auth/                         # Layout group auth
│   │   ├── login/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── components/
│   │   │   └── hooks/
│   │   └── register/
│   │       ├── RegisterPage.tsx
│   │       ├── components/
│   │       └── hooks/
│   │
│   └── _dashboard/                    # Layout group dashboard
│       ├── dashboard/
│       │   ├── DashboardPage.tsx
│       │   ├── components/
│       │   └── hooks/
│       └── users/
│           ├── UsersPage.tsx
│           ├── components/
│           └── hooks/
├── services/                          # Tất cả API calls, chia theo domain
│   ├── auth/
│   │   └── authService.ts
│   ├── users/
│   │   └── userService.ts
│   └── orders/
│       └── orderService.ts
├── types/                             # Tất cả types, chia theo domain
│   ├── auth/
│   │   └── auth.types.ts
│   ├── users/
│   │   └── user.types.ts
│   └── orders/
│       └── order.types.ts
├── routes/
│   ├── routes.ts
│   ├── AppRoutes.tsx
│   ├── ProtectedRoute.tsx
│   └── PublicRoute.tsx
├── stores/
│   └── useAuthStore.ts
├── hooks/                         # Hooks shared toàn app
│   └── useInitAuth.ts
├── lib/
│   ├── axios.ts
│   ├── validations.ts
│   └── utils.ts
├── App.tsx
└── main.tsx
```

## 📐 Quy tắc đặt Component

Component này dùng ở 2 page trở lên?

- **Có** → `src/components/`
- **Không** → `src/pages/<tên-page>/components/`

Ví dụ:

| Component       | Đặt ở                         | Lý do                |
| --------------- | ----------------------------- | -------------------- |
| `<Button />`    | `components/ui/`              | Dùng khắp app        |
| `<Sidebar />`   | `components/layout/`          | Layout chung         |
| `<StatsCard />` | `pages/dashboard/components/` | Chỉ dùng ở dashboard |
| `<UserTable />` | `pages/users/components/`     | Chỉ dùng ở users     |


# loyalty-system

<div align="center" style="margin: 30px;">
    <a href="https://refine.dev">
    <img alt="refine logo" src="https://refine.ams3.cdn.digitaloceanspaces.com/readme/refine-readme-banner.png">
    </a>
</div>
<br/>

This [Refine](https://github.com/refinedev/refine) project was generated with [create refine-app](https://github.com/refinedev/refine/tree/master/packages/create-refine-app).

## Getting Started

A React Framework for building internal tools, admin panels, dashboards & B2B apps with unmatched flexibility ✨

Refine's hooks and components simplifies the development process and eliminates the repetitive tasks by providing industry-standard solutions for crucial aspects of a project, including authentication, access control, routing, networking, state management, and i18n.

## Available Scripts

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

## Learn More

To learn more about **Refine**, please check out the [Documentation](https://refine.dev/docs)

- **REST Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Tailwind CSS** [Docs](https://refine.dev/docs/guides-concepts/general-concepts/#headless-concept)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)
- **Custom Auth Provider** [Docs](https://refine.dev/docs/core/providers/auth-provider/)

## License

MIT
