import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Card className="flex items-center" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Contact Us
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Questions not answered yet? We are here to help!
      </Typography>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" type="text" name="user_name" />
          <Input size="lg" label="Email" type="email" name="user_email" />
          <Input size="lg" label="Phone" type="text" name="user_phone" />
          <div className="w-96">
            <Textarea label="Message" type="text" name="message" />
          </div>
        </div>
        <Button className="mt-6" fullWidth type="submit" value="Send">
          Send
        </Button>
      </form>
    </Card>
  );
}
