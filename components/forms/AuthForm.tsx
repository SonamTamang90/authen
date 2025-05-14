import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "../ui/button";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO: Authenticate users
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex items-start">
          <Link href="/">
            <Image src="/logo.png" alt="Brand Logo" width={44} height={44} />
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
          <p className="mt-1 text-sm/5 text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="mt-8">
                <FormLabel className="text-sm/5 font-medium">
                  {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    className={clsx(
                      "block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
                      "py-2 text-base/6 sm:text-sm/6",
                      "focus:outline-2 focus:-outline-offset-1 focus:outline-black focus-visible:border-black focus-visible:ring-0",
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="mt-8">
          <Button size="lg" className={clsx("w-full rounded-full")}>
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
