import {ISubheader, IData} from '@/components/Subheader/Subheader.types';
import {useState} from 'react';

export const useSubheader = (
  props: ISubheader.IModelProps
): ISubheader.IModel => {
  const [data, setData] = useState<IData[]>([
    {
      id: 'all.formats',
      label: 'All Formats',
      status: true,
    },
    {
      id: 'tv.show',
      label: 'Tv Show',
      status: false,
    },
    {
      id: 'movie',
      label: 'Movie',
      status: false,
    },
    {
      id: 'tv.short',
      label: 'Tv Short',
      status: false,
    },
    {
      id: 'special',
      label: 'Special',
      status: false,
    },
    {
      id: 'ova',
      label: 'OVA',
      status: false,
    },
    {
      id: 'ona',
      label: 'ONA',
      status: false,
    },
    {
      id: 'music',
      label: 'Music',
      status: false,
    },
  ]);

  const handleClick = (id: string) => {
    const newData = data.map(item => ({
      ...item,
      status: item.id === id ? true : false,
    }));
    setData(newData);
  };

  return {data, handleClick};
};
