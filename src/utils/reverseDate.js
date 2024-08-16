const reverseDate = (dateString) => {
  return dateString?.split('-')?.reverse()?.join('-');
};

export default reverseDate;
