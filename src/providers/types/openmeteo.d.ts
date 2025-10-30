export interface Response {
	latitude: number;
	longitude: number;
	elevation: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	current_units: CurrentUnits;
	current: Current;
}

export interface Current {
	time: string;
	interval: number;
	temperature_2m: number;
	is_day: number;
	precipitation: number;
	weather_code: number;
}

export interface CurrentUnits {
	time: string;
	interval: string;
	temperature_2m: string;
	is_day: string;
	precipitation: string;
	weather_code: string;
}

declare global {
	type OpenMeteoForecast = Response;
}
