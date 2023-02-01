export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SMTP_PORT: string;
      HOSTNAME: string;
      NODE_ENV: string;
    }
  }
}
