import React, { useState } from 'react';

const useCardFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const toggleCard = () => {
      setState(isUp => !isUp);
    }
    return [state, toggleCard]
};
export default useCardFlip;