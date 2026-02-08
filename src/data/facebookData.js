export const currentUser = {
  id: 1,
  name: 'Kaif Islam',
  avatar: 'https://i.pravatar.cc/150?img=1',
  online: true,
};

export const sidebarItems = [
  { id: 1, icon: 'Meta AI', label: 'Meta AI', color: '#E7F3FF' },
  { id: 2, icon: 'Friends', label: 'Friends', color: '#EBF5FF' },
  { id: 3, icon: 'Memories', label: 'Memories', color: '#FEF3C7' },
  { id: 4, icon: 'Saved', label: 'Saved', color: '#DDD6FE' },
  { id: 5, icon: 'Groups', label: 'Groups', color: '#E0E7FF' },
  { id: 6, icon: 'Reels', label: 'Reels', color: '#FED7AA' },
  { id: 7, icon: 'Marketplace', label: 'Marketplace', color: '#DBEAFE' },
  { id: 8, icon: 'Feeds', label: 'Feeds', color: '#ECFDF5' },
  { id: 9, icon: 'Events', label: 'Events', color: '#FCE7F3' },
];

export const stories = [
  {
    id: 1,
    type: 'create',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    userName: 'Your Story',
  },
  {
    id: 2,
    type: 'story',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    userName: 'Mujtaba Rathore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600',
    hasViewed: false,
  },
  {
    id: 3,
    type: 'story',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    userName: 'Raeed Muhammad',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600',
    hasViewed: false,
  },
  {
    id: 4,
    type: 'story',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    userName: 'Fawad Jameel Rathore',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600',
    hasViewed: false,
  },
  {
    id: 5,
    type: 'story',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    userName: 'Ahmed Ali',
    image: 'https://images.unsplash.com/photo-1504681869696-d977e3086ae0?w=500&h=600',
    hasViewed: true,
  },
];

export const posts = [
  {
    id: 1,
    userId: 2,
    userName: 'Zain Shahid Rathore',
    userAvatar: 'https://i.pravatar.cc/150?img=6',
    location: 'Rawalpindi',
    timestamp: '4h',
    content: 'Collecting moments 🎉❤️',
    hashtags: ['#moments', '#viral', '#friends', '#foryoupage', '#rawalpindi'],
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=400',
    ],
    likes: 2456,
    comments: 189,
    shares: 45,
    reactions: {
      like: 1200,
      love: 800,
      haha: 300,
      wow: 156,
    },
  },
  {
    id: 2,
    userId: 3,
    userName: 'Mujtaba Rathore',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    location: 'Islamabad',
    timestamp: '2h',
    content: 'Amazing day with friends! Nature at its best 🌿',
    hashtags: ['#nature', '#friends', '#explore', '#beautiful'],
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=400',
    ],
    likes: 1234,
    comments: 98,
    shares: 23,
    reactions: {
      like: 800,
      love: 300,
      haha: 100,
      wow: 34,
    },
  },
  {
    id: 3,
    userId: 4,
    userName: 'Fatima Khan',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    location: 'Karachi',
    timestamp: '1h',
    content: 'Just launched my new project! Check it out 🚀',
    hashtags: ['#startup', '#technology', '#launch', '#excited'],
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400',
    ],
    likes: 3421,
    comments: 267,
    shares: 156,
    reactions: {
      like: 2000,
      love: 900,
      haha: 400,
      wow: 121,
    },
  },
];

export const sponsoredAds = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200',
    title: 'Finish signing up for Azure',
    url: 'azure.microsoft.com',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200',
    title: 'Start Your UK Journey Here',
    url: 'hotcoursesabroad.com/northu...',
  },
];

export const birthdays = [
  {
    id: 1,
    name: 'Hammad Rathore',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 2,
    name: 'Tarif Mughal',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
];

export const onlineContacts = [
  {
    id: 1,
    name: 'Meta AI',
    avatar: 'https://i.pravatar.cc/150?img=20',
    online: true,
  },
  {
    id: 2,
    name: 'Ahmed Khan',
    avatar: 'https://i.pravatar.cc/150?img=11',
    online: true,
  },
  {
    id: 3,
    name: 'Sara Ali',
    avatar: 'https://i.pravatar.cc/150?img=12',
    online: true,
  },
  {
    id: 4,
    name: 'Hassan Rauf',
    avatar: 'https://i.pravatar.cc/150?img=13',
    online: true,
  },
  {
    id: 5,
    name: 'Zainab Malik',
    avatar: 'https://i.pravatar.cc/150?img=14',
    online: true,
  },
];
