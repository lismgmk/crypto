import React from "react";
import s from "./Headings.module.scss";

type H1PropsType = {
    title?: string;
}

export const H1: React.FC<H1PropsType> = ({children}) => {
    return <h1 className={s.title}>{children}</h1>
}
