import AuthApi from "../api/auth";
import { CreateUser, LoginRequestData, UserDTO } from "../api/types";
import { PAGES, router } from "../core/Router";
import { apiHasError } from "../utils/apiHasError";
import { transformUser } from "../utils/apiTransformers";

const authApi = new AuthApi();

const getUser = async () => {
    const responseUser = await authApi.me();
    if (apiHasError(responseUser)) {
        throw Error(responseUser.reason)
    }

    return transformUser(responseUser as UserDTO);
}

const signin = async (data: LoginRequestData) => {
    const response = await authApi.login(data);
    if (apiHasError(response)) {
        throw Error(response.reason)
    }

    const me = await getUser();

    window.store.set({ user: me });
    console.log("STORE: ", window.store.getState())
    router.go(PAGES.CHATS)
}

const signup = async (data: CreateUser) => {
    const response = await authApi.create(data);
    if (apiHasError(response)) {
        throw Error(response.reason)
    }

    const me = await getUser();
    window.store.set({ user: me });
    console.log("STORE: ", window.store.getState())
    router.go(PAGES.CHATS)
}

const logout = async () => {
    await authApi.logout();
    window.store.set({ user: null, chats: [] });
    console.log("STORE: ", window.store.getState())
    router.go(PAGES.LOGIN)
}

export {
    getUser,
    signin,
    signup,
    logout,
}
