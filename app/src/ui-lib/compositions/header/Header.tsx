import React from "react";
import { Flex } from "../../primitives/layout/Flex";

//
// ROOT
//

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

export function Header({
  sticky = false,
  className,
  style,
  ...props
}: HeaderProps) {
  return (
    <header
      {...props}
      className={className}
      style={{
        position: sticky ? "sticky" : undefined,
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 50 : undefined,
        width: "100%",
        
        ...style,
      }}
    />
  );
}

//
// LAYOUT
//

export function HeaderLayout({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex
      {...props}
      align="center"
      justify="space-between"
      wrap="nowrap"
      fullWidth
      minWidth={0}
      className={className}
      style={{
        gap: "var(--space-4)",
        width: "100%",
        ...style,
      }}
    />
  );
}

//
// INTENT COMPONENTS
//

//
// Brand (logo + identity)
//

export function HeaderBrand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        textDecoration: "none",
      }}
    />
  );
}

//
// Text group (title + subtitle)
//

export function HeaderTextGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        lineHeight: 1,
      }}
    />
  );
}

//
// Navigation wrapper
//

export function HeaderNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      {...props}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    />
  );
}

//
// Nav link (intent: navigation)
//

export function HeaderLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        whiteSpace: "nowrap",
        cursor: "pointer",

      }}
    />
  );
}

//
// Icon button (intent: action icon)
//

export function HeaderIconButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    />
  );
}
export function HeaderIconLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        cursor: "pointer",
      }}
    />
  );
}

//
// Action button (intent: CTA link)
//

export function HeaderAction({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={className} 
    style={{
      textDecoration: "none",
    }}/>;
}