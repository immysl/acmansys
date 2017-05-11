export const addPeriod = (period) => {
  return {type: 'ADD_PERIOD', period};
};

export const editPeriod = (id) => {
  return {type: 'EDIT_PERIOD', id};
};

export const removePeriod = (id) => {
  return {type: 'REMOVE_PERIOD', id};
};

export const addProfile = (profile) => {
  return {type: 'ADD_PROFILE', profile};
};

export const editProfile = (profile) => {
  return {type: 'EDIT_PROFILE', profile};
};

export const removeProfile = (profile) => {
  return {type: 'REMOVE_PROFILE', profile};
};
