'use client';
import {ISubheader} from '@/components/Subheader/Subheader.types';
import S from './Subheader.styles';
import {useSubheader} from './Subheader.model';
import {Button} from '../Button';

export const Subheader = (props: ISubheader.IView) => {
  const {data, handleClick} = useSubheader(props);

  return (
    <S.Container data-testid={`Subheader`}>
      {data.map(item => (
        <div key={item.id}>
          {item.status === true ? (
            <Button.Default
              onClick={() => handleClick(item.id)}
              label={item.label}
              className="h-[32px]"
            />
          ) : (
            <Button.Outline
              onClick={() => handleClick(item.id)}
              label={item.label}
              className="h-[32px]"
            />
          )}
        </div>
      ))}
    </S.Container>
  );
};
