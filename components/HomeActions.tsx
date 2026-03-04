"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { BookingModal } from "@/components/BookingModal";

export function HomeActions() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => setOpenBooking(true)}>Book a session</Button>
        <Button href="/gallery" variant="ghost">
          View portraits
        </Button>
      </div>
      <BookingModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </section>
  );
}
