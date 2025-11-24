import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import AboutMainvisual from "../Components/AboutMainvisual/AboutMainvisual";
import Profile from "../Components/ProfileSection/ProfileSection";
import CarrerVison from "../Components/CareerVisionSection/CareerVisionSection";
import Contact from "../Components/ContactSection/ContactSection";
export default function About() {
    return (
        <>
            <AboutMainvisual />
            <Profile />
            <CarrerVison />
            <Contact />
        </>
    );
}
