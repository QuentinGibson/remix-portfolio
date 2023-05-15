import { DataFunctionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { HiAtSymbol } from 'react-icons/hi'

export default function ContactRoute() {
  return (
    <main>
      <h1 className="text-5xl text-dark bg-cream py-8 px-4">Contact</h1>
      <div className="flex flex-col bg-cream font-serif py-8">
        <div className="flex flex-col px-4">
          <Link to="mailto:quentingibson94@gmail.com">
            <HiAtSymbol className="text-4xl text-[#ff8059]" />
            <p className="font-bold text-lg">quentingibson94@gmail.com</p>
          </Link>
        </div>
      </div>
      <section className="bg-cream">
        <Form method="POST" className="font-serif">
          <div className="flex flex-col px-4 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold">Name</label>
              <input type="text" name="name" id="name" placeholder="Enter your name here" className="py-3 px-8 text-lightDark font-thin bg-cream border border-lightDark rounded mt-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">Email Address</label>
              <input type="email" name="email" id="email" placeholder="Enter your email address" className="py-3 px-8 text-lightDark font-thin bg-cream border border-lightDark rounded mt-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-bold">Message</label>
              <textarea name="message" id="message" placeholder="Enter your message here" className="py-3 px-8 text-lightDark font-thin bg-cream border border-lightDark rounded mt-2 resize-y h-48" />
            </div>
            <div className="flex">
              <button type="submit" className="px-6 py-2 border border-[#ff8059] rounded mb-8 hover:bg-[#ff8059]">Submit</button>
            </div>
          </div>
        </Form>
      </section>
    </main>
  );
};

export const action = async ({ request, params }: DataFunctionArgs) => {
  const formData = await request.formData();
  const { message, name, email } = Object.fromEntries(formData.entries());
};