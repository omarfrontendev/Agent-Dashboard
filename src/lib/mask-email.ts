const INVALID_EMAIL_MASK = "••••••••";
const MASKED_LOCAL_PART = "•••••••";

export function maskEmail(email: string | null | undefined): string {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return INVALID_EMAIL_MASK;
  }

  const [localPart, domain] = email.split("@");

  if (!localPart || !domain) {
    return INVALID_EMAIL_MASK;
  }

  return `${localPart.charAt(0)}${MASKED_LOCAL_PART}@${domain}`;
}
