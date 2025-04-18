import { nanoid } from "nanoid";

const mainMenuItems = [
    {
        id: nanoid(),
        href: "/",
        text: "Main Page"
    },
    {
        id: nanoid(),
        href: "/categories/all",
        text: "Categories"
    },
    {
        id: nanoid(),
        href: "/products/all",
        text: "All products"
    },
    {
        id: nanoid(),
        href: "/sales/all",
        text: "All sales"
    },
];

export default mainMenuItems;