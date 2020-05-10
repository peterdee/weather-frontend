import React from 'react';

export interface ErrorProps {
  message: string;
};

export interface FormProps {
  handleForm: React.FormEventHandler;
  handleInput: Function;
  isEnabled: boolean;
  search: string;
};

export interface LocationItem {
  latt_long: string;
  location_interface: string;
  title: string;
  woeid: number;
};

export interface LocationProps {
  handleClick: Function;
  id: number;
  name: string;
};

export interface Source {
  crawl_rate: number;
  slug: string;
  title: string;
  url: string;
};

export interface SourceProps {
  link: string;
  name: string;
};


export interface Weather {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
};

export interface WeatherDetails {
  cityId?: number;
  cityName?: string;
  created?: number;
  latitude?: string;
  longitude?: string;
  parent?: LocationItem;
  sources?: Source[];
  sunRise?: string;
  sunSet?: string;
  svgLink?: string;
  timezone?: string;
  updated?: number;
  weather?: Weather[];
};

export interface DetailsProps {
  name: string;
  latitude: string;
  longitude: string;
  parent: string;
  sources?: any[];
  sunRise: string;
  sunSet: string;
  weather?: any[];
};

export interface DetailsState {
  data: WeatherDetails;
  isLoaded: boolean;
};
