const extractSlices = (data) => {
  const slices = data?.prismic?.staticpage?.body || [];

  return slices;
};

export default extractSlices;
