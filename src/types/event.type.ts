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
