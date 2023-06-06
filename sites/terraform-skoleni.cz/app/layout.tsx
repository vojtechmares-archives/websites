import '/styles/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Terraform školení - Vojtěch Mareš',
    template: '%s | Next.js App Router',
  },
  description:
    'Terraform školení pro začátečníky i pokročilé | Školí Vojtěch Mareš - DevOps konzultant, lektor a mentor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <h1>Terraform Školení</h1>
      </body>
    </html>
  );
}
