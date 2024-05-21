'use client';
import Image from 'next/image';

import {useQuery} from '@apollo/client';
import {GetAnimesPerPageDocument} from '@/__gql__/graphql';
import {Text} from '@/components/Text';
import {error} from 'console';

export default function Home() {
  const {data, loading, error} = useQuery(GetAnimesPerPageDocument, {
    variables: {page: 1, perPage: 30},
  });

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Estamos com problemas</Text>;

  return data?.Page?.media?.map(media => (
    <Text key={media?.id}>{media?.title?.english}</Text>
  ));
}
