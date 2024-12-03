import { useAuthUser } from "@/hooks";

export const HomePage = () => {
  const user = useAuthUser();

  return <h1>Welcome {user.fullName}</h1>;
};
