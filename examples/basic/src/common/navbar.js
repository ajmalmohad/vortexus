import { Nav, A } from "vortexus";

export const Navbar = Nav({
    class: "navbar",
    children: [
        A({
            href: "/",
            content: "Index"
        }),
        A({
            href: "/about",
            content: "About"
        })
    ]
})
