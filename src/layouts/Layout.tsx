import type { ReactElement } from "react";

interface LayoutProps {
    children: string;
}

export default function Layout(props: LayoutProps) {
    return <>
        <h1>Header</h1>
        {props.children}
        <h1>Footer</h1>
    </>;
}