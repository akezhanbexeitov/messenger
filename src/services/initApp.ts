import { PAGES, navigate } from "../core/navigate";
import { getUser } from "./auth";
import { getChats } from "./chat";

const initApp = async () => {
  let me = null;
  try {
    me = await getUser();
  } catch (error) {
    navigate(PAGES.LOGIN);
    return;
  }

  const chats = await getChats();
  window.store.set({ user: me, chats });
  navigate(PAGES.CHATS)
}

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
}

export {
  initApp,
  initChatPage
}
