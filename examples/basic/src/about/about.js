import { Body, Page, Button, H1, H3, Head, Meta, Title, A } from "vortexus";
import { Box } from "../common/box.js";

const about = new Page()

about.addStylesheetFile("src/globals/global.css")
about.addStylesheetFile("src/about/about.css")
about.addScriptFile("src/about/script.js")

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
            content: "about",
            class: "about-button",
        }),
        A({
            content: "Index",
            href: "/",
            class: "index-link"
        }),
        Box,
    ]
})

about.head = head
about.body = body

export default about

