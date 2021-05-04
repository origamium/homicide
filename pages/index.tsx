import * as React from "react";
import { css } from "@emotion/react";

export default function Home() {
    return (
        <>
            <header
                className="container"
                css={css`
                    display: block;
                `}
            >
                <h1>Killify</h1>
                <h2>Kill anything. For everyone.</h2>
            </header>
        </>
    );
}
