import React from "react";
import ContactUsS1 from "../__molecules/ContactUsS1";
import ContactUsS2 from "../__molecules/ContactUsS2";
import ContactUsS3 from "../__molecules/ContactUsS3";

export default function ContactUs() {
  return (
    <div className="max-w-[1120px] m-auto mt-[80px]">
      <ContactUsS1/>
      <ContactUsS2/>
      <ContactUsS3/>
    </div>
  );
}
