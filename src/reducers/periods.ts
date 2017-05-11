const period = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PERIOD':
      return {
        period: action.period
      };
    case 'REMOVE_PERIOD':
      return {
        id: action.id
      };
    default:
      return {
        error: 'error: no such action'
      };
  }
};

export default period;
