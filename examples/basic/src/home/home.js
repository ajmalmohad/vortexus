import { Body, Page, Button, H1, H3, HTML, ScriptFile, StyleFile, Head, Meta, Title, A } from "vortexus";
import { Box } from "../common/box.js";

const home = new Page()

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
        StyleFile({
            filePath: "./src/home/home.css",
        })
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
            href: "./index.html",
            class: "index-link"
        }),

        Box,

        ScriptFile({
            filePath: "./src/home/script.js"
        })
    ]
})

home.head = head
home.body = body

export default home

