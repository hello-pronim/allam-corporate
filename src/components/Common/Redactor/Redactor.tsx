import * as React from "react";
import cx from "classnames";

type IRedactorProps = {
  className?: string;
  children: string; // normally a `children` prop would be of type `ReactNode`, but we need to explicitly require a string for `dangerouslySetInnerHTML`
};

const Redactor = ({ className = "", children, ...rest }: IRedactorProps) => {
  if (!children) return null;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: children }}
      className={cx("redactor", className)}
      {...rest}
    />
  );
};

export default Redactor;
