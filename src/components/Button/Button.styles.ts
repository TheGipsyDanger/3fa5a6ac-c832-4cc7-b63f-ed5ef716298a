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
    hover:opacity-80
  `,
  DefaultContainerFull: tw.button`
    flex
    flex-1
    rounded
    bg-regular
    px-6
    py-3
    flex
    border-1
    border
    border-regular
    items-center
    justify-center
    hover:opacity-80
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
    hover:opacity-80
  `,
};
