import Head from "next/head";
import Image from "next/image";
import headerStyles from "@/styles/portfolio/header.module.scss";
import footerStyles from "@/styles/portfolio/footer.module.scss";
import aboutStyles from "@/styles/portfolio/about/about.module.scss";
import skillsStyles from "@/styles/portfolio/about/skills.module.scss";
import hobbyStyles from "@/styles/portfolio/about/hobby.module.scss";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const burger = document.getElementById("burger");
        const burgerNav = document.getElementById("burgerNav");

        if (burger && burgerNav) {
            burger.addEventListener("click", () => {
                burger.classList.toggle(headerStyles.isActive);
                burgerNav.classList.toggle(headerStyles.isActive);
            });
        }
    })


    useEffect(() => {
        const handleScroll = () => {
            const skillsPops = document.querySelectorAll(`.${skillsStyles.list}`);
            skillsPops.forEach((p) => {
                const { top } = p.getBoundingClientRect();
                console.log("スクロール時 top:", top, "window.innerHeight:", window.innerHeight);
                if (top < window.innerHeight && top > 0) {
                    console.log("要素が画面内に入りました");
                    p.classList.add(skillsStyles.popped);
                }
            });

            const aboutImgPops = document.querySelectorAll(`.${aboutStyles.left}`);
            aboutImgPops.forEach((p) => {
                const { top } = p.getBoundingClientRect();
                console.log("スクロール時 top:", top, "window.innerHeight:", window.innerHeight);
                if (top < window.innerHeight && top > 0) {
                    console.log("要素が画面内に入りました");
                    p.classList.add(aboutStyles.popped);
                }
            });
            const aboutTextPops = document.querySelectorAll(`.${aboutStyles.right}`);
            aboutTextPops.forEach((p) => {
                const { top } = p.getBoundingClientRect();
                console.log("スクロール時 top:", top, "window.innerHeight:", window.innerHeight);
                if (top < window.innerHeight && top > 0) {
                    console.log("要素が画面内に入りました");
                    p.classList.add(aboutStyles.popped);
                }
            });
        };

        handleScroll(); // 初回評価
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&family=Zen+Maru+Gothic&display=swap" rel="stylesheet" />
            </Head>
            <header className={headerStyles.header}>

                <div className={headerStyles.left}>
                    DAIKI
                </div>
                <ul className={headerStyles.right}>
                    <li className={headerStyles.list}>
                        <a href="" className={headerStyles.link}>
                            Home
                        </a>
                    </li>
                    <li className={headerStyles.list}>
                        <a href="" className={headerStyles.link}>
                            About
                        </a>
                    </li>
                    <li className={headerStyles.list}>
                        <a href="" className={headerStyles.link}>
                            Contact
                        </a>
                    </li>
                </ul>

                <div className={headerStyles.burgerBox} id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={headerStyles.burgerNav} id="burgerNav">
                    <ul className={headerStyles.navList}>
                        <li className={headerStyles.list}>
                            <a href="" className={headerStyles.link}>
                                Home
                            </a>
                        </li>
                        <li className={headerStyles.list}>
                            <a href="" className={headerStyles.link}>
                                About
                            </a>
                        </li>
                        <li className={headerStyles.list}>
                            <a href="" className={headerStyles.link}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

            </header>





            <main style={{ backgroundColor: 'var(--portfolioMainBg)' }}>
                <section className={aboutStyles.about}>
                    <div className={aboutStyles.titleBox}>
                        <h1 className={aboutStyles.title}>
                            About
                        </h1>
                    </div>

                    <div className={aboutStyles.main}>
                        <div className={aboutStyles.left}>
                            <Image className={aboutStyles.leftImg} src="https://placehold.jp/400x550.png" alt="" width={400} height={550} />
                        </div>
                        <div className={aboutStyles.right}>
                            <p className={aboutStyles.name}>
                                後藤 大輝
                            </p>
                            <p className={aboutStyles.job}>
                                Web designer
                            </p>
                            <p className={aboutStyles.from}>
                                2008年 東京出身
                            </p>
                            <p className={aboutStyles.background}>
                                地元の中学校を卒業後、プログラミングに興味を持ったことをきっかけに、
                                KADOKAWAドワンゴ情報工科学院に入学いたしました。 <br />
                                現在、HTML、CSS、JavaScriptを使用したコーディングや、Figma、
                                Photoshopを活用したWebデザインについて学んでおります。
                            </p>
                            <div className={aboutStyles.account}>
                                <a href="" className={aboutStyles.x}>
                                    X
                                </a>
                                <a href="" className={aboutStyles.instagram}>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </section>





                <section className={skillsStyles.skills}>
                    <div className={skillsStyles.titleBox}>
                        <h1 className={skillsStyles.title}>
                            Skills
                        </h1>
                    </div>

                    <div className={skillsStyles.main}>
                        <ul className={skillsStyles.listBox}>
                            <li className={skillsStyles.list}>
                                <div className={skillsStyles.left}>
                                    <Image className={skillsStyles.leftImg} src="/portfolio/DesignPC.png" alt="" width={380} height={220} />
                                    <Image className={skillsStyles.leftImgPhone} src="/portfolio/DesignPhone.png" alt="" width={263} height={267} />
                                </div>
                                <div className={skillsStyles.right}>
                                    <h3 className={skillsStyles.skill}>
                                        Design
                                    </h3>
                                    <p className={skillsStyles.useSkill}>
                                        Figma / Photoshop
                                    </p>
                                    <p className={skillsStyles.text}>
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    </p>
                                </div>
                            </li>
                            <li className={skillsStyles.list}>
                                <div className={skillsStyles.left}>
                                    <Image className={skillsStyles.leftImg} src="/portfolio/coding.png" alt="" width={380} height={220} />
                                </div>
                                <div className={skillsStyles.right}>
                                    <h3 className={skillsStyles.skill}>
                                        Coding
                                    </h3>
                                    <p className={skillsStyles.useSkill}>
                                        HTML / CSS / Javascript
                                    </p>
                                    <p className={skillsStyles.text}>
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={hobbyStyles.hobby}>
                    <div className={hobbyStyles.titleBox}>
                        <h1 className={hobbyStyles.title}>
                            Likes
                        </h1>
                    </div>

                    <div className={hobbyStyles.main}>
                        <ul className={hobbyStyles.listBox}>
                            <li className={hobbyStyles.list}>
                                <Image src="/portfolio/hobbyGame.png" alt="" className={hobbyStyles.img} width={300} height={300} />
                                <div className={hobbyStyles.hoverBox}>
                                    <p className={hobbyStyles.title}>
                                        ゲーム
                                    </p>
                                    <p className={hobbyStyles.text}>
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキスト
                                    </p>
                                </div>
                            </li>
                            <li className={hobbyStyles.list}>
                                <Image src="/portfolio/hobbyGame.png" alt="" className={hobbyStyles.img} width={300} height={300} />
                                <div className={hobbyStyles.hoverBox}>
                                    <p className={hobbyStyles.title}>
                                        ゲーム
                                    </p>
                                    <p className={hobbyStyles.text}>
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキスト
                                    </p>
                                </div>
                            </li>
                            <li className={hobbyStyles.list}>
                                <Image src="/portfolio/hobbyGame.png" alt="" className={hobbyStyles.img} width={300} height={300} />
                                <div className={hobbyStyles.hoverBox}>
                                    <p className={hobbyStyles.title}>
                                        ゲーム
                                    </p>
                                    <p className={hobbyStyles.text}>
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキスト
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>





                <footer className={footerStyles.footer}>
                    <ul className={footerStyles.listBox}>
                        <li className={footerStyles.list}>
                            <a href="" className={footerStyles.link}>
                                <div className={footerStyles.lineLeft}></div>
                                <p className={footerStyles.text}>
                                    Home
                                </p>
                                <div className={footerStyles.lineRight}></div>
                            </a>
                        </li>
                        <li className={`${footerStyles.list} ${footerStyles.displayNone}`}>
                            <a href="" className={footerStyles.link}>
                                <div className={footerStyles.lineLeft}></div>
                                <p className={footerStyles.text}>
                                    About
                                </p>
                                <div className={footerStyles.lineRight}></div>
                            </a>
                        </li>
                        <li className={footerStyles.list}>
                            <a href="" className={footerStyles.link}>
                                <div className={footerStyles.lineLeft}></div>
                                <p className={footerStyles.text}>
                                    Contact
                                </p>
                                <div className={footerStyles.lineRight}></div>
                            </a>
                        </li>
                    </ul>
                </footer>
            </main>
        </>
    );
}