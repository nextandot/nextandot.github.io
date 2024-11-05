import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | Nextandot',
  description: 'Nextandotへのお問い合わせページです。Googleフォームを通じてご質問やご意見をお寄せください。',
}

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-4">
        Nextandotへのご質問やご意見がございましたら、以下のGoogleフォームよりお送りください。
      </p>
      <a
        href="https://docs.google.com/forms/d/your-form-id"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        お問い合わせフォームはこちら
      </a>
    </div>
  )
}
