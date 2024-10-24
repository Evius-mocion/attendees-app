import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
	'#ffe8f6',
	'#ffcfe6',
	'#ff9cc9',
	'#fe65ab',
	'#fd3a91',
	'#fd1f81',
	'#fe1079',
	'#e30067',
	'#cb005c',
	'#b2004f',
];

export const theme = createTheme({
	defaultRadius: 'md',
	colors: {
		myColor,
	},
	primaryColor: 'myColor',
});
