export const isAuthenticated = (state) => state.auth.user && !!state.auth.user.uid;
export const isAuthenticationPromptOpen = (state) => state.auth.isPromptOpen;
