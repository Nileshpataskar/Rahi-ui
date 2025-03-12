export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  menu?: Menu[];
  subMenu?: { name: string; path: string }[];
  name?: string;
}
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    menu: [
      {
        id: 61,
        title: "ABS Door MCB Box",
        path: "/products/mcbbox",
        newTab: false,
      },
      {
        id: 62,
        title: "BUS Bar Chambers",
        path: "/products/modular_metal_box",
        newTab: false,
        subMenu: [
          {
            name: "Copper BUS Bar Chamber",
            path: "/products/BusBar/copper-bus-bar",
          },
          {
            name: "Copper Bus Bar chamber with HRC Fuse base",
            path: "/products/BusBar/copper-bus-bar-hrc",
          },
        ],
      },
      {
        id: 63,
        title: "Double Door MCB Box",
        path: "",
        newTab: false,
        subMenu: [
          { name: "Prime Series SPN Double Door MCB Box", path: "/products/doubleMCB/spn" },
          { name: "Prime series TPN Double Door MCB Box", path: "/products/doubleMCB/tpn" },
          { name: "Standard Series SPN Double Door MCB Box", path: "/products/doubleMCB/stdspn" },
          { name: "Standard series TPN Double Door MCB Box", path: "/products/doubleMCB/stdtpn" },
        ],
      },
      {
        id: 64,
        title: "Double door Mcb box with TV-TEL",
        path: "/products/",
        newTab: false,
        subMenu: [
          { name: "SPN Double Door Mcb box with TV-Tel", path: "/products/doubleMCB-TV-Tel/spn" },
          { name: "TPN Double Door Mcb box with TV-Tel", path: "/products/doubleMCB-TV-Tel/tpn" },
        ],
      },
      {
        id: 66,
        title: "ISI PVC Conduit Pipe",
        path: "/products/conduitpipe",
        newTab: false,
      },
      {
        id: 67,
        title: "MCB Metal Enclosures",
        path: "/products/",
        newTab: false,

        subMenu: [
          { name: "ABS Double Door MCB Box", path: "/products/mcbmetalenc/abs" },
          { name: "PVC MCB Box with Metal Back", path: "/products/mcbmetalenc/pvc" },
          { name: "SPN Metal Enclosures", path: "/products/mcbmetalenc/spn" },
          { name: "TPN Metal Enclosures", path: "/" },
        ],
      },
      {
        id: 68,
        title: "Modular Double Wall Surface box",
        path: "/products/surfacebox",
        newTab: false,
      },
      {
        id: 69,
        title: "Modular GI Metal Box",
        path: "/products/modulargimetalbox",
        newTab: false,
      },
      {
        id: 70,
        title: "Modular Silver line Gang box",
        path: "/products/gangbox",
        newTab: false,
      },
      {
        id: 71,
        title: "NOVA SERIES NON ISI PVC Conduit Pipe",
        path: "/products/nonisipipe",
        newTab: false,
      },

      {
        id: 72,
        title: "PVC Conduit Pipe Accesories",
        path: "/products/pipeaccesories",
        newTab: false,
        subMenu: [
          { name: "Bend", path: "/products/pipeaccesories/bend" },
          { name: "Coupler", path: "/products/pipeaccesories/coupler" },
          {
            name: "Junction Box",
            path: "/products/pipeaccesories/junctionbox",
          },
          {
            name: "Deep Junction Box",
            path: "/products/pipeaccesories/deepjunction",
          },
        ],
      },
      // {
      //   id: 73,
      //   title: "Round Fan Box GI",
      //   path: "/products/fanbox",
      //   newTab: false,
      // },
      {
        id: 74,
        title: "Round Plates",
        path: "/products/roundplates",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Download",
    path: "/download",
    newTab: false,
  },
  {
    id: 4,
    title: "About us",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
