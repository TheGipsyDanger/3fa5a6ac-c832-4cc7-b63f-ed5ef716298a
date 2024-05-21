export const pageMock = {
  __typename: 'Page',
  pageInfo: {
    __typename: 'PageInfo',
    currentPage: 1,
    hasNextPage: true,
  },
  media: [
    {
      __typename: 'Media',
      id: 1,
      coverImage: {
        __typename: 'MediaCoverImage',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
      },
      title: {
        __typename: 'MediaTitle',
        english: 'Cowboy Bebop',
        native: 'カウボーイビバップ',
      },
      format: 'TV',
      seasonYear: 1998,
      status: 'FINISHED',
      episodes: 26,
    },
    {
      __typename: 'Media',
      id: 5,
      coverImage: {
        __typename: 'MediaCoverImage',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
      },
      title: {
        __typename: 'MediaTitle',
        english: "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
        native: 'カウボーイビバップ天国の扉',
      },
      format: 'MOVIE',
      seasonYear: 2001,
      status: 'FINISHED',
      episodes: 1,
    },
    {
      __typename: 'Media',
      id: 6,
      coverImage: {
        __typename: 'MediaCoverImage',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg',
      },
      title: {
        __typename: 'MediaTitle',
        english: 'Trigun',
        native: 'TRIGUN',
      },
      format: 'TV',
      seasonYear: 1998,
      status: 'FINISHED',
      episodes: 26,
    },
    {
      __typename: 'Media',
      id: 7,
      coverImage: {
        __typename: 'MediaCoverImage',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7-6uh1fPvbgS9t.png',
      },
      title: {
        __typename: 'MediaTitle',
        english: 'Witch Hunter ROBIN',
        native: 'Witch Hunter ROBIN',
      },
      format: 'TV',
      seasonYear: 2002,
      status: 'FINISHED',
      episodes: 26,
    },
  ],
};
