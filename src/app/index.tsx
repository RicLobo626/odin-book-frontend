import { AppRouter } from "@/app/router";
import { Providers } from "@/app/providers";

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
