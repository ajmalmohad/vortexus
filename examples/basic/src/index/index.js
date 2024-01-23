import { Body, Div, Main, Page, Head, Meta, Title, A } from "vortexus";
import { Navbar } from "../common/navbar.js";

const index = new Page()

index.addStylesheetFile("src/globals/global.css")
index.addStylesheetFile("src/index/index.css")
index.addScriptFile("src/index/script.js")

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
        Div({
            children: [
                Navbar,
                Main({
                    children: [
                        Div({
                            content: "Static Site Generation (SSG)"
                        }),
                        Div({
                            content: "Server-Side Rendering (SSR)"
                        }),
                        Div({
                            content: "Simple"
                        }),
                        Div({
                            content: "Fast"
                        })
                    ]
                })
            ]
        })
    ]
});


index.head = head
index.body = body

export default index