import { DynamicField } from "../../modules/dynamicForm/types/dynamicForm";

export type MocionExperience = {
	id: string;
	name: string;
	avatarUrl: string;
	category: string;
	description?: string;
};

export type Station = {
	id: string;
	name: string;
	description: string;
	representative: string;
	location: string;
	eventId: string;
	experienceId?: string;
	experience?: MocionExperience;
	country: string;
	department: string;
	city: string;
};

export interface IEvent {
	id: string;
	name: string;
	description: string;
	dates: EventDate[];
	appearance: IEventAppearance;
	capacity: number;
	eventSection?: Partial<IEventSections>;
	registrationFields?: DynamicField[];
	createAt?: string;
	organizationAlias?: string;
	googleAnalyticsId?: string;
	googleTagManager?: string;
	faceBookPixelId?: string;
	hiddenEventDates?: boolean;
	landingDescription?: string;
	landingSections: LandingSection[];
	/* socialMedias?: {
		facebookUrl?: string;
		linkedInUrl?: string;
		xUrl?: string;
		instagramUrl?: string;
	}; */
}

export interface EventDate {
	startDate: string;
	endDate: string;
}

export interface IEventAppearance {
	textColor: string;
	primaryColor: string;
	bgColor: string;
	bannerImage?: string;
}

export interface IEventSections {
	news: boolean;
	sponsors: boolean;
}

export type EventStatusOfTime = 'on-hold' | 'in-progress' | 'finished';

export type LandingSection = {
	title: LandingSectionTitles;
	alias?: string;
	visible: boolean;
};

export enum LandingSectionTitles {
	Counter = 'Contador',
	Description = 'Descripción',
	Speakers = 'Conferencistas',
	Activities = 'Actividades',
	Sponsors = 'Patrocinadores',
}


