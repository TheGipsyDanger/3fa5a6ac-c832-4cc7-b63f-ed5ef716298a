import {ISearchBar} from '@/components/SearchBar/SearchBar.types';
import {Button} from '../Button';

export const SearchBar = (props: ISearchBar.IView) => (
  <div data-testid={`SearchBar`}>
    <form>
      <div className="flex flex-1 justify-center gap-4 mb-6">
        <input
          className="border rounded w-full py-2 px-3 h-[38px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-[1000px]"
          data-testid="anime:name"
          type="text"
          placeholder="Procurar por anime..."
        />
        <Button.Default
          onClick={() => {}}
          label={'Burcar'}
          className="h-[38px]"
        />
      </div>
    </form>
  </div>
);
