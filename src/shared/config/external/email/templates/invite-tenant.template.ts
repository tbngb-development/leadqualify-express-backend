export function inviteTenantEmailHtml(params: {
  tenantName: string;
  planName: string;
  inviteUrl: string;
  expiresAt: string;
}): string {
  return `
    <h2>You're invited to join ${params.tenantName}</h2>
    <p>Plan: <strong>${params.planName}</strong></p>
    <p><a href="${params.inviteUrl}">Accept invite &amp; create account</a></p>
    <p>Expires: ${params.expiresAt}</p>
  `;
}
