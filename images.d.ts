declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module '@fortawesome/react-fontawesome';
declare module '@fortawesome/fontawesome-free-solid/faCoffee';

declare module 'redux/src/utils/isPlainObject' {
  export default function isPlainObject(o: any): boolean;
}
