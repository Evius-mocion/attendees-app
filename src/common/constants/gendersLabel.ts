import { UserGenderType } from '../types/userEntity.type';

export const gendersLabel: { label: string; value: UserGenderType }[] = [
	{
		label: 'Hombre',
		value: 'male',
	},
	{
		label: 'Mujer',
		value: 'female',
	},
	{
		label: 'Otro',
		value: 'other',
	},
];
