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
  buttonVariants,
  CardDescription,
} from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Head } from "@/components/meta/Head";

export const SignUpPage = () => {
  const form = useForm();

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
            <form className="space-y-4">
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
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button type="submit" size="lg" className="w-full">
            Sign Up
          </Button>
          <Separator />
          <Link
            to="/login"
            className={cn("w-full", buttonVariants({ variant: "outline" }))}
          >
            Already have an account? Log In
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};
