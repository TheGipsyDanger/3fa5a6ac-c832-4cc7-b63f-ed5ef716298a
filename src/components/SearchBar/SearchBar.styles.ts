import tw from 'tailwind-styled-components';

export default {
  Container: tw.div``,
  Content: tw.div`
    flex 
    flex-1 
    justify-center 
    gap-4 
    mb-6
    px-4 
  `,
  Input: tw.input`
    border 
    rounded 
    w-full 
    py-2 
    px-3 
    h-[38px] 
    text-gray-700 
    leading-tight 
    focus:outline-none 
    focus:shadow-outline 
    max-w-[1000px]
  `,
};
