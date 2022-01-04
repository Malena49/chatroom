export const getMaxId = (state) => {
    const ids = state.messages.map(
      (message) => message.id,
    );
  
    return Math.max(...ids, 0);
  };