export function convertImageHelper(url: string): string {
  // Check if it's a Google Drive URL
  if (url.includes("drive.google.com")) {
    // Extract the file ID from the URL
    const fileId = url.match(/\/d\/(.*?)\/view/)?.[1];
    if (fileId) {
      // Return the direct download URL format
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  // Return the original URL if it's not a Google Drive URL
  return url;
}
