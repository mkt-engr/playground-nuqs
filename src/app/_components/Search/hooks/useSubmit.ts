import { FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";

export const useHandleSubmit = () => {
  const router = useRouter();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.refresh();
    },
    [router]
  );

  return handleSubmit;
};
