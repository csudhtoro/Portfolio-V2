"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utilities";
import ContactFormEmail from "./email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(senderEmail);

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dana.shortsjr@gmail.com",
      subject: "Testing resend email",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, message, senderEmail),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
