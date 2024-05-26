'use client';
import {AnimeList} from '@/components/AnimeList';
import {GlobalWrapper} from '@/components/GlobalWrapper';
import {SearchBar} from '@/components/SearchBar';

export default function Home() {
  return (
    <div data-testid={`Page:Home`} className="flex flex-1 flex-col">
      <SearchBar />
      <AnimeList />
    </div>
  );
}
