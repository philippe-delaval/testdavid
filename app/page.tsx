import Link from 'next/link';
import React from 'react';

interface TextBlockProps {
  text: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ text }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-4 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
      <p className="text-xl font-semibold">{text}</p>
    </div>
  );
};

const BlockQuote = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <blockquote className="bg-gray-500/15 text-gray-700 dark:bg-gray-500/10 dark:text-blue-400 border-l-4 border-r-4 border-blue-500/70 py-2 px-4 rounded-xl">
      <p className="inline italic">{quote}</p>
      <p className="text-sm text-end tracking-tighter italic font-semibold mt-1.5">
        {author}
      </p>
    </blockquote>
  );
};

export default function Home() {
  return (
    <section className="py-14">
      <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-8">
        <BlockQuote
          quote="Template de configuration d'un projet Next.Js avec Typescript, ESLint, Prettier, Husky, Docker, scopes de commit personnalisés et Lint Staged."
          author="Drondiodev"
        />
        <TextBlock text="Ceci est un bloc de texte stylisé pour tester une modification." />
        <Link
          className="flex items-center rounded-md bg-red-500/15 mt-5 px-2 py-0.5 gap-3 text-red-500 text-sm"
          href="https://github.com/drondiodev/nextjs14cicd"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles "
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
          <span className="truncate">Donner une étoile au répo </span>
        </Link>
      </div>
    </section>
  );
}
