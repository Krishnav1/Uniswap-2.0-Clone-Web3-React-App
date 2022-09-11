import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x1F5D5A57ABaB9725BB2Ad9A62566e71726Ee483C"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/JgouXYXc0D1UxjGGVjC2Ro9pPzP2szXe",
  },
};