import { useConnect as useWalletConnect } from '@walletconnect/modal-sign-react';
import {
  wc_aleo_chains,
  wc_aleo_methods,
  wc_events,
} from '../data/walletconnect.js';

export const useConnect = () => {
  return useWalletConnect({
    requiredNamespaces: {
      aleo: {
        methods: wc_aleo_methods,
        chains: wc_aleo_chains,
        events: wc_events,
      },
    },
  });
};
