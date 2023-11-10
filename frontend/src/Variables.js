import { atom } from "jotai";

export const RightSidebarAtom = atom(false);
export const SidebarWidthAtom = atom(30);
export const EditorFontFamilyAtom = atom("Arial");
export const EditorFontSizeAtom = atom(16);
export const EditorFontStyleAtom = atom("Normal");
export const UseChatGPTAtom = atom(true);
export const GPTContextAtom = atom("");
export const ResearchDataAtom = atom({
    docUrl: "",
    docsource: "",
    headline: "",
    title: "",
});
export const DocumentDataAtom = atom({
    id: "",
    title: "",
    content: "",
});
export const DocumentSearchAtom = atom("");
export const isAuthenticatedAtom = atom(false);
export const UserAtom = atom({
    first_name: "",
    last_name: "",
    info: { iss: "", azp: "", aud: "", sub: "", email: "", email_verified: true, at_hash: "", name: "", picture: "", given_name: "", family_name: "", locale: "", iat: 0, exp: 0 },
});
