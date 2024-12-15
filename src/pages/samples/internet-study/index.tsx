import Head from "next/head";
import Image from "next/image";
import headerStyles from "@/styles/internet/header.module.scss";
import fvStyles from "@/styles/internet/fv.module.scss";
import aboutStyles from "@/styles/internet/about.module.scss";
import pointStyles from "@/styles/internet/point.module.scss";
import flowStyles from "@/styles/internet/flow.module.scss";
import footerStyles from "@/styles/internet/footer.module.scss";
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
    }, [])
    return (
        <>
            <Head>
                <title>Online Study</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet" />
            </Head>

            <header className={headerStyles.header}>
                <div className={headerStyles.right}>
                    Online Stydy
                </div>
                <nav className={headerStyles.left}>
                    <a href="" className={headerStyles.link}>
                        Home
                    </a>
                    <a href="" className={headerStyles.link}>
                        About
                    </a>
                    <a href="" className={headerStyles.link}>
                        Point
                    </a>
                    <a href="" className={headerStyles.link}>
                        Flow
                    </a>
                    <div className={headerStyles.burgerBox} id="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </nav>
                <nav className={headerStyles.burgerNav} id="burgerNav">
                    <ul className={headerStyles.navList}>
                    <div className={headerStyles.maru}>
                        <div></div>
                        <div></div>
                    </div>
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
                                Point
                            </a>
                        </li>
                        <li className={headerStyles.list}>
                            <a href="" className={headerStyles.link}>
                                Flow
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>



            <section className={fvStyles.fv}>
                <div className={fvStyles.main}>
                    <div className={fvStyles.left}>
                        <p className={fvStyles.text}>
                            苦手な科目も10分でマスター <br />
                            家から勉強できるオンライン学習塾
                        </p>
                        <p className={fvStyles.texm}>
                            様々な生徒の疑問をリアルタイムで解決!!
                        </p>
                        <div className={fvStyles.btnBox}>
                            <button className={fvStyles.buybtn}>
                                資料請求
                            </button>
                            <div className={fvStyles.btnBgc}></div>
                        </div>
                    </div>
                    <div className={fvStyles.right}>
                        <Image src="/internetStudy/25800295 1.png" alt="" className={fvStyles.book} width={530} height={400} />
                        <Image src="/internetStudy/106767 1.png" alt="" className={fvStyles.pen} width={100} height={100} />
                        <Image src="/internetStudy/106855 1.png" alt="" className={fvStyles.redPen} width={100} height={100} />
                    </div>
                </div>

                <div className={fvStyles.circles}>
                    <div className={fvStyles.circle}></div>
                    <div className={fvStyles.circle}></div>
                    <div className={fvStyles.circle}></div>
                    <div className={fvStyles.circle}></div>
                    <div className={fvStyles.circle}></div>
                </div>

            </section>



            <section className={aboutStyles.about}>
                <h1 className={aboutStyles.title}>
                    Online Studyとは
                </h1>
                <div className={aboutStyles.main}>

                    <div className={aboutStyles.left}>
                        <Image src="/internetStudy/2048455 1.png" alt="" width={540} height={400} />
                    </div>

                    <div className={aboutStyles.right}>
                        <p className={aboutStyles.text}>
                            いつでもどこでも授業を受けることができる <br />
                            <span>オンライン学習サービス</span>です
                        </p>
                        <p className={aboutStyles.text}>
                            移動中などのあいている時間に勉強でき、学力を効率的に向上させます
                        </p>
                        <div className={aboutStyles.under}>
                            <Image src="/internetStudy/Group 13.png" alt="" width={130} height={120} />
                            <Image src="/internetStudy/Group 16.png" alt="" width={130} height={120} />
                            <div className={aboutStyles.textBox}>
                                <p className={aboutStyles.text}>
                                    基本講師に質問が無料できて、
                                </p>
                                <p className={aboutStyles.text}>
                                    わからないところをすぐに解決できます
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className={pointStyles.point}>
                <h1 className={pointStyles.title}>
                    Online Studyが選ばれる3つのポイント
                </h1>
                <ul className={pointStyles.cardList}>
                    <li className={pointStyles.list}>
                        <div className={pointStyles.left}>
                            <h2 className={pointStyles.listPoint}>
                                Point 1
                            </h2>
                            <p className={pointStyles.text}>
                                Online Studyでは、常に講師が待機しており、質問をメールで送る
                                とリアルタイムで返信がもらえます。そのため、わからないことをす
                                ぐに解決でき、成績アップに大きく貢献します。
                            </p>
                        </div>
                        <Image
                            src="/internetStudy/31021676_s 1.png"
                            alt=""
                            className={pointStyles.right}
                            width={370}
                            height={300}
                        />
                    </li>
                    <li className={pointStyles.list}>
                        <div className={pointStyles.left}>
                            <h2 className={pointStyles.listPoint}>
                                Point 2
                            </h2>
                            <p className={pointStyles.text}>
                                また、Online Studyでは事前に予約をしておけば、いつでもオンラ
                                イン授業を受けることができます。予約数に制限はなく、料金は変わ
                                らないので、たくさん授業を受けて効率的に学習を進めましょう。
                            </p>
                        </div>
                        <Image
                            src="/internetStudy/31021676_s 1.png"
                            alt=""
                            className={pointStyles.right}
                            width={370}
                            height={300}
                        />
                    </li>
                    <li className={pointStyles.list}>
                        <div className={pointStyles.left}>
                            <h2 className={pointStyles.listPoint}>
                                Point 3
                            </h2>
                            <p className={pointStyles.text}>
                                Online Studyでは、学習進捗を管理する専用のサポ
                                ート機能があります。個人の目標や弱点に応じた学習
                                プランを自動生成し、進捗状況をデータで確認できま
                                す。これにより、効率的に学習を進め、自分のペース
                                で目標達成を目指すことができます。
                            </p>
                        </div>
                        <Image
                            src="/internetStudy/31021676_s 1.png"
                            alt=""
                            className={pointStyles.right}
                            width={370}
                            height={300}
                        />
                    </li>
                </ul>
            </section>


            <section className={flowStyles.flow}>
                <h2 className={flowStyles.title}>
                    ご注文の流れ
                </h2>

                <div className={flowStyles.step}>
                    <div className={flowStyles.stepBox}>
                        <div className={flowStyles.boxStep}>
                            Step 1
                        </div>
                        <h3 className={flowStyles.boxTitle}>
                            資料請求
                        </h3>
                        <p className={flowStyles.text}>
                            お申し込みされた後すぐに、メールにて資料をお送りします
                        </p>
                    </div>

                    <Image
                        src="/internetStudy/Polygon 3.png"
                        alt=""
                        className={flowStyles.arrow}
                        width={20}
                        height={70}
                    />

                    <div className={flowStyles.stepBox}>
                        <div className={flowStyles.boxStep}>
                            Step 2
                        </div>
                        <h3 className={flowStyles.boxTitle}>
                            面談
                        </h3>
                        <p className={flowStyles.text}>
                            一人一人に合ったプランを出すために無料の相談をします
                        </p>
                    </div>

                    <Image
                        src="/internetStudy/Polygon 3.png"
                        alt=""
                        className={flowStyles.arrow}
                        width={20}
                        height={70}
                    />

                    <div className={flowStyles.stepBox}>
                        <div className={flowStyles.boxStep}>
                            Step 3
                        </div>
                        <h3 className={flowStyles.boxTitle}>
                            学習スタート
                        </h3>
                        <p className={flowStyles.text}>
                            Online Studyでの学習スタート!
                        </p>
                    </div>
                </div>

                <div className={flowStyles.buy}>
                    <h2 className={flowStyles.title}>
                        オンライン学習だけの低価格!
                    </h2>

                    <div className={flowStyles.main}>
                        <div className={flowStyles.left}>
                            <Image src="/internetStudy/26000152_s-removebg-preview.png" alt="" width={480} height={320} />
                        </div>
                        <div className={flowStyles.right}>
                            <p className={flowStyles.text}>
                                Online Studyでは、質の高い講師陣と最新の学習システムを取り入れながら
                                、従来の塾よりもリーズナブルな料金を実現しています。オンラインだからこそ
                                、通学のコストを削減し、効率的に学びを提供できます。
                            </p>

                            <div className={flowStyles.under}>
                                <div className={flowStyles.buyBox}>
                                    <Image src="/internetStudy/Group 14 (1).png" alt="" className={flowStyles.sale} width={130} height={130} />
                                    <button className={flowStyles.buyBtn}>
                                        <div></div>
                                        資料請求はこちら
                                        <Image src="/internetStudy/Group 15.png" alt="" className={flowStyles.arrow} width={20} height={20} />
                                    </button>
                                </div>
                                <Image src="/internetStudy/1993001 1.png" alt="" className={flowStyles.ilast} width={220} height={160} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={footerStyles.footer}>
                🄫 Online Study
            </footer>
        </>
    );
}