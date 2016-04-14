export const addPeriod = (period) => {
  return {
    type: 'ADD_PERIOD',
    period
  }
}

export const editPeriod = (period) => {
  return {
    type: 'EDIT_PERIOD',
    period
  }
}
