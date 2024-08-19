"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base font-medium leading-relaxed font-in"
    >
      Hi! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      and I want to discuss my potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      anytime. Here are some details about my project: <br />
      <textarea
        {...register("project details", {})}
        placeholder="Tell us about your project..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="Send Message"
        className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-light dark:bg-dark text-dark dark:text-light rounded-full capitalize font-semibold border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base mt-8 cursor-pointer"
      />
    </form>
  );
}
