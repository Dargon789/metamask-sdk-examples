import { createConfig, http, cookieStorage, createStorage } from "wagmi";
import { lineaSepolia, linea, mainnet } from "wagmi/chains";

export function getConfig() {
  return createConfig({
    chains: [lineaSepolia, linea, mainnet],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [lineaSepolia.id]: http(),
      [linea.id]: http(),
      [mainnet.id]: http(),
    },
  });
}
