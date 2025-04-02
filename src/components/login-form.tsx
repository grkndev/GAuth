"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const [isLoading, setIsLoading] = useState(false);
  const [logined, setLogined] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setLogined(true);
      setIsLoading(false);
    }, 2000);

    setLogined(false);
    setIsLoading(false);
  }


  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>

          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" disabled={isLoading || logined} className="w-full">
          {
            logined ? <CheckCircle className="size-4 animate-spin" /> : isLoading ? <Loader2 className="size-4 animate-spin" /> : "Login"
          }
        </Button>


      </div>

    </form>
  )
}
