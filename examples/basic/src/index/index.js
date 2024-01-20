import { Body, Button, H1, H3, Page, Head, Meta, Title, A } from "vortexus";
import { Box } from "../common/box.js";

const index = new Page()

index.addStylesheetFile("./src/index/index.css")
index.addScriptFile("./src/index/script.js")

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
            content: "Index",
            class: "index-button",
        }),
        A({
            content: "Home",
            href: "./home",
            class: "home-link"
        }),
        Box,
    ]
})

index.head = head
index.body = body

export default index