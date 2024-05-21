import tw from 'tailwind-styled-components';

interface IAverage {
  averageScore: number;
}

export default {
  Container: tw.div`
    h-[270px]
    w-[317px]
    rounded-lg
    overflow-hidden
    relative
  `,
  Content: tw.div`
    h-[270px]
    w-[317px]
    bg-gradient-to-b 
    from-black 
    to-transparent 
    top-0
    flex
    flex-col
    justify-between
    absolute
    p-7
    pr-2
    pb-2
  `,
  Infos: tw.div``,
  Average: tw.div<IAverage>`
    self-end
    px-4
    rounded
    ${p => p.averageScore <= 50 && 'bg-poor'}
    ${p => p.averageScore > 50 && p.averageScore <= 80 && 'bg-regular'}
    ${p => p.averageScore > 80 && 'bg-success'}
  `,
};
