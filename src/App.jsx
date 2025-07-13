import React, { useState } from 'react';
import { 
  Shield, Bell, Plus, Search, Clock, TrendingUp, TrendingDown,
  Eye, UserX, Home, AlertTriangle, Car
} from 'lucide-react';
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import { ReportCard } from './components/ReportCard';
import { ReportForm } from './components/ReportForm';
import { StatsCard } from './components/StatsCard';

export default function NeighborhoodSafetyTracker() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showReportForm, setShowReportForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([
    {
      id: 1,
      type: 'suspicious_activity',
      title: 'Suspicious Vehicle',
      description: 'White van parked for hours, occupants watching houses',
      location: 'Oak Street & 5th Ave',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      severity: 'medium',
      verified: true,
      anonymous: true,
      updates: 3
    },
    {
      id: 2,
      type: 'vandalism',
      title: 'Graffiti on Community Center',
      description: 'Fresh graffiti appeared overnight on the east wall',
      location: 'Community Center, Main St',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      severity: 'low',
      verified: false,
      anonymous: false,
      updates: 1
    },
    {
      id: 3,
      type: 'safety_hazard',
      title: 'Broken Streetlight',
      description: 'Streetlight out creating dark spot on walking path',
      location: 'Elm Street near park entrance',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      severity: 'medium',
      verified: true,
      anonymous: true,
      updates: 0
    }
  ]);

  const [comments, setComments] = useState({
    1: [
      { id: 1, text: 'I saw this too yesterday', author: 'Neighbor', timestamp: new Date(Date.now() - 60 * 60 * 1000), anonymous: false },
      { id: 2, text: 'Police were notified', author: 'Anonymous', timestamp: new Date(Date.now() - 30 * 60 * 1000), anonymous: true }
    ],
    2: [],
    3: [
      { id: 3, text: 'Reported to city maintenance', author: 'Admin', timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), anonymous: false }
    ]
  });

  const categories = [
    { id: 'all', name: 'All Reports', icon: Shield },
    { id: 'suspicious_activity', name: 'Suspicious Activity', icon: Eye },
    { id: 'theft', name: 'Theft', icon: UserX },
    { id: 'vandalism', name: 'Vandalism', icon: Home },
    { id: 'safety_hazard', name: 'Safety Hazard', icon: AlertTriangle },
    { id: 'traffic', name: 'Traffic Issues', icon: Car }
  ];

  const filteredReports = reports.filter(report => {
    const matchesCategory = selectedCategory === 'all' || report.type === selectedCategory;
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmitReport = (reportData) => {
    const report = {
      ...reportData,
      id: Date.now(),
      timestamp: new Date(),
      verified: false,
      updates: 0
    };
    setReports([report, ...reports]);
    setComments(prev => ({ ...prev, [report.id]: [] }));
  };

  const handleDeleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
    setComments(prev => {
      const newComments = { ...prev };
      delete newComments[id];
      return newComments;
    });
  };

  const handleAddComment = (reportId, commentData) => {
    const newComment = {
      ...commentData,
      id: Date.now(),
      timestamp: new Date()
    };
    setComments(prev => ({
      ...prev,
      [reportId]: [...(prev[reportId] || []), newComment]
    }));
  };

  const handleDeleteComment = (reportId, commentId) => {
    setComments(prev => ({
      ...prev,
      [reportId]: prev[reportId].filter(comment => comment.id !== commentId)
    }));
  };

  const getStats = () => {
    const total = reports.length;
    const thisWeek = reports.filter(r => (new Date().getTime() - r.timestamp.getTime()) < 7 * 24 * 60 * 60 * 1000).length;
    const lastWeek = reports.filter(r => {
      const diff = new Date().getTime() - r.timestamp.getTime();
      return diff >= 7 * 24 * 60 * 60 * 1000 && diff < 14 * 24 * 60 * 60 * 1000;
    }).length;
    
    return { total, thisWeek, lastWeek };
  };

  const stats = getStats();

  return (
   <>
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SafetyTracker</h1>
                <p className="text-sm text-gray-600">Community Safety Network</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowReportForm(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Report Issue</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Total Reports" 
            value={stats.total} 
            icon={Shield} 
            color="bg-blue-100 text-blue-600" 
          />
          <StatsCard 
            title="This Week" 
            value={stats.thisWeek} 
            icon={Clock} 
            color="bg-green-100 text-green-600" 
          />
          <StatsCard 
            title="Trend" 
            value={stats.thisWeek > stats.lastWeek ? `+${stats.thisWeek - stats.lastWeek}` : `-${stats.lastWeek - stats.thisWeek}`}
            icon={stats.thisWeek > stats.lastWeek ? TrendingUp : TrendingDown}
            color={stats.thisWeek > stats.lastWeek ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}
          />
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {filteredReports.map(report => (
            <ReportCard
              key={report.id}
              report={report}
              comments={comments[report.id] || []}
              onDelete={handleDeleteReport}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
            />
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No reports found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Report Form Modal */}
      {showReportForm && (
        <ReportForm
          onSubmit={handleSubmitReport}
          onClose={() => setShowReportForm(false)}
        />
      )}
    </div>
    <Footer/>
    </>
  );
}