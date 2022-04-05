// Type of React component
// React.ReactNode provided by the react types package

type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
