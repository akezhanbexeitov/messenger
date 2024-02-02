import { PAGES, router } from "../core/Router";
import { getUser } from "./auth";
import { getChats } from "./chat";

const initApp = async () => {
  let me = null;
  try {
    me = await getUser();
  } catch (error) {
    router.go(PAGES.LOGIN)
    return;
  }
  
  window.store.set({ user: me });
  console.log("STORE: ", window.store.getState())

  if (window.location.pathname === PAGES.LOGIN || window.location.pathname === PAGES.REGISTER) { 
    router.go(PAGES.CHATS);
  }
}

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
  console.log("STORE: ", window.store.getState())
}

export {
  initApp,
  initChatPage,
}
