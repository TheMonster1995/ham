import React, { useContext, useState } from 'react';

const StoriesContext = React.createContext();
const StoriesContextUpdate = React.createContext();

export const useStory = () => useContext(StoriesContext)

export const useStoryUpdate = () => useContext(StoriesContextUpdate)

export const StoryProvider = ({ children }) => {
  const [open, setOpen] = useState(null);

  const updateOpen = (val = null) => setOpen(val);

  return (
    <StoriesContext.Provider value={open}>
      <StoriesContextUpdate.Provider value={updateOpen}>
        {children}
      </StoriesContextUpdate.Provider>
    </StoriesContext.Provider>
  )
}
