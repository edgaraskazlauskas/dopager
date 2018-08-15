export const isAuthenticated = (state) => !!state.auth.user;
export const isAuthenticationPromptOpen = (state) => state.auth.isPromptOpen;
