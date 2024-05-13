import { HTMLProps, ReactNode } from "react";

export interface ImageCardProps extends HTMLProps<HTMLDivElement> {
    imgSrc: string;
    children?: ReactNode;
}