import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { FeatureBox } from "./components/FeatureBox";

const Index = () => {
    return (
        <div className="bg-pink-50">
            <header>
                <div className="flex justify-center p-4">
                    <Image src="/stab-wounds.svg" width={140} height={"140"} />
                    <div className="sm:max-w-xs md:max-w-max pl-4">
                        <h1 className="text-6xl font-bold md:pt-8">Killify</h1>
                        <h2 className="text-2xl py-2">セキュアでスケーラブルなフルマネージド暴力サービス</h2>
                    </div>
                </div>
            </header>
            <main className="flex flex-col gap-4 items-center w-screen">
                <h3 className="text-2xl font-bold">Features</h3>
                <p className="text-3xl text-center">
                    胎児の中絶から愛犬の安楽死 <br />
                    事故に見せかけた殺人をどこからでも簡単に実行
                </p>

                <div>{/* country */}</div>

                <div className="flex justify-around gap-3 flex-col md:flex-row">
                    <FeatureBox
                        title={"セキュア"}
                        text={`我々はお客様のデータを安全に保つため、弊社データセンターのすべてのサーバーは侵入者が発生した場合において自爆するように設計されました。`}
                    />
                    <FeatureBox
                        title={"誰でも利用可能"}
                        text={`我々はお客様を差別することはいたしません。カルテルやISIL、や共産党幹部、ダウン症の未就学児、統合失調症患者にもお使いいただけます。`}
                    />
                    <FeatureBox
                        title={"スケーラビリティ"}
                        text={`個人のお客様の1件からのキルから、数千～数万件の大規模な虐殺が利用可能です。さらにご希望のお客様には化学兵器や核の保有と使用も可能です。`}
                    />
                    <FeatureBox
                        title={"刑事免責保証"}
                        text={`お客様の利用状態によって刑事責任が発生する場合においてもkillifyでは刑事免責保証のサポートにより、お客様を安全な状態に保ちます。`}
                    />
                </div>
                {/* case study*/}
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
