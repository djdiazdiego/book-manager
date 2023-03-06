
export const ProjectRoutes = [
    { path: "book", loadChildren: () => import("./components/book/book.module").then(m => m.BookModule) },
];
