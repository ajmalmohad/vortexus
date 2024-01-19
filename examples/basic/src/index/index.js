import { Body, Button, H1, H3, Page, ScriptFile, StyleFile, Head, Meta, Title, A } from "vortexus";
import { Box } from "../common/box.js";

const index = new Page()

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
            filePath: "./src/index/home.css"
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
            content: "Index",
            class: "index-button",
        }),
        A({
            content: "Home",
            href: "./home.html",
            class: "home-link"
        }),

        Box,

        ScriptFile({
            filePath: "./src/index/script.js"
        })
    ]
})

index.head = head
index.body = body

export default index