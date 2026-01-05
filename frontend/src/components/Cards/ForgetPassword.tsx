"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"  

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

const ForgetSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
})

const ForgetPassword = () => {
  const navigate = useNavigate()  
  const form = useForm<z.infer<typeof ForgetSchema>>({
    resolver: zodResolver(ForgetSchema),
    defaultValues: { email: "" },
  })

  function onSubmit(data: z.infer<typeof ForgetSchema>) {
    console.log("Reset link sent to:", data.email)
    // API call → send OTP
    navigate("/otp")  
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto p-8 mt-30 mb-30 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-xl font-bold text-center mb-6">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-amber-600">
            Send OTP
          </Button>
        </form>
      </Form>
    </motion.div>
  )
}

export default ForgetPassword
