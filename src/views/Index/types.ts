export type FormProps = {
  handleForm: React.FormEventHandler,
  handleInput: Function,
  isEnabled: boolean,
  search: string,
};

export type LocationItem = {
  latt_long: string,
  location_type: string,
  title: string,
  woeid: number,
};
