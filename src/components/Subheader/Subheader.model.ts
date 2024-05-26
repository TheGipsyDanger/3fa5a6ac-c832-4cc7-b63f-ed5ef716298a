import {MediaFormat} from '@/__gql__/graphql';
import {ISubheader, IData} from './Subheader.types';
import {useState} from 'react';
import {useAppDispatch} from '@/utils';
import {searchSetType} from '@/redux/actions';

export const useSubheader = (
  props: ISubheader.IModelProps
): ISubheader.IModel => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IData[]>([
    {
      id: 'all.formats',
      label: 'All Formats',
      status: true,
      type: '',
    },
    {
      id: 'tv.show',
      label: 'Tv Show',
      status: false,
      type: MediaFormat.Tv,
    },
    {
      id: 'movie',
      label: 'Movie',
      status: false,
      type: MediaFormat.Movie,
    },
    {
      id: 'tv.short',
      label: 'Tv Short',
      status: false,
      type: MediaFormat.TvShort,
    },
    {
      id: 'special',
      label: 'Special',
      status: false,
      type: MediaFormat.Special,
    },
    {
      id: 'ova',
      label: 'OVA',
      status: false,
      type: MediaFormat.Ova,
    },
    {
      id: 'ona',
      label: 'ONA',
      status: false,
      type: MediaFormat.Ona,
    },
    {
      id: 'music',
      label: 'Music',
      status: false,
      type: MediaFormat.Music,
    },
  ]);

  const handleClick = (id: string, type: string) => {
    const newData = data.map(item => ({
      ...item,
      status: item.id === id ? true : false,
    }));
    dispatch(searchSetType({type: type}));
    setData(newData);
  };

  return {data, handleClick};
};
