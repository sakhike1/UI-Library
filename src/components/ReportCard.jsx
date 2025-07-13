import React, { useState } from 'react';
import { 
  Eye, UserX, Home, AlertTriangle, Car, Shield, MapPin, Clock, Users, 
  Trash2, MessageCircle, Image, Video
} from 'lucide-react';
import { CommentSection } from './CommentSection';

export const ReportCard = ({
  report,
  comments,
  onDelete,
  onAddComment,
  onDeleteComment
}) => {
  const [showComments, setShowComments] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const typeIcons = {
    suspicious_activity: Eye,
    theft: UserX,
    vandalism: Home,
    safety_hazard: AlertTriangle,
    traffic: Car
  };

  const severityColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-red-100 text-red-800 border-red-200'
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

  const Icon = typeIcons[report.type];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Icon className="h-5 w-5 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${severityColors[report.severity]}`}>
                {report.severity.toUpperCase()}
              </span>
              {report.verified && (
                <span className="flex items-center space-x-1 text-green-600 text-xs">
                  <Shield className="h-3 w-3" />
                  <span>Verified</span>
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-3">{report.description}</p>
            
            {/* Media Display */}
            {report.media && report.media.length > 0 && (
              <div className="flex space-x-2 mb-3">
                {report.media.map((item, index) => (
                  <div key={index} className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.type === 'image' ? (
                      <Image className="h-3 w-3" />
                    ) : (
                      <Video className="h-3 w-3" />
                    )}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{report.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatTime(report.timestamp)}</span>
              </div>
              {report.updates > 0 && (
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{report.updates} updates</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowComments(!showComments)}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <CommentSection
          reportId={report.id}
          comments={comments}
          onAddComment={onAddComment}
          onDeleteComment={onDeleteComment}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Report</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this report? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(report.id);
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};