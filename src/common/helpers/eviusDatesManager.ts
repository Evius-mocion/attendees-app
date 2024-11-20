import dayjs, { Dayjs } from 'dayjs';
import { DateFormats } from '../types/formatDates';

export const getNow = () => {
	return dayjs();
};
export const getStringInLocalTimeZone = (dateParam: string | Date | Dayjs) => {
	return dayjs(dateParam).format();
};
export const getStringInTimeZone = (dateParam: string | Date | Dayjs) => {
	return dayjs(dateParam).tz('Asia/Shanghai').format();
};

export const getUtcString = (dateParam: string | Date | Dayjs) => {
	const utcDate = dayjs.utc(dateParam).format();
	return utcDate;
};

export const getLocalString = (dateParam: string | Date | Dayjs) => {
	const utcDate = dayjs(dateParam).format();
	return utcDate;
};

export const getDayJs = (dateParam?: string | Date | Dayjs) => {
	return dayjs(dateParam);
};

export const getMonthName = (dateParam: string | Date | Dayjs) => {
	const newDate = dayjs(dateParam);
	const nameMonth = newDate.format('MMM');
	return nameMonth;
};
export const getMonthNumber = (dateParam: string | Date | Dayjs) => {
	const newDate = dayjs(dateParam);
	return newDate.month() + 1;
};

export const getDay = (dateParam: string | Date | Dayjs) => {
	const newDate = dayjs(dateParam);
	return newDate.date();
};

export const formatDate = (dateParam: string | Date | Dayjs, format: DateFormats | undefined) => {
	const newDate = dayjs(dateParam);
	return newDate.format(format);
};

export const isSameDay = (dateParam1: string | Date | Dayjs, dateParam2: string | Date | Dayjs) => {
	const dayjsDate1 = dayjs(dateParam1);
	const dayjsDate2 = dayjs(dateParam2);

	const isSameDay = dayjsDate1.isSame(dayjsDate2, 'day');
	return isSameDay;
};

export const isToday = (dateParam: string | Date | Dayjs) => {
	const date = dayjs(dateParam);
	const today = dayjs();
	return date.isSame(today, 'day');
};

export const myDate = {
	getNow,
	getStringInLocalTimeZone,
	getStringInTimeZone,
	getUtcString,
	getLocalString,
	getDayJs,
	getMonthName,
	getMonthNumber,
	getDay,
	formatDate,
	isSameDay,
	isToday,
};
