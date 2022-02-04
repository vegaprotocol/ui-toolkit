import React from "react";

export const Callout = ({
  children,
  title,
  intent,
  icon,
}: {
  children?: React.ReactNode;
  title?: React.ReactElement | string;
  intent?: "success" | "error" | "warn" | "action";
  icon?: React.ReactNode;
}) => {
  let intentClass = "shadow-callout-default";

  if (intent === "success") {
    intentClass = "shadow-callout-success";
  } else if (intent === "action") {
    intentClass = "shadow-callout-action";
  } else if (intent === "error") {
    intentClass = "shadow-callout-error";
  } else if (intent === "warn") {
    intentClass = "shadow-callout-warn";
  }

  const className = [
    "flex callout p-4 my-2 border-2 border-solid border-white",
    intentClass,
  ].join(" ");

  return (
    <div data-testid="callout" className={className}>
      {icon && <div className="mr-3 text-white">{icon}</div>}
      <div className="grow">
        {title && <h3 className="mt-0 mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  );
};
