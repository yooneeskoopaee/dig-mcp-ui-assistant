import { Button } from "@/components/ui/button";
import React from "react";

const CardCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5087 20.25H5.25C3.45507 20.25 2 18.7949 2 17V7C2 5.20507 3.45507 3.75 5.25 3.75H18.75C20.5449 3.75 22 5.20507 22 7V11.3394" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 17.9995C22 18.7495 21.79 19.4595 21.42 20.0595C20.73 21.2195 19.46 21.9995 18 21.9995C16.54 21.9995 15.27 21.2195 14.58 20.0595C14.21 19.4595 14 18.7495 14 17.9995C14 15.7895 15.79 13.9995 18 13.9995C20.21 13.9995 22 15.7895 22 17.9995Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.4404 17.9946L17.4304 18.9846L19.5604 17.0146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.73828 15.2202H9.73828" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 9.22021H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PaymentButton() {
  return (
    <Button variant="primary" size="lg">
      <CardCheckIcon />
      پرداخت
    </Button>
  );
}