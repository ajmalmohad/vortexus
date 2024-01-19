import { Div } from "vortexus";

export const Box = Div({
    class: "box",
    style: "border: 1px solid black;",
    children: [
        Div({
            class: "box-title",
            style: "font-weight: bold;",
            content: "Box"
        }),
        Div({
            class: "box-content",
            style: "font-weight: normal;",
            content: "This is a box."
        })
    ]
})
