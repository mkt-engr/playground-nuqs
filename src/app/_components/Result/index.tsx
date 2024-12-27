import { JSX } from "react";

type Props = {
  query: string;
};

export const Result = ({ query }: Props): JSX.Element => {
  console.log(`Result: ${query}`);
  return <div>{query}</div>;
};
