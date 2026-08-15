import React, { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const mouseEnterHandler = (variant, text = '') => {
    setCursorVariant(variant);
    setCursorText(text);
  };

  const mouseLeaveHandler = () => {
    setCursorVariant('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorText, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
