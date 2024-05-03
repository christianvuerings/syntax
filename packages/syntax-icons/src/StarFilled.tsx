import { type ComponentProps, forwardRef } from "react";
import Icon from "./Icon";

const StarFilled = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>((props, ref) => (
  <Icon
    ref={ref}
    path="m24 10.8-.6-4.2h-7.2L13.8 0h-3.6L7.8 6.6H.6L0 10.8l5.4 3.6-3 7.8L6 24l6-4.8 6 4.8 3.6-1.8-3-7.8 5.4-3.6Z"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));
StarFilled.displayName = "StarFilled";
export default StarFilled;
