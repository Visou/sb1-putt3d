import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Share2, AlertTriangle } from 'lucide-react';
import { useSocialStore, Post } from '../../store/socialStore';
import { useThemeStore } from '../../store/themeStore';

export function FeedSection() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { posts, createPost, likePost } = useSocialStore();
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      createPost({
        userId: '1',
        userName: 'John Doe',
        content: newPost,
        type: 'social',
        likes: 0,
        comments: 0,
      });
      setNewPost('');
    }
  };

  const getPostIcon = (type: Post['type']) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'info':
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <MessageCircle className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Partagez votre expérience..."
          className={`w-full p-3 rounded-lg border ${
            isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}
          rows={3}
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Publier
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
              }`}>
                {getPostIcon(post.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{post.userName}</h4>
                  <span className="text-sm text-gray-500">
                    {post.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="mt-2">{post.content}</p>
                {post.route && (
                  <div className="mt-2 text-sm text-orange-500">
                    Ligne {post.route}
                  </div>
                )}
                <div className="flex items-center space-x-4 mt-4">
                  <button
                    onClick={() => likePost(post.id)}
                    className="flex items-center space-x-1 text-sm"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}