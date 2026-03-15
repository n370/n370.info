import { FC, PropsWithChildren } from "react"

export const ExternalLink: FC<PropsWithChildren<any>> = ({ children, ...rest }) => (
  <a rel="noreferrer" target="__blank" {...rest}>
    {children}
  </a>
);
