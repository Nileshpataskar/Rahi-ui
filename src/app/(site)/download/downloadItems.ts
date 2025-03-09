export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: string;
  category: string;
  downloadUrl: string;
  date: string;
  version?: string;
  thumbnail?: string;
}

export const downloadItems: DownloadItem[] = [
  {
    id: "1",
    title: "Product Catalog ",
    description:
      "Complete catalog of our premium electrical accessories with detailed specifications.",
    fileType: "pdf",
    category: "catalogue",
    downloadUrl:
      "https://drive.google.com/file/d/1_AOPnuXKLrJQ8pdn7CwtvsP-GGpUjAep/view?usp=drive_link",
    date: "2024-05-15",
    thumbnail:
      "https://drive.google.com/file/d/1Rm3sh2Nw-S_Q3Dqv18Zsr42KKn3ew39H/view?usp=drive_link",
  },
  {
    id: "2",
    title: "Products Brochure",
    description:
      "Detailed technical specifications for all product lines with engineering diagrams.",
    fileType: "pdf",
    category: "brochure",
    downloadUrl:
      "https://drive.google.com/file/d/1GXzB5vVy2gK8Zkmx5klMb4lhhwu9FwRL/view?usp=drive_link",
    date: "2024-06-22",
    thumbnail:
      "https://drive.google.com/file/d/1PtNbqJ14jbIJYAM7HidrHdW9iSKCneev/view?usp=drive_link",
  },
  {
    id: "3",
    title: "Rahi Pipe Brochure",
    description:
      "Step-by-step installation instructions for our premium electrical products.",
    fileType: "pdf",
    category: "brochure",
    downloadUrl:
      "https://drive.google.com/file/d/1rqmd4V-z9Q2CeUDZV1eVacywJACdebg8/view?usp=drive_link",
    date: "2024-04-10",
    thumbnail:
      "https://drive.google.com/file/d/10Bt57PzWIsTa_WvtUdq9bDNNQfkjp5mZ/view?usp=drive_link",
  },
];
