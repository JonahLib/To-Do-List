"use client";
import Form from "@/components/form";
import FormProvider from "@/components/form_provider";
import TextInput from "@/components/text_input";
import Container from "@/components/container";
import { ReactElement } from "react";
import { FORM_SCHEMA } from "@/constants/sign_up";
import Link from "next/link";
import { getNextRoute } from "@/helpers/routes";

const Login = (): ReactElement => {
  const renderLoginPage = (): ReactElement => {
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
            title="Log In"
            onSubmit={(data) => console.log(data)}
            submitText="Log In"
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
        {renderSignUp()}
      </Container>
    );
  };

  const renderSignUp = () => {
    return (
      <p className="text-gray-500">
        Don't have an account?{" "}
        <Link
          href={getNextRoute("signup")}
          className="text-blue-500 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    );
  };

  return (
    <div className="flex items-center justify-center w-full">
      {renderLoginPage()}
    </div>
  );
};

export default Login;
