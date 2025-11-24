// app/UIComponents/page.tsx
import WorkDetail from "../Components/WorkDetail/WorkDetail";

export default function UIComponentsPage() {
    return (
        <WorkDetail
            title="UIコンポーネントサイト"
            subtitle="UIに対する理解を深めるために制作した、オリジナルのUIコンポーネントサイト。"
            image="/img/UIComponent_detail.png"
            period="2025年10月〜11月"
            role="すべて"
            tech="Next.js / Scss（レイアウトの共通化）"
            tools="Notion / Figma / VSCode"
            link=""
            overview="
UIデザインに対する理解を深めるために、オリジナルのUIコンポーネントサイトを制作しました。
『なぜこのUIを使うのか』『どんな場面で使うのか』『使う上での注意点は何か』を整理し、
UIを“直感で選ばず理性で選べる”ように学びを形として残すことを目的としました。"
            problems={[
                {
                    problem: "UIパーツを感覚で使ってしまう",
                    solution: "使い分けルール化し、整理して再利用しやすくする",
                },
                {
                    problem: "基準が曖昧で迷う場面がある",
                    solution: "Showcaseで整理し、選択基準を明確化",
                },
                {
                    problem: "実装者によってUIがブレる",
                    solution: "サイトでいつでも見れるようにして、ルール統一を図る",
                },
            ]}
            learning="
制作を通して、デザインとは『使う人が迷わないように導く設計』であることを深く理解できました。
ボタンの形1つ、モーダルの開き方1つにも“使う人の心理”を考慮した理由が必要であると学びました。
また、デザインを理論で説明できるようになったことで、チーム開発でも意思疎通がスムーズになりました。
UIの『使う理由』を明確に言語化できることで、デザイナーにもエンジニアにも共通する強みになると実感しました。"
            improvement="
現時点では『使い分け基準』がまだ一部しか整理されていません。
今後は、より多くのUIパターンを分析し、使用目的やユーザー行動に応じて適切なUIを選択できる判断力を磨いていく予定です。"
        />
    );
}