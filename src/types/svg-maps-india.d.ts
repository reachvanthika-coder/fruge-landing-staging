declare module "@svg-maps/india" {
  type IndiaMapLocation = {
    id: string;
    name: string;
    path: string;
  };

  type IndiaMap = {
    label: string;
    viewBox: string;
    locations: IndiaMapLocation[];
  };

  const map: IndiaMap;
  export default map;
}
