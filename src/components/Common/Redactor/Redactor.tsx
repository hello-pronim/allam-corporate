import * as React from "react";

type IRedactorProps = {
  className?: string;
  children: string; // normally a `children` prop would be of type `ReactNode`, but we need to explicitly require a string for `dangerouslySetInnerHTML`
};

const Redactor = ({ className = "", children, ...rest }: IRedactorProps) => {
  if (!children) return null;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
      {...rest}
    />
  );
};

export default Redactor;
