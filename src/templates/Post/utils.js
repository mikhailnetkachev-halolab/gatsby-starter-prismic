const extractPost = (data) => {
  return data?.prismic?.allPosts?.edges[0]?.node || {};
};

export { extractPost };
