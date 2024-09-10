import { ReactNode } from 'react';

export interface ShowFeedbackParams {
	type?: TypeFeedback;
	title: string;
	message: string;
}
export interface ShowFeedbackOfModalParams {
	type: TypeFeedback;
	title: string;
	message: string | ReactNode;
	callback?: () => void;
	fullScreen?: boolean;
}

export enum TypeFeedback {
	warn = 'orange',
	error = 'red',
	success = 'green',
	info = 'blue',
}
