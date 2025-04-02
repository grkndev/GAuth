"use client";

import { useState } from "react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Check, Loader2 } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoggedIn(true);      
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }


return (
  <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-bold">Login to your account</h1>
      <p className="text-muted-foreground text-sm text-balance">
        Enter your username and password to login
      </p>
    </div>
    <div className="grid gap-6">
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className={`w-full ${isLoggedIn ? "bg-green-500 disabled:opacity-100" : ""}`} disabled={isLoading || isLoggedIn}>
        {
          isLoggedIn ? (
            <Check className="w-4 h-4 mr-2" />
          ) : isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : "Login"
        }

      </Button>
    </div>
  </form>
)
} 