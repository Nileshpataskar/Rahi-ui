export function convertGoogledriveImage(url: string): string {
  if (url.includes("drive.google.com")) {
    const fileId = url.match(/\/d\/(.*?)\/view/)?.[1];
    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  return url;
}
