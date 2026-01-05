import { motion } from "framer-motion";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { useEffect } from "react";
import { Link } from "react-router";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    }),
})

export function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Login successful", {
      description: "You have successfully logged in.",
    })
    console.log("Form submitted:", data)
    //Login Logic goes here
  }

  useEffect(() => {
    document.title = "CrossAfrik | Login";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm min-h-100 mt-30 mb-30 mx-auto p-10 bg-white rounded-lg shadow-lg"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-center mb-8"
      >
        Welcome Back
      </motion.h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                    <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    <Input
                      className="p-6 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                      placeholder="your.email@example.com"
                      {...field}
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Password</FormLabel>
                <FormControl>
                  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                    <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    <Input
                      type="password"
                      className="p-6 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full p-6 bg-amber-600 text-lg rounded-xl"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </motion.div>
        </form>
      </Form>

      <motion.div
        className="mt-6 text-center text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
        <div className="mt-2">
          <a href="/forget-password" className="text-amber-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <Link to="/dashboard" className="text-xs text-gray-400 w-full text-center">visit the dashboard</Link>

      </motion.div>
    </motion.div>
  )
}

export default Login