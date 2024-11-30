import { useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
import { Head } from "@/components/meta/Head";
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
} from "@/components/ui";

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
              <TextField control={form.control} label="Email" name="email" />

              <TextField
                control={form.control}
                label="Password"
                name="password"
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
