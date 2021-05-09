import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";

export default function Home() {
    return (
        <div className="relative">
            <header
                className="p-1 flex justify-around"
                css={css`
                    height: 600px;
                `}
            >
                <div>
                    <h1 className="text-4xl">Killify</h1>{" "}
                    <h2 className="text-2xl">セキュアでスケーリングが容易なフルマネージド型killサービス</h2>{" "}
                </div>
                <div>
                    <Image
                        src="/stab-wounds.svg"
                        width={240}
                        height={240}
                        css={css`
                            fill: black;
                        `}
                    />
                </div>
            </header>
            <main></main>
        </div>
    );
}
