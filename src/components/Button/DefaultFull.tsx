import {Text} from '@/components/Text';
import Image from 'next/image';
import {IButton} from './Button.types';
import S from './Button.styles';
import add from '../../../public/add.svg';
export const DefaultFull = ({label, loading, ...rest}: IButton.IView) => (
  <S.DefaultContainerFull {...rest} data-testid={`Button:DefaultFull`}>
    {!loading ? (
      <>
        <Image src={add} alt="add icon" height={24} width={24} />
        <Text
          variants="big"
          className="ml-2 font text-white"
          data-testid={`button-label-${label}`}
        >
          {label}
        </Text>
      </>
    ) : (
      <Text
        variants="big"
        className="ml-2 font text-white"
        data-testid={`button-label-${label}`}
      >
        {'Carregando ...'}
      </Text>
    )}
  </S.DefaultContainerFull>
);
