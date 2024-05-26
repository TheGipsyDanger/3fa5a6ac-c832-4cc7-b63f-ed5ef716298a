import tw from 'tailwind-styled-components';

export default {
  Container: tw.div`
    gap-4 
    flex 
    flex-wrap 
    justify-center
  `,
  ShimmerCard: tw.div`
    h-[270px] 
    w-[317px] 
    bg-gray-200 
    animate-pulse 
    rounded-lg
  `,
  ContainerBtn: tw.div`
    flex 
    flex-1 
    px-6
    mt-6
  `,
};
