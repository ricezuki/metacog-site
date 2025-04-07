import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>MetaCognition（メタコグ）公式サイト</h1>
      <p>ここはトップページです。</p>
      <ul>
        <li><Link href="/cards">カード一覧を見る</Link></li>
        <li><Link href="/rules">ルール（準備中）</Link></li>
      </ul>
    </div>
  );
}
