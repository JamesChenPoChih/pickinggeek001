/// <reference types="vite/client" />

interface GoogleCredentialResponse {
  credential: string;
}

interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: GoogleCredentialResponse) => void;
          ux_mode?: "popup" | "redirect";
          use_fedcm_for_button?: boolean;
        }) => void;
        renderButton: (element: HTMLElement, options: Record<string, string | number>) => void;
        cancel: () => void;
      };
    };
  };
}
