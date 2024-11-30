import { Link, useNavigate } from "@tanstack/react-router";
import { isApiError, setApiErrors } from "@/utils";
import { useForm } from "react-hook-form";
import { Head } from "@/components/meta/Head";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewUser } from "@/types";
import { newUserSchema } from "@/schemas";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/authService";
import { useToast } from "@/hooks";
import { LoaderCircle } from "lucide-react";
import {
  Card,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Separator,
  CardDescription,
  FormMessage,
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
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button type="submit" form="signup" className="w-full" size="lg">
            {isPending && (
              <LoaderCircle
                className="h-full animate-spin text-white"
                height="80"
                size="500"
              />
            )}
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
