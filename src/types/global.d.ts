// Declare global in a TypeScript file (e.g., `global.d.ts`)
declare global {
    interface Window {
      navigateToCareProcess: () => void;
    }
  }