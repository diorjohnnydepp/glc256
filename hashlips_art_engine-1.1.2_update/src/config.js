const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "GLC-256";
const description = "GLC-256 is a text-based ERC-721 collection. GLC-256 stands for GOOD LUCK CHARM-256 and the collection consists of 256 unique hash sequences, rooted in the SHA-256 cryptographic hash algorithm. SHA-256 is used to mine bitcoin and it is utilized in other popular encryption protocols as well as in operating systems such as LINUX. Each and every GOOD LUCK CHARM is an image of a phrase encrypted in SHA-256 and displayed in UNICODE, a universal character encoding standard. All of the NFTs in the GLC-256 collection contain something to the extent of a good fortune, an affirmation, or a poetic statement that manifests positivity. Anyone that collects & holds a GLC-256 NFT in their wallet might be rewarded with GOOD LUCK";
const baseUri = "ipfs://Qmap1uGhNqH4JGQ2L3viRCm1dK8MiUYnaP3WcBajuQnGGt";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 236,
    layersOrder: [
      { name: "Flat Color" },
      { name: "Hash Sequence" },
      { name: "Level" },
    ],
  },
  {
    growEditionSizeTo: 248,
    layersOrder: [
      { name: "Linear Gradient" },
      { name: "Hash Sequence" },
      { name: "Level" },
    ],
  },
  {
    growEditionSizeTo: 256,
    layersOrder: [
      { name: "Diamond Gradient" },
      { name: "Hash Sequence" },
      { name: "Level" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1920,
  height: 1080,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 256,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "totalpreview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
