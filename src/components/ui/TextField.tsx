import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface TextFieldProps<TFieldValues extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
}

export const TextField = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  className,
  ...props
}: TextFieldProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem {...props} className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder || label} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
