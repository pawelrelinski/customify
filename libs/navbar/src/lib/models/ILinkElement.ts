import { IColors } from './IColors';

export interface ILinkElement {
  readonly routerLink: string;
  readonly name: string;
  readonly classes: string;
  readonly colors: IColors;
}
