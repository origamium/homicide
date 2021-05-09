import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";

export default function Home() {
    return (
        <div className="">
            <header
                className="p-1 flex justify-around"
                css={css`
                    height: 600px;
                `}
            >
                <div>
                    <h1 className="text-4xl">Killify</h1>{" "}
                    <h2 className="text-2xl">セキュアでスケーリングが容易なフルマネージド型killサービス</h2>
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
            <main>
                <h3 className="text-2xl text-center">Features</h3>
                <div>
                    <article>
                        <h4 className="text-xl">ANYTHING</h4>
                        <p>コンピュータ上のプロセスのkillから獣類の間引き、殺人までサポートします。</p>
                    </article>
                    <article>
                        <h4 className="text-xl">EVERYONE</h4>
                        <p>人種、宗教、年齢、所属組織に関係なく即座にkillサービス展開が可能。</p>
                    </article>
                    <article>
                        <h4 className="text-xl">ELASTIC</h4>
                        <p>1件の殺人から大規模虐殺までのkillタスクのスケーリングが可能。</p>
                    </article>
                    <article>
                        <h4 className="text-xl">IMMUNITY</h4>
                        <p>killifyではすべてのプランにおいて、すべての国において刑事免責保証が適用可能です。</p>
                    </article>
                </div>
            </main>
        </div>
    );
}
