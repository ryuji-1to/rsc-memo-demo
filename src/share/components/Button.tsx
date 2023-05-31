import Link from "next/link";
import type { ComponentProps } from "react";

type Props =
  | ({
      buttonType: "button";
      children: React.ReactNode;
    } & ComponentProps<"button">)
  | ({ buttonType: "link"; children: React.ReactNode } & ComponentProps<
      typeof Link
    >);

export function Button(props: Props) {
  if (props.buttonType === "button") {
    const { children, className, buttonType, ...rest } = props;
    return (
      <button
        {...rest}
        className={`px-4 py-2 font-semibold drop-shadow-md ${className}`}
      >
        {children}
      </button>
    );
  } else {
    const { children, className, buttonType, ...rest } = props;
    return (
      <Link
        {...rest}
        className={`px-4 py-2 font-semibold drop-shadow-md ${className}`}
      >
        {children}
      </Link>
    );
  }
}
