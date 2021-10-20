export function returnLabelOfStatus(status) {
    if (status === "in-progress") {
        return "In Progress";
    }
    if (status === "live") {
        return "Live";
    }
    if (status === "planned") {
        return "Planned";
    }
}

export const returnCardBorderColor = (props) =>
    props.status === "planned"
        ? "#f49f85"
        : props.status === "in-progress"
            ? "#ad1fea"
            : "#62bcfa"