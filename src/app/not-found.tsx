"use client";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p>Could not find requested page 🥲</p>
      <Button
        variant="outline"
        className="mt-4 ml-2"
        onClick={() => (window.location.href = "/")}
      >
        Back To Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
