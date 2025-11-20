import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import AboutMainvisual from "../Components/AboutMainvisual/AboutMainvisual";
import ProfileSection from "../Components/ProfileSection/ProfileSection";
import CarrerVison from "../Components/CareerVisionSection/CareerVisionSection";
export default function About() {
    return (
        <>
            <AboutMainvisual />
            <ProfileSection />
            <CarrerVison />
        </>
    );
}
