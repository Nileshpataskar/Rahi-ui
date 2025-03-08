export const convertGoogledriveImage = (url: string): string => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};