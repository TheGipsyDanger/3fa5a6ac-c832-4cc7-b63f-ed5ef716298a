'use client';
import Image from 'next/image';

import {useQuery} from '@apollo/client';
import {GetAnimesPerPageDocument} from '@/__gql__/graphql';
import {AnimeList} from '@/components/AnimeList';
import {error} from 'console';

export default function Home() {
  return <AnimeList />;
}
