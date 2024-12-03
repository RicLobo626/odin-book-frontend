import { useForm } from "react-hook-form";
import { Head } from "@/components/meta/Head";
import { UserLogin } from "@/types";
import { userLoginSchema } from "@/schemas";
import { useToast, useAuth } from "@/hooks";
import { Link, useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { isApiError, setApiErrors } from "@/utils";
import { loginUser } from "@/services";
import { useMutation } from "@tanstack/react-query";
import {
  Card,
  Button,
  Form,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Separator,
  TextField,
  LoadingSpinner,
} from "@/components/ui";

export const LoginPage = () => {
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess(data) {
      login(data);

      toast({
        title: "Login successful!",
        description: "You are now logged in.",
      });

      return navigate({
        to: "/",
        replace: true,
      });
    },

    onError(error) {
      if (isApiError(error)) {
        setApiErrors(error, form.setError);
      } else {
        toast({
          title: "Could not login",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    },
  });

  const handleSubmit = form.handleSubmit((values) => mutate(values));

  return (
    <>
      <Head
        title="Log into Odin-Book"
        description="Log in to your Odin-Book account to connect with others. Don't have an account? Sign up now!"
      />

      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle>
            <h2>Log In</h2>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-4" id="login">
              <TextField control={form.control} label="Email" name="email" />

              <TextField
                control={form.control}
                label="Password"
                name="password"
                type="password"
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button form="login" type="submit" size="lg" className="w-full">
            <LoadingSpinner isLoading={isPending} />
            Log In
          </Button>

          <Separator />

          <Button className="w-full" variant="outline" asChild>
            <Link to="/signup">Create a new account</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
