import cards from '../../cards.json';
import Link from 'next/link';

export async function getStaticPaths() {
  return {
    paths: cards.map(card => ({ params: { id: card.id } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const card = cards.find(card => card.id === params.id);
  return { props: { card } };
}

export default function CardPage({ card }) {
  return (
    <div>
      <h1>{card.name}</h1>
      <img src={card.image} alt={card.name} style={{ width: 300 }} />
      <p>{card.text}</p>
      <p><Link href="/cards">← カード一覧に戻る</Link></p>
      <p><Link href="/">← トップページへ戻る</Link></p>
    </div>
  );
}
