import { create } from 'zustand';

export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  level: number;
  points: number;
  badges: string[];
  carbonSaved: number;
}

export interface Community {
  id: string;
  name: string;
  members: number;
  description: string;
  route: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  type: 'alert' | 'info' | 'social';
  route?: string;
  likes: number;
  comments: number;
  timestamp: Date;
}

interface SocialState {
  communities: Community[];
  posts: Post[];
  userProfile: UserProfile | null;
  joinCommunity: (communityId: string) => void;
  leaveCommunity: (communityId: string) => void;
  createPost: (post: Omit<Post, 'id' | 'timestamp'>) => void;
  likePost: (postId: string) => void;
}

export const useSocialStore = create<SocialState>((set) => ({
  communities: [],
  posts: [],
  userProfile: null,
  joinCommunity: (communityId) => 
    set((state) => ({
      communities: state.communities.map(c =>
        c.id === communityId ? { ...c, members: c.members + 1 } : c
      )
    })),
  leaveCommunity: (communityId) =>
    set((state) => ({
      communities: state.communities.map(c =>
        c.id === communityId ? { ...c, members: c.members - 1 } : c
      )
    })),
  createPost: (post) =>
    set((state) => ({
      posts: [{
        ...post,
        id: Date.now().toString(),
        timestamp: new Date(),
      }, ...state.posts]
    })),
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map(p =>
        p.id === postId ? { ...p, likes: p.likes + 1 } : p
      )
    })),
}));