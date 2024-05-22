export const mediaMock = {
  __typename: 'Media',
  id: 1,
  averageScore: 80,
  coverImage: {
    __typename: 'MediaCoverImage',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  },
  tags: [
    {
      __typename: 'MediaTag',
      id: 63,
      name: 'Space',
      category: 'Setting-Universe',
    },
    {
      __typename: 'MediaTag',
      id: 648,
      name: 'Crime',
      category: 'Theme-Other',
    },
    {
      __typename: 'MediaTag',
      id: 193,
      name: 'Episodic',
      category: 'Technical',
    },
  ],
  title: {
    __typename: 'MediaTitle',
    english: 'Cowboy Bebop',
    native: 'カウボーイビバップ',
  },
  format: 'TV',
  seasonYear: 1998,
  status: 'FINISHED',
  episodes: 26,
};

export const mediaMockWithEmptyEnglishTitle = {
  __typename: 'Media',
  id: 1,
  averageScore: 80,
  coverImage: {
    __typename: 'MediaCoverImage',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  },
  tags: [
    {
      __typename: 'MediaTag',
      id: 63,
      name: 'Space',
      category: 'Setting-Universe',
    },
    {
      __typename: 'MediaTag',
      id: 648,
      name: 'Crime',
      category: 'Theme-Other',
    },
    {
      __typename: 'MediaTag',
      id: 193,
      name: 'Episodic',
      category: 'Technical',
    },
  ],
  title: {
    __typename: 'MediaTitle',
    english: '',
    native: 'カウボーイビバップ',
  },
  format: 'TV',
  seasonYear: 1998,
  status: 'FINISHED',
  episodes: 26,
};

export const mediaMockWithPoorScore = {
  __typename: 'Media',
  id: 1,
  averageScore: 50,
  coverImage: {
    __typename: 'MediaCoverImage',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  },
  tags: [
    {
      __typename: 'MediaTag',
      id: 63,
      name: 'Space',
      category: 'Setting-Universe',
    },
    {
      __typename: 'MediaTag',
      id: 648,
      name: 'Crime',
      category: 'Theme-Other',
    },
    {
      __typename: 'MediaTag',
      id: 193,
      name: 'Episodic',
      category: 'Technical',
    },
  ],
  title: {
    __typename: 'MediaTitle',
    english: '',
    native: 'カウボーイビバップ',
  },
  format: 'TV',
  seasonYear: 1998,
  status: 'FINISHED',
  episodes: 26,
};

export const mediaMockWithRegularScore = {
  __typename: 'Media',
  id: 1,
  averageScore: 75,
  coverImage: {
    __typename: 'MediaCoverImage',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  },
  tags: [
    {
      __typename: 'MediaTag',
      id: 63,
      name: 'Space',
      category: 'Setting-Universe',
    },
    {
      __typename: 'MediaTag',
      id: 648,
      name: 'Crime',
      category: 'Theme-Other',
    },
    {
      __typename: 'MediaTag',
      id: 193,
      name: 'Episodic',
      category: 'Technical',
    },
  ],
  title: {
    __typename: 'MediaTitle',
    english: '',
    native: 'カウボーイビバップ',
  },
  format: 'TV',
  seasonYear: 1998,
  status: 'FINISHED',
  episodes: 26,
};

export const mediaMockWithSuccessScore = {
  __typename: 'Media',
  id: 1,
  averageScore: 90,
  coverImage: {
    __typename: 'MediaCoverImage',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
  },
  title: {
    __typename: 'MediaTitle',
    english: '',
    native: 'カウボーイビバップ',
  },
  format: 'TV',
  seasonYear: 1998,
  status: 'FINISHED',
  episodes: 26,
};
