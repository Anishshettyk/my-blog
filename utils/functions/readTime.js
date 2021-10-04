const wordPerMin = 225;

const readTime = (content) => {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordPerMin);
};

export default readTime;
