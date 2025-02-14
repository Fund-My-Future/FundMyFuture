"use client";

import { Button } from "@/components/ui/button";

export default function StepNavigation({ next, prev }: { next?: () => void; prev?: () => void }) {
  return (
    <div className="flex justify-between mt-6">
      {prev && (
        <Button variant="outline" onClick={prev}>
          Back
        </Button>
      )}
      {next && (
        <Button onClick={next} className="bg-purple-600 text-white text-lg py-2 px-4">
          Proceed →
        </Button>
      )}
    </div>
  );
}
