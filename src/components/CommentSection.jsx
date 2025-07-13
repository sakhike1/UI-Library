import React, { useState } from 'react';
import { MessageCircle, Send, Trash2, Clock } from 'lucide-react';

export const CommentSection = ({
  reportId,
  comments,
  onAddComment,
  onDeleteComment
}) => {
  const [newComment, setNewComment] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(reportId, {
        text: newComment,
        author: isAnonymous ? 'Anonymous' : 'User',
        anonymous: isAnonymous
      });
      setNewComment('');
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex items-center space-x-2 mb-4">
        <MessageCircle className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          Comments ({comments.length})
        </span>
      </div>

      {/* Comments List */}
      <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {comment.author}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(comment.timestamp)}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{comment.text}</p>
              </div>
              <button
                onClick={() => onDeleteComment(reportId, comment.id)}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`anonymous-${reportId}`}
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor={`anonymous-${reportId}`} className="text-xs text-gray-600">
            Comment anonymously
          </label>
        </div>
      </form>
    </div>
  );
};