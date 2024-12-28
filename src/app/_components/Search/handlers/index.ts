"use server";

export const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
