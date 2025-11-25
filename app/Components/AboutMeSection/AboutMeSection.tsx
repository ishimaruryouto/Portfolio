"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMeSection.module.scss";

export default function AboutMeSection() {
    const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const elementTop = entry.boundingClientRect.top;
                const viewportMiddle = window.innerHeight / 1;

                if (elementTop < viewportMiddle) {
                    entry.target.classList.add(styles.show);
                }
            });
        }, options);

        photoRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <h2 className={styles.h2}>About Me</h2>

            <div className={styles.about_wrap}>
                {[1, 2, 3].map((num, i) => (
                    <div
                        className={styles.photo}
                        key={i}
                        ref={(el) => {
                            photoRefs.current[i] = el;
                        }}
                    >
                        <Image
                            src={`/img/AboutMe_${num}.png`}
                            alt="写真"
                            width={370}
                            height={240}
                        />
                    </div>
                ))}

                <div className={styles.info_wrap}>
                    <div>
                        <div className={styles.img_text_wrap}>
                            <div className="info_photo">
                                <Image src="/img/ryouto_photo.png" alt="写真" width={150} height={227} />
                            </div>
                            <div className={styles.info_text}>
                                <p>バイク</p>
                                <p>車</p>
                                <p>大好き</p>
                                <p>20歳</p>
                                <p>男</p>
                            </div>
                        </div>
                        <p className={styles.more_me_wrap}>
                            <Link href="/About" className={styles.more_me}>more me</Link>
                        </p>
                    </div>
                </div>

                <div className={styles.contact_circle}>
                    <div className={styles.contact_text}>
                        <p>contact</p>
                        <p>↓</p>
                    </div>
                </div>
            </div>
        </>
    );
}