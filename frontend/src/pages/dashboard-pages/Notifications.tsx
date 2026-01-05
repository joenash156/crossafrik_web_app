import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface Notification {
  id: number
  type: 'success' | 'info' | 'warning' | 'error'
  title: string
  message: string
  time: string
  isRead: boolean
  icon: string
  color: string
  bgColor: string
}

const Notifications = () => {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all')
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'success',
      title: 'Application Accepted',
      message: 'Your application for Software Engineering Internship has been accepted. Congratulations!',
      time: '5 minutes ago',
      isRead: false,
      icon: 'fa-check-circle',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Opportunity Available',
      message: 'A new scholarship opportunity matching your profile has been posted: STEM Excellence Award 2024.',
      time: '2 hours ago',
      isRead: false,
      icon: 'fa-info-circle',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Application Deadline Approaching',
      message: 'The deadline for MIT Research Fellowship is in 3 days. Don\'t miss out!',
      time: '5 hours ago',
      isRead: false,
      icon: 'fa-exclamation-triangle',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 4,
      type: 'success',
      title: 'Profile Updated Successfully',
      message: 'Your profile information has been updated and saved successfully.',
      time: '1 day ago',
      isRead: true,
      icon: 'fa-user-check',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 5,
      type: 'info',
      title: 'Interview Scheduled',
      message: 'Your interview for Data Analyst Position has been scheduled for Jan 25, 2024 at 10:00 AM.',
      time: '1 day ago',
      isRead: true,
      icon: 'fa-calendar-check',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 6,
      type: 'error',
      title: 'Application Rejected',
      message: 'Unfortunately, your application for Marketing Assistant Role was not successful this time.',
      time: '2 days ago',
      isRead: true,
      icon: 'fa-times-circle',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      id: 7,
      type: 'info',
      title: 'Document Verification Required',
      message: 'Please upload your academic transcripts to complete your scholarship application.',
      time: '3 days ago',
      isRead: true,
      icon: 'fa-file-alt',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 8,
      type: 'success',
      title: 'Payment Received',
      message: 'Your scholarship payment of $5,000 has been processed successfully.',
      time: '1 week ago',
      isRead: true,
      icon: 'fa-dollar-sign',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ])

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.isRead
    if (filter === 'read') return notification.isRead
    return true
  })

  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, isRead: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all notifications?')) {
      setNotifications([])
    }
  }

  useEffect(() => {
    document.title = "CrossAfrik | Notifications";
  }, []);

  return (
    <div className="space-y-6 w-full max-w-full" data-aos="fade-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 inline-block">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">Stay updated with your latest activities</p>
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden sm:flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-check-double"></i>
              Mark All as Read
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-trash-alt"></i>
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs & Mobile Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-full sm:w-fit">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${filter === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
            >
              <i className="fas fa-inbox mr-2"></i>
              All ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${filter === 'unread' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
            >
              <i className="fas fa-envelope mr-2"></i>
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${filter === 'read' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
            >
              <i className="fas fa-envelope-open mr-2"></i>
              Read ({notifications.length - unreadCount})
            </button>
          </div>

          {/* Action Buttons - Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <i className="fas fa-check-double"></i>
                <span className="hidden xs:inline">Mark All</span>
              </button>
            )}
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <i className="fas fa-trash-alt"></i>
                <span className="hidden xs:inline">Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <i className="fas fa-bell-slash text-3xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Notifications</h3>
            <p className="text-sm text-gray-500">
              {filter === 'unread'
                ? "You're all caught up! No unread notifications."
                : filter === 'read'
                  ? "No read notifications found."
                  : "You don't have any notifications yet."}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${notification.isRead
                ? 'border-gray-100 opacity-75'
                : 'border-blue-200 bg-blue-50/30'
                }`}
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 ${notification.bgColor} rounded-full flex items-center justify-center`}>
                    <i className={`fas ${notification.icon} text-xl ${notification.color}`}></i>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                        {notification.title}
                        {!notification.isRead && (
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                        )}
                      </h3>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors duration-200 p-1"
                        title="Delete notification"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {notification.message}
                    </p>

                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center text-xs text-gray-500">
                        <i className="far fa-clock mr-1.5"></i>
                        {notification.time}
                      </div>

                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center gap-1"
                        >
                          <i className="fas fa-check"></i>
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More (if needed) */}
      {filteredNotifications.length > 0 && (
        <div className="text-center pt-4">
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
            <i className="fas fa-sync-alt"></i>
            Load More Notifications
          </button>
        </div>
      )}
    </div>
  )
}

export default Notifications
