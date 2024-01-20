import { Body, Page, Button, H1, H3, Head, Meta, Title, A } from "vortexus";
import { Box } from "../common/box.js";

const home = new Page()

home.addStylesheetFile("src/home/home.css")
home.addScriptFile("src/home/script.js")

const head = Head({
    children: [
        Title({
            content: "Vortexus"
        }),
        Meta({
            name: "description",
            content: "Over Complicate Multi Page Web Apps"
        }),
        Meta({
            name: "keywords",
            content: "vortexus, vortexusjs, vortexus.js, vortexus-js, vortexus js, vortexus-js, vortexus js, vortexusjs.org, vortexus.org, vortexusjs.com, vortexus.com, vortexusjs.net, vortexus.net, vortexusjs.io, vortexus.io, vortexusjs.dev, vortexus.dev"
        }),
    ]
})

const body = Body({
    children: [
        H1({
            content: "Vortexus"
        }),
        H3({
            content: "Over Complicate Multi Page Web Apps"
        }),
        Button({
            content: "Home",
            class: "home-button",
        }),
        A({
            content: "Index",
            href: "./index",
            class: "index-link"
        }),
        Box,
    ]
})

home.head = head
home.body = body

export default home

