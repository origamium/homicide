import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";

const Index = () => {
    return (
        <div>
            <header>
                <div
                    className="flex justify-center p-4"
                    css={css`
                        background-color: #ff5500;
                    `}
                >
                    <Image src="/stab-wounds.svg" width={140} height={"140"} />
                    <div className="sm:max-w-xs md:max-w-max">
                        <h1 className="text-6xl font-bold md:pt-8">Killify</h1>
                        <h2 className="text-2xl py-2">セキュアでスケーラブルなフルマネージドkillサービス</h2>
                    </div>
                </div>
            </header>
            <main
                className="flex flex-col items-center w-screen"
                css={css`
                    background-image: url("/background.svg");
                    background-size: cover;
                    background-repeat: no-repeat;
                `}
            >
                <h3 className="text-2xl font-bold">Features</h3>
                <p className="text-3xl text-center">
                    コンピューター上のタスクのkillから野犬の安楽死 <br />
                    見せしめから事故に見せかけた殺人をどこからでも簡単に実行
                </p>
                <div>
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
                <h3 className="text-2xl text-center">Pricing</h3>
                <div>
                    <article>
                        <h4>Free</h4>
                    </article>
                    <article>
                        <h4>Professional</h4>
                    </article>
                    <article>
                        <h4>Enterprise</h4>
                    </article>
                    <article>
                        <h4>Government</h4>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default Index;
