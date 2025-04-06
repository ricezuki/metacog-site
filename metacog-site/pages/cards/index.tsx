import cards from '../../../cards.json';
import Link from 'next/link';

export default function CardList() {
  const visibleCards = cards.filter(card => !card.hidden);
  return (
    <div>
      <h1>カード一覧</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {visibleCards.map(card => (
          <Link key={card.id} href={`/card/${card.id}`}>
            <img src={card.image} alt={card.name} style={{ width: 150, margin: 8 }} />
          </Link>
        ))}
      </div>
    </div>
  );
}