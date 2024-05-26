import {ISearchBar} from './SearchBar.types';
import {Button} from '@/components/Button';
import S from './SearchBar.styles';

export const SearchBar = (props: ISearchBar.IView) => (
  <S.Container data-testid={`SearchBar`}>
    <form>
      <S.Content>
        <S.Input
          data-testid="anime:name"
          type="text"
          placeholder="Procurar por anime..."
        />
        <Button.Default
          onClick={() => {}}
          label={'Burcar'}
          className="h-[38px]"
        />
      </S.Content>
    </form>
  </S.Container>
);
