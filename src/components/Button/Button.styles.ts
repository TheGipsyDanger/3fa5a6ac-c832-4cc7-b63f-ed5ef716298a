import tw from 'tailwind-styled-components';

export default {
  DefaultContainer: tw.button`
    rounded
    bg-primary
    px-6
    py-3
    flex
    border-1
    border
    border-primary
    items-center
  `,
  OutlineContainer: tw.button`
    rounded
    bg-transparent
    px-6
    py-3
    flex
    border-1
    border
    border-primary
    items-center
  `,
};
