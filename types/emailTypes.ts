export type EmailTemplate = {
  name: string;
  subject: string;
  html: string;
  footer?: { html: string };
};