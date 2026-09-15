import React, { createContext, useContext, useState, useCallback } from 'react';

const ScheduleModalContext = createContext();

export const ScheduleModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({ service: '', projectTitle: '' });

  const openScheduleModal = useCallback((options = {}) => {
    setInitialData({
      service: options.service || '',
      projectTitle: options.projectTitle || ''
    });
    setIsOpen(true);
  }, []);

  const closeScheduleModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ScheduleModalContext.Provider
      value={{
        isOpen,
        initialData,
        openScheduleModal,
        closeScheduleModal
      }}
    >
      {children}
    </ScheduleModalContext.Provider>
  );
};

export const useScheduleModal = () => {
  const context = useContext(ScheduleModalContext);
  if (!context) {
    throw new Error('useScheduleModal must be used within a ScheduleModalProvider');
  }
  return context;
};
