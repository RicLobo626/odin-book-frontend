import { Link, useNavigate } from "@tanstack/react-router";
import { isApiError, setApiErrors } from "@/utils";
import { useForm } from "react-hook-form";
import { Head } from "@/components/meta/Head";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewUser } from "@/types";
import { newUserSchema } from "@/schemas";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services";
import { useToast } from "@/hooks";
import {
  Card,
  Button,
  Form,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Separator,
  CardDescription,
  TextField,
  LoadingSpinner,
} from "@/components/ui";

export const SignUpPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<NewUser>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleSuccess = () => {
    toast({
      title: "Account created!",
      description: "You can now log in to your account.",
    });

    return navigate({ to: "/login" });
  };

  const handleError = (error: Error) => {
    if (isApiError(error)) {
      setApiErrors(error, form.setError);
    } else {
      toast({
        title: "Could not create account",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const handleSubmit = form.handleSubmit((values) => mutate(values));

  return (
    <>
      <Head
        title="Sign Up for Odin-Book"
        description="Create an account on Odin-Book to connect with people, share ideas, and explore content. Already have an account? Log in now!"
      />

      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle>
            <h2>Create a new account</h2>
          </CardTitle>
          <CardDescription>It&apos;s quick and easy.</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit} id="signup" className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row">
                <TextField
                  control={form.control}
                  label="First name"
                  name="firstName"
                  className="flex-1"
                />

                <TextField
                  control={form.control}
                  label="Last name"
                  name="lastName"
                  className="flex-1"
                />
              </div>

              <TextField control={form.control} label="Email" name="email" />

              <TextField
                control={form.control}
                type="password"
                label="Password"
                name="password"
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button type="submit" form="signup" className="w-full" size="lg">
            <LoadingSpinner isLoading={isPending} />
            Sign Up
          </Button>

          <Separator />

          <Button asChild className="w-full" variant="outline">
            <Link to="/login">Already have an account? Log In</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
