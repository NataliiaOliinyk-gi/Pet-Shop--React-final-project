import { nanoid } from "nanoid";

const mainMenuItems = [
    {
        id: nanoid(),
        href: "/",
        text: "Main Page"
    },
    {
        id: nanoid(),
        href: "/categories",
        text: "Categories"
    },
    {
        id: nanoid(),
        href: "/products",
        text: "All products"
    },
    {
        id: nanoid(),
        href: "/sales",
        text: "All sales"
    },
];

export default mainMenuItems;