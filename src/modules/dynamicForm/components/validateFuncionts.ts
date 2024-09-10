import { IDynamicFieldNumber, IDynamicFieldPhone, IDynamicFieldSelect, IDynamicFieldText } from '../types/dynamicForm';

export const validateNumberField = (field: IDynamicFieldNumber, value: any): string | undefined => {
	const numValue = Number(value);
	if (field.rules?.min?.active && numValue < field.rules.min.value)
		return !!field.rules.min.message ? field.rules.min.message : `El valor debe ser mayor a ${field.rules.min.value}`;
	if (field.rules?.max?.active && numValue > field.rules.max.value)
		return !!field.rules.max.message
			? field.rules.max.message
			: `El valor no debe ser mayor a ${field.rules.max.value}`;
	return undefined;
};

export const validateTextField = (field: IDynamicFieldText, value: any): string | undefined => {
	const textValue = (value ?? '') as string;
	if (field.rules?.min?.active && textValue.length < field.rules.min.value)
		return !!field.rules.min.message ? field.rules.min.message : `Longitud mínima de ${field.rules.min.value}`;
	if (field.rules?.max?.active && textValue.length > field.rules.max.value)
		return !!field.rules.max.message ? field.rules.max.message : `Longitud máxima de ${field.rules.max.value}`;
	return undefined;
};

export const validateSelectField = (field: IDynamicFieldSelect, value: any): string | undefined => {
	if (!field.enabledMultiSelect) return undefined;
	const selectValue = (value ?? []) as string[];
	if (field.rules?.min?.active && selectValue.length < field.rules.min.value)
		return !!field.rules.min.message
			? field.rules.min.message
			: `Debe escoger al menos ${field.rules.min.value} opciones`;
	if (field.rules?.max?.active && selectValue.length > field.rules.max.value)
		return !!field.rules.max.message
			? field.rules.max.message
			: `Debe escoger máximo ${field.rules.max.value} opciones`;
	return undefined;
};

export const validatePhoneField = (field: IDynamicFieldPhone, value: any): string | undefined => {
	const phoneValueAll = (value ?? '') as string;
	const phoneValue = phoneValueAll.split(' ')[1];
	if (field.rules?.min?.active && phoneValue.length < field.rules.min.value)
		return !!field.rules.min.message ? field.rules.min.message : `La longitud del número no es válida`;
	if (field.rules?.max?.active && phoneValue.length > field.rules.max.value)
		return !!field.rules.max.message ? field.rules.max.message : `La longitud del número no es válida`;
	return undefined;
};
