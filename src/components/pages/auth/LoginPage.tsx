import { useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
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
} from "@/components/ui";
import { Head } from "@/components/meta/Head";

export const LoginPage = () => {
  const form = useForm();

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
            <form className="space-y-4">
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
