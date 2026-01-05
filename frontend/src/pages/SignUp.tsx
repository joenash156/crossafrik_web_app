"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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

const StudentSchema = z.object({
  role: z.literal("student"),
  firstname: z.string().min(3, { message: "First name must be at least 3 characters." }),
  lastname: z.string().min(3, { message: "Last name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Please confirm your password." }),
})

const ProviderSchema = z.object({
  role: z.literal("provider"),
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
})

type StudentFormData = z.infer<typeof StudentSchema>
type ProviderFormData = z.infer<typeof ProviderSchema>

export function SignUp() {
  const [role, setRole] = useState<"student" | "provider" | null>(null)

  const schema = role === "student" ? StudentSchema : ProviderSchema

  const form = useForm<StudentFormData | ProviderFormData>({
    resolver: zodResolver(schema),
    defaultValues: (role === "student"
      ? { role: "student", firstname: "", lastname: "", email: "", password: "", confirmPassword: "" }
      : role === "provider"
        ? { role: "provider", name: "", email: "", password: "", company: "" }
        : {}) as StudentFormData | ProviderFormData,
  })

  function onSubmit(data: StudentFormData | ProviderFormData) {
    console.log("Signup data:", data)
    toast.success("Signup successful", { description: `Welcome ${data.role}!` })
  }

  useEffect(() => {
    document.title = "CrossAfrik | Sign Up";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto mt-30 mb-30 p-8 bg-white rounded-2xl shadow-lg"
    >
      {!role ? (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-6"
        >
          <h1 className="text-3xl font-bold">Sign Up As</h1>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={() => setRole("student")}
              className="bg-amber-600 w-36"
            >
              Student
            </Button>
            <Button
              onClick={() => setRole("provider")}
              className="bg-blue-600 w-36"
            >
              Provider
            </Button>
          </div>
        </motion.div>
      ) : (
        <>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center mb-6"
          >
            {role === "student" ? "Student Sign Up" : "Provider Sign Up"}
          </motion.h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" {...form.register("role")} value={role} />

              {role === "student" && (
                <>
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            <Input
                              className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                              placeholder="Enter first name"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {role === "student" && (
                <>
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            <Input
                              className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                              placeholder="Enter last name"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {role === "provider" && (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            <Input
                              className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                              placeholder="Enter your name"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Business Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <i className="fas fa-building absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            <Input
                              className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                              placeholder="Your company name"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* Common fields */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                        <Input
                          className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </div>
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
                      <div className="relative">
                        <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                        <Input
                          className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <i className="fas fa-shield-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                        <Input
                          className="p-5 pl-12 rounded-xl border-gray-300 focus:border-blue-500 transition-all"
                          type="password"
                          placeholder="Confirm password"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-amber-600 text-lg rounded-xl"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Creating account..." : "Sign Up"}
                </Button>
              </motion.div>

              <div className="text-center mt-4">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setRole(null)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ← Back
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </motion.div>
  )
}

export default SignUp
