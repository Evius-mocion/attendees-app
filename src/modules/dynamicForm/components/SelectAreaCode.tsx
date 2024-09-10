import { Combobox, Group, Image, InputBase, ScrollArea, Text, TextInput, useCombobox } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useRef } from 'react';
import { IDynamicFieldPhone } from '../types/dynamicForm';
import { useGetAreaCodes } from '../hooks/useGetAreaCodes';

type Props = {
	setCountrySelected: (value: string) => void;
	countrySelected: string;
	dynamicForm: UseFormReturnType<Record<string, any>, (values: Record<string, any>) => Record<string, any>>;
	dynamicField: IDynamicFieldPhone;
};
export const SelectAreaCode = (props: Props) => {
	const { setCountrySelected, countrySelected, dynamicForm, dynamicField } = props;
	const { phoneAreas, isLoading, searchValue, setSearchValue, filteredCountry } = useGetAreaCodes();
	const inputRef = useRef<HTMLInputElement>(null);

	const combobox = useCombobox({
		onDropdownClose: () => {
			combobox.resetSelectedOption();
			setSearchValue('');
		},
		onDropdownOpen: () => {
			setTimeout(() => inputRef.current?.focus(), 0);
		},
	});

	const handleOptionSubmit = (val: string) => {
		setCountrySelected(val);
		const currentValue = (dynamicForm.values[dynamicField.name] as string)?.split(' ')[1] || '';
		dynamicForm.setFieldValue(dynamicField.name, `${val} ${currentValue}`);
		combobox.closeDropdown();
	};

	const options = (searchValue ? filteredCountry : phoneAreas).map((country) => (
		<Combobox.Option value={country.phonecode} key={country.id}>
			<Group wrap='nowrap'>
				<Image src={country.flagSvg || country.flagPng} maw={20} />
				<Text>{`${country.name} (${country.phonecode})`}</Text>
			</Group>
		</Combobox.Option>
	));
	return (
		<Combobox disabled={isLoading} store={combobox} onOptionSubmit={handleOptionSubmit} styles={{ dropdown: { minWidth: 320 } }}>
			<Combobox.Target>
				<InputBase
					rightSectionPointerEvents='none'
					maw={'30%'}
					label='Area'
					component='button'
					pointer
					onClick={() => {
						combobox.toggleDropdown();
					}}
					rightSection={<Combobox.Chevron />}
				>
					{countrySelected}
				</InputBase>
			</Combobox.Target>

			<Combobox.Dropdown>
				<TextInput ref={inputRef} placeholder='Buscar' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
				<Combobox.Options mah={200} /*  style={{ overflowY: 'auto' }} */>
					<ScrollArea h={200}>{options}</ScrollArea>
				</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	);
};
