
export function format(html: string): string {
    const lines = html.split("\n");
    const indent = 4;
    let indentLevel = 0;
    let formatted = "";

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        if (trimmed.startsWith("</")) {
            indentLevel--;
        }

        formatted += " ".repeat(indent * indentLevel) + trimmed + "\n";

        if (trimmed.startsWith("<") && !trimmed.startsWith("</") && !trimmed.endsWith("/>")) {
            indentLevel++;
        }
    }

    return formatted
}