"use client";
import Form from "@/components/form";
import FormProvider from "@/components/form_provider";
import TextInput from "@/components/text_input";
import Container from "@/components/container";
import { ReactElement } from "react";
import { FORM_SCHEMA } from "@/constants/sign_up";
import Link from "next/link";
import { getNextRoute } from "@/helpers/routes";

const SignUp = (): ReactElement => {
  const renderLogIn = () => {
    return (
      <p className="text-gray-500">
        Already have an account?{" "}
        <Link
          href={getNextRoute("login")}
          className="text-blue-500 hover:underline"
        >
          Log In
        </Link>
      </p>
    );
  };

  const renderSignUpPage = (): ReactElement => {
    return (
      <Container>
        <FormProvider
          defaultValues={{
            email: "",
            password: "",
          }}
          yupSchema={FORM_SCHEMA}
        >
          <Form
            title="Sign Up"
            onSubmit={(data) => console.log(data)}
            submitText="Sign Up"
          >
            <TextInput
              name="email"
              placeholder="Type Your Email"
              type="email"
            />
            <TextInput
              name="password"
              placeholder="Type Your Password"
              type="password"
            />
          </Form>
        </FormProvider>
        {renderLogIn()}
      </Container>
    );
  };

  return (
    <div className="flex items-center justify-center w-full">
      {renderSignUpPage()}
    </div>
  );
};

export default SignUp;
