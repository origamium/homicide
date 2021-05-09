import * as React from "react";

export type FeatureBoxProps = {
    title: string;
    text: string;
};

export const FeatureBox: React.FC<FeatureBoxProps> = ({ title, text }) => {
    return (
        <article className={"flex flex-col w-52 border-4 p-4"}>
            <h4 className="text-xl font-bold text-center pb-4">{title}</h4>
            <p>{text}</p>
        </article>
    );
};
