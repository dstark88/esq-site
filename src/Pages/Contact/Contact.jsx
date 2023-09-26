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
    <Card className="flex items-center mb-5" color="transparent" shadow={false}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="">
          <Typography variant="h4" color="blue-gray">
            Contact Us
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Questions not answered yet? We are here to help!
          </Typography>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-8 mb-2 w-full"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" type="text" name="user_name" />
              <Input size="lg" label="Email" type="email" name="user_email" />
              <Input size="lg" label="Phone" type="text" name="user_phone" />
              <div className="">
                <Textarea label="Message" type="text" name="message" />
              </div>
            </div>
            <Button className="mt-6" fullWidth type="submit" value="Send">
              Send
            </Button>
          </form>
        </div>
        <div className="w-full">
          <Typography variant="h4" color="blue-gray">
            Denny & Boulton, P.C.
          </Typography>
          <Typography color="gray" className="mt-1 mb-8 font-normal">
            <p>
              4020 N. 20th St
            </p>
            <p>
              Suite 217
            </p>
            <p>
              Phoenix, AZ 85016
            </p>
            <p>
              Email: info@aztaxlawyers.com
            </p>
          </Typography>
          <iframe className="w-full lg:w-[450px] xl:w-[550px] 2xl:w-[650px] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.299133429005!2d-112.04174098738653!3d33.49359364690837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d7890facf99%3A0x36599dd4c229c184!2sDenny%20%26%20Boulton%2C%20P.C.!5e0!3m2!1sen!2sus!4v1695698095285!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </Card>
  );
}
