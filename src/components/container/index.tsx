import { ReactElement } from "react";
import { ContainerProps } from "./types";
import { NullableReactElement } from "@/typings/utils";

const Container = ({ children, title }: ContainerProps): ReactElement => {
  const renderTitle = (): NullableReactElement => {
    if (!title) return null;
    return <h1 className="font-bold text-xl pt-2 text-center">{title}</h1>;
  };

  return (
    <main className="w-full max-w-[700px] bg-white flex flex-col items-center mx-4 rounded-xl shadow-xl p-2 min-h-[400px]">
      {renderTitle()}
      {children}
    </main>
  );
};

export default Container;
