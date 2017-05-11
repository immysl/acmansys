const profile = (state = {}, action) => {
  switch (action.type) {
    case 'VIEW_PROFILE':
      return {
        profile: action.profile
      };
    case 'EDIT_PROFILE':
      return {
        profile: action.profile
      };
    case 'REMOVE_PROFILE':
      return {
        profile: action.profile
      };
    default:
      return {
        error: 'error: no such action'
      };
  }
};

export default profile;
