import * as React from "react";
import * as CONST from "./../constants";

const iconStyle = {
  width: "20px", 
  padding: "8px",
};
const style = {
  email:      {...iconStyle, ...{fill: "#ffffff", background: "#453a5c"}},
  github:     {...iconStyle, ...{fill: "#ffffff", background: "#181717"}},
  orcid:      {...iconStyle, ...{fill: "#ffffff", background: "#95c020"}},
  qiita:      {...iconStyle, ...{fill: "#ffffff", background: "#55c500"}},
  speakerdeck:{...iconStyle, ...{fill: "#ffffff", background: "#009287"}},
};

export const email =
<svg style={style.email} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 477.867 477.867"><title>Display email address</title><path d="M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z"/><path d="M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z"/></svg>;

export const github =
<svg style={style.github} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{CONST.accounts.github}</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;

export const orcid =
<svg style={style.orcid} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{CONST.accounts.orcid}</title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>;

export const qiita =
<svg style={style.qiita} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{CONST.accounts.qiita}</title><path d="M3.57 8.343a3.653 3.653 0 0 0-1.376.269 3.585 3.585 0 0 0-1.14.738 3.503 3.503 0 0 0-.773 1.102A3.297 3.297 0 0 0 0 11.814a3.28 3.28 0 0 0 .281 1.357 3.535 3.535 0 0 0 .775 1.107A3.636 3.636 0 0 0 3.6 15.29a3.731 3.731 0 0 0 .987-.13 3.657 3.657 0 0 0 .888-.374l.687.698a.579.579 0 0 0 .824 0 .58.58 0 0 0 0-.817l-.624-.624a3.533 3.533 0 0 0 .613-1.022 3.282 3.282 0 0 0 .226-1.208 3.297 3.297 0 0 0-.282-1.362 3.488 3.488 0 0 0-.775-1.102A3.614 3.614 0 0 0 5 8.612a3.657 3.657 0 0 0-1.398-.27 3.653 3.653 0 0 0-.031 0zm11.306.185v1.484h-.765v1.063h.765v2.142c0 .419.053.761.159 1.028a1.56 1.56 0 0 0 .433.63 1.511 1.511 0 0 0 .643.317 2.676 2.676 0 0 0 .694.086h.853v-1.013h-.736a1.25 1.25 0 0 1-.352-.048.713.713 0 0 1-.291-.169.81.81 0 0 1-.2-.324 1.575 1.575 0 0 1-.074-.519v-2.13h1.666v-1.063h-1.66V8.528zM9.4 8.856a.69.69 0 0 0-.69.691.69.69 0 0 0 .69.69.69.69 0 0 0 .691-.69.69.69 0 0 0-.69-.691zm2.771 0a.69.69 0 0 0-.69.691.69.69 0 0 0 .69.69.69.69 0 0 0 .691-.69.69.69 0 0 0-.69-.691zm-8.6.538a2.324 2.324 0 0 1 .03 0 2.35 2.35 0 0 1 .93.187 2.346 2.346 0 0 1 1.264 1.28 2.463 2.463 0 0 1 .186.957 2.444 2.444 0 0 1-.186.957 2.384 2.384 0 0 1-.506.767 2.363 2.363 0 0 1-1.688.698 2.324 2.324 0 0 1-.93-.186 2.376 2.376 0 0 1-.755-.512 2.427 2.427 0 0 1-.699-1.723 2.44 2.44 0 0 1 .699-1.727 2.384 2.384 0 0 1 .756-.511 2.324 2.324 0 0 1 .898-.187zm17.648.773a2.69 2.69 0 0 0-1.02.201 2.49 2.49 0 0 0-.815.552 2.432 2.432 0 0 0-.525.814 2.678 2.678 0 0 0-.186.998 2.644 2.644 0 0 0 .186.997 2.485 2.485 0 0 0 .525.814 2.436 2.436 0 0 0 .815.546 2.697 2.697 0 0 0 1.059.2 2.42 2.42 0 0 0 .518-.056 2.524 2.524 0 0 0 .46-.146 2.426 2.426 0 0 0 .394-.213 2.394 2.394 0 0 0 .329-.263l.065.53H24v-4.829h-.976l-.068.533a2.498 2.498 0 0 0-.322-.26 2.25 2.25 0 0 0-.394-.217 2.616 2.616 0 0 0-.462-.145 2.404 2.404 0 0 0-.521-.056 2.69 2.69 0 0 0-.038 0zm-12.375.844v4.138h1.113V11.01zm2.77 0v4.138h1.114V11.01zm9.72.145a1.592 1.592 0 0 1 .024 0 1.557 1.557 0 0 1 1.098.445 1.495 1.495 0 0 1 .334.495 1.61 1.61 0 0 1 .121.631 1.632 1.632 0 0 1-.121.64 1.551 1.551 0 0 1-.331.498 1.47 1.47 0 0 1-.49.324 1.642 1.642 0 0 1-1.207 0 1.502 1.502 0 0 1-.493-.324 1.52 1.52 0 0 1-.333-.5 1.64 1.64 0 0 1-.122-.638 1.628 1.628 0 0 1 .12-.637 1.524 1.524 0 0 1 .328-.495 1.474 1.474 0 0 1 .49-.323 1.592 1.592 0 0 1 .581-.116z"/></svg>;

export const speakerdeck =
<svg style={style.speakerdeck} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{CONST.accounts.speakerdeck}</title><path d="M10.025 13.875H4.687a4.688 4.688 0 0 1 0-9.375h6.227a1.875 1.875 0 0 1 0 3.75H4.592a.937.937 0 1 0 0 1.875h5.337a4.687 4.687 0 1 1 0 9.375H1.875a1.875 1.875 0 0 1 0-3.75h8.15a.938.938 0 0 0 0-1.875zM13.97 19.5a5.635 5.635 0 0 0 2.396-3.75h3.026a.93.93 0 0 0 .921-.938V9.189a.93.93 0 0 0-.921-.938h-5.497c.438-.498.704-1.155.704-1.875s-.266-1.377-.704-1.875h6.418C22.35 4.5 24 6.179 24 8.25v7.5c0 2.071-1.65 3.75-3.687 3.75H13.97z"/></svg>;



