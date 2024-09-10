export type DynamicFormValidateFunction = (value: string | number | string[]) => string | undefined;

export enum TypeDynamicField {
	text = 'text',
	number = 'number',
	select = 'select',
	optionsButton = 'optionsButton',
	phone = 'phone',
}

export enum FieldSpecialType {
	country = 'country',
	stateAndDepartment = 'stateAndDepartment',
	cityByState = 'cityByState',
	cityByCountry = 'cityByCountry',
}
export const TypeDynamicFieldLabel: Record<TypeDynamicField, string> = {
	text: 'Texto',
	number: 'Número',
	select: 'Lista de opciones',
	phone: 'Teléfono',
	optionsButton: 'Opción',
	// date: 'Fecha',
};

export type OptionItem = {
	label: string;
	value: string;
};

//*---------------------------------------- Reglas -----------------------------------------------------------------
// Regla común con valor y mensaje de error
export interface Rule<T = string | number> {
	active: boolean;
	value: T;
	message?: string;
}

//*--------------------------------------- Type base-----------------------------------------------------------------

export interface IDynamicFieldBase {
	label: string;
	placeholder?: string;
	name: string;
	dependsOn?: string;
	isRequerid: boolean;
	rules?: DynamicRuleObject;
	specialField: FieldSpecialType | null;
	origin: FieldOrigin;
	dynamicVisibility?: {
		type: 'major' | 'minor' | 'equal' | 'different';
		value: string | number | null;
	};
}

export type FieldOrigin = 'predefined' | 'custom';
export type DynamicRuleObject = {
	min?: Rule<number>;
	max?: Rule<number>;
};

//*--------------------------------------- Tipos hijos-----------------------------------------------------------------
export interface IDynamicFieldText extends IDynamicFieldBase {
	type: TypeDynamicField.text;
}

export interface IDynamicFieldNumber extends IDynamicFieldBase {
	type: TypeDynamicField.number;
}

export interface IDynamicFieldSelect extends IDynamicFieldBase {
	type: TypeDynamicField.select;

	dynamicOptions?: {
		[key: string]: OptionItem[];
	};
	options?: OptionItem[];
	enabledMultiSelect?: boolean;
	enableSearchSelect?: boolean;
}

export interface IDynamicFieldOptionsButton extends IDynamicFieldBase {
	type: TypeDynamicField.optionsButton;
}

export interface IDynamicFieldPhone extends IDynamicFieldBase {
	type: TypeDynamicField.phone;
	whitAreaCode?: boolean;
}

//*--------------------------------------- Union de los tipos ------------------------------------------------------------------

export type DynamicField =
	| IDynamicFieldText
	| IDynamicFieldNumber
	| IDynamicFieldSelect
	| IDynamicFieldOptionsButton
	| IDynamicFieldPhone;

export enum StatesSpecialsAux {
	notSelected = 'not-selected',
	notExist = 'notExist',
	defaultPhoneAreaSelected = '+57',
}
