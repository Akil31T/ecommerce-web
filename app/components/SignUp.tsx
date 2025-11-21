import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import apiCall from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constant";
import { loginValidationSchema, registerValidationSchema } from "../validationschema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { loginPayload } from "@/lib/types";

type LoginValidationSchema = z.infer<typeof loginValidationSchema>;
type RegisterValidationSchema = z.infer<typeof registerValidationSchema>;

export default function SignUp({ open, setOpen }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(loginValidationSchema),
  });

    const {
    register: registerReg,
    handleSubmit: handleSubmitReg,
    formState: { errors: regErrors },
  } = useForm<RegisterValidationSchema>({
    resolver: zodResolver(registerValidationSchema),
  });

  const userLogin = async (user: any) => {
    const payload = {
      email: user.name,
      password: user.password,
    };
    try {
      const response = await apiCall(
        API_ENDPOINTS.login,
        "POST",
        JSON.stringify(payload)
      );
      setOpen(false)
      console.log("Fetched products:", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[20%] h-[50%] text-center">
        <DialogHeader>
          <DialogTitle className="text-center">Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(userLogin)}>
          <div className="grid gap-4">
            <div className="grid">
              <Input
                id="username-1"
                placeholder="username"
                {...register("name")}
              />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </div>
            <div className="grid">
              <Input
                id="password-1"
                // type="password"
                placeholder="password"
                {...register("password")}
              />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <Button type="submit" className="cursor-pointer">
              Login
            </Button>
          </div>
        </form>
        <Link href="">SignUp</Link>
      </DialogContent>
    </Dialog>
  );
}
