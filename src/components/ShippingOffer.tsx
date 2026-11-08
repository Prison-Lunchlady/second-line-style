import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/SL_logo_white.png";
import { SHIPPING_OFFER_SESSION_KEY } from "@/lib/shipping";

export function ShippingOffer() {
  const [open, setOpen] = useState(false);
  const previousFocus = useRef<HTMLElement | null>(null);
  const gotIt = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SHIPPING_OFFER_SESSION_KEY)) return;
      sessionStorage.setItem(SHIPPING_OFFER_SESSION_KEY, "1");
    } catch {
      // The offer remains dismissible when browser storage is unavailable.
    }
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);

  function dismiss() {
    try { sessionStorage.setItem(SHIPPING_OFFER_SESSION_KEY, "1"); } catch {}
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={(next) => { if (!next) dismiss(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/90" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg max-h-[90dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-sm border border-primary/50 bg-card px-6 py-8 text-center sm:px-10 sm:py-10 focus:outline-none"
          onOpenAutoFocus={(event) => { event.preventDefault(); gotIt.current?.focus(); }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            const target = previousFocus.current;
            if (target && target !== document.body && target.isConnected) target.focus();
            else document.querySelector<HTMLElement>('a[href="#shop"]')?.focus();
          }}
        >
          <Dialog.Close asChild>
            <Button variant="ghost" size="icon" className="absolute right-2 top-2 text-muted-foreground" aria-label="Dismiss shipping offer"><X /></Button>
          </Dialog.Close>
          <img src={logo} alt="Second Line Clothing" className="mx-auto mb-6 h-20 w-auto" />
          <Dialog.Title className="text-3xl font-bold leading-tight tracking-normal text-primary sm:text-4xl">FREE SHIPPING ON ORDERS $150+</Dialog.Title>
          <Dialog.Description className="mt-4 text-base text-foreground">Load up your cart. Shipping’s on us when you spend $150 or more.</Dialog.Description>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Eligible US standard shipping. Subtotal after discounts, before tax. Discounts entered in Shopify checkout may change eligibility.</p>
          <Dialog.Close asChild><Button ref={gotIt} className="mt-6 h-11 w-full font-bold tracking-wide">GOT IT</Button></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}