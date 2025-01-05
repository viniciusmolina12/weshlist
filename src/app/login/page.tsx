"use client"
import Image from "next/image";
import Input from "../components/input";

const Login = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-6/12 h-screen flex flex-col justify-center items-center bg-default">
        <Image
          priority
          width={264}
          height={100}
          src={"/icons/logo.svg"}
          alt="Weeshlist logo"
        />
        <h1 className="text-2xl mb-4 mt-10 font-semibold">Sign Up</h1>
        <div className="flex gap-16 mb-4">
            <Image alt="Google sign up icon" width={40} height={40} src={'/icons/google.png'}/>
            <Image alt="Google sign up icon" width={40} height={40} src={'/icons/google.png'}/>
        </div>

        <div className="flex items-center justify-center w-full mb-5">
            <hr className="border-t-1 border-gray-500 w-32 mr-12"></hr>
            <p>Or sign up with an email</p>
            <hr className="border-t-1 border-gray-500 w-32 ml-12"></hr>
        </div>
        <form className="flex flex-col xl:w-96">
          <Input placeholder="Name" type="text" onChange={() => {}} value="" />
          <Input placeholder="Email" type="text" onChange={() => {}} value=""/>
          <Input placeholder="Password" type="text" onChange={() => {}} value=""/>
          <button className="w-full h-16 rounded-md bg-primary text-lg font-semibold" type="submit">Sign Up</button>
          <p className="m-2 text-center">Already have an account? <a className="font-semibold" href="">Log in</a></p>
        </form>
      </div>

      <div className="hidden md:flex w-6/12 h-screen justify-center items-center lg:block">
        <h1>Any text</h1>
        </div>
    </div>
  );
};

export default Login;
