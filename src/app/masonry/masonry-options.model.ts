export interface MasonryOptions {
  columnWidth?: number | string;
  itemSelector?: string;
  percentPosition?: boolean;
  gutter?: number;
  fitWidth?: boolean;
  horizontalOrder?: boolean;
  stamp?: boolean;
  originLeft?: boolean;
  originTop?: boolean;
  containerStyle?: { [key: string]: any };
  transitionDuration?: boolean;
  stagger?: number;
  resize?: boolean;
  initLayout?: boolean;
}
