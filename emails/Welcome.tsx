import {  Html } from "@react-email/components";
import * as React from "react";

export default function Welcome() {
  return (
    <Html>
      <p
  
  style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
>
  Your OTP is: {Math.floor(100000 + Math.random() * 900000)}
</p>
    </Html>
  );
}
