import { weather$ } from "~/providers/weather";

export function ClockWeather() {
	// component logic
	const getDatetime = (): keyof WeatherSummary => {
		return weather$.get.forecast?.current.is_day === 1 ? "day" : "night";
	};

	const getDescription = (summary: WeatherSummary) => {
		return summary[getDatetime()].description;
	};

	const getImageSource = (summary: WeatherSummary) => {
		return summary[getDatetime()].image;
	};

	const getTemperature = ({ current, current_units }: OpenMeteoForecast): string => {
		return `${current.temperature_2m}${current_units.temperature_2m}`;
	};

	// component layout
	return (
		<div class="grid place-items-center">
			<div class="flex h-28 w-28">
				{weather$.get.summary && (
					<img
						alt={getDescription(weather$.get.summary)}
						src={getImageSource(weather$.get.summary)}
						class="grow object-contain"
					/>
				)}
			</div>
			<div class="-mt-4 w-32">
				<p class="text-center">
					{weather$.get.summary && (
						<WeatherSummary description={getDescription(weather$.get.summary)} />
					)}
				</p>
				<p class="text-center">
					{weather$.get.forecast && (
						<WeatherForecast temperature={getTemperature(weather$.get.forecast)} />
					)}
				</p>
			</div>
		</div>
	);
}

function WeatherSummary(props: { description: string }) {
	// component logic

	// component layout
	return <span>{props.description}</span>;
}

function WeatherForecast(props: { temperature: string }) {
	// component logic

	// component layout
	return <span>{props.temperature}</span>;
}
