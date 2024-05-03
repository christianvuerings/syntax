import { type ComponentProps, forwardRef } from "react";
import Icon from "./Icon";

const Message = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>((props, ref) => (
  <Icon
    ref={ref}
    path="M0 1.2v18h4.8V24h2.4l4.8-4.8h12v-18H0ZM14.4 12H3.6V9.6h10.8V12Zm6-4.8H3.6V4.8h16.8v2.4Z"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));
Message.displayName = "Message";
export default Message;
