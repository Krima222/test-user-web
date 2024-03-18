declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: HTMLImageElement;
  export = value;
}

declare module '*.jpg' {
  const value: HTMLImageElement;
  export = value;
}

declare module '*.svg' {
  const value: HTMLImageElement;
  export = value;
}
