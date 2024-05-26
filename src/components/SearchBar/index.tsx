import {Button} from '@/components/Button';
import S from './SearchBar.styles';
import {useSearchBar} from './SearchBar.model';

export const SearchBar = () => {
  const {onSubmit, inputValue, handleInputChange} = useSearchBar({});
  return (
    <S.Container data-testid={`SearchBar`}>
      <S.Content>
        <S.Input
          data-testid="anime:name"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Procurar por anime..."
        />
        <Button.Default
          onClick={onSubmit}
          label={'Burcar'}
          className="h-[38px]"
        />
      </S.Content>
    </S.Container>
  );
};
