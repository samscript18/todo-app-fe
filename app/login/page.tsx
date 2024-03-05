import { CustomButton } from "@/components/ui/CustomButton";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[35vw] h-auto mt-[3.5rem] p-6 bg-white border border-gray-100 rounded-md shadow-md">
        <h2 className="text-blue-700 text-2xl font-bold">Log In</h2>
        <form action="" method="post">
          <div className="flex flex-col my-2">
            <label htmlFor="email" className="text-sm mt-4 mb-2">
              Enter Email/Username
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email/Username *"
              className="border-2 border-gray-200 px-2 py-3.5 text-sm rounded-md outline-none"
              required
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="password" className="text-sm mt-4 mb-2">
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password *"
              className="border-2 border-gray-200 px-2 py-3.5 text-sm rounded-md outline-none"
              required
            />
          </div>
          <div className="w-full mt-6 mb-3">
            <CustomButton
              text="LOGIN"
              containerStyles="w-full border-none bg-[#84cfe5] p-3 rounded-md"
              btnType="submit"
            />
          </div>
          <div className="w-full mb-5">
            <CustomButton
              text="SIGN IN WITH GOOGLE"
              containerStyles="w-full border-none bg-blue-500 p-3 rounded-md"
              btnType="submit"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-[55%] flex justify-start items-center">
              <p className="text-sm">Don't have an account?</p>
              <Link href={"/registration"} className="text-sm pl-2 underline">
                Register
              </Link>
            </div>
            <Link href={"/forgot-password"} className="text-sm underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
