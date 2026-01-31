import type { IconType } from "react-icons";

export type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export type SkillProps = {
    icon: IconType;
    name: string;
};