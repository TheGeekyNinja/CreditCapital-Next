import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import {  polygon, type AppKitNetwork } from '@reown/appkit/networks';

// Get projectId from environment variables
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [polygon] as [AppKitNetwork, ...AppKitNetwork[]];

// Set up the Wagmi Adapter (Config) for managing wallet connections
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
