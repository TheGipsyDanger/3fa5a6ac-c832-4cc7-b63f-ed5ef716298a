import {ReviewBodyArgs} from './../../__gql__/graphql';
import tw from 'tailwind-styled-components';

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
    absolute
  `,
  Average: tw.div<{averageScore: number}>`

    ${p => p.averageScore <= 50 && 'bg-poor'}
    ${p => p.averageScore > 50 && p.averageScore <= 80 && 'bg-regular'}
    ${p => p.averageScore > 80 && 'bg-success'}
  `,
};
