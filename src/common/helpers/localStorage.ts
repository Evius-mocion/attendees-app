import { LocalStorageNames } from "../../../../data-hub/src/common/types";

export const saveItemInStorage = (name: LocalStorageNames, data: any) => {
	localStorage.setItem(name, data);
};
export const getItemInStorage = (name: LocalStorageNames) => {
	return localStorage.getItem(name);
};

export const removeItemInStorage = (name: LocalStorageNames) => {
	localStorage.removeItem(name);
};
