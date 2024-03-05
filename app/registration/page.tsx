import { CustomButton } from "@/components/ui/CustomButton";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[50vw] h-auto mt-[2rem] p-6 bg-white border border-gray-100 rounded-md shadow-md">
        <h2 className="text-blue-700 text-2xl font-bold">Register</h2>
        <form action="" method="post">
          <div className="flex justify-between items-center">
            <div className="w-full flex flex-col mr-2">
              <label htmlFor="firstname" className="text-sm mt-4 mb-2">
                Enter Firstname
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Firstname *"
                className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
                required
              />
            </div>
            <div className="w-full flex flex-col ml-2">
              <label htmlFor="lastname" className="text-sm mt-4 mb-2">
                Enter Lastname
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Lastname *"
                className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full flex flex-col mr-2">
              <label htmlFor="email" className="text-sm mt-4 mb-2">
                Enter Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email *"
                className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
                required
              />
            </div>
            <div className="w-full flex flex-col ml-2">
              <label htmlFor="username" className="text-sm mt-4 mb-2">
                Enter Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username *"
                className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
                required
              />
            </div>
          </div>
          <div className="w-[48.5%]">
            <div className="flex flex-col my-2">
              <label htmlFor="password" className="text-sm mt-4 mb-2">
                Enter Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                className="border-2 border-gray-200 px-2 py-3 text-sm rounded-md outline-none"
                required
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <CustomButton
              text="REGISTER"
              containerStyles="w-full border-none bg-[#84cfe5] p-3 rounded-md"
              btnType="submit"
            />
          </div>
          <div className="w-full mt-2 mb-3">
            <CustomButton
              text="SIGN IN WITH GOOGLE"
              containerStyles="w-full border-none bg-blue-500 p-3 rounded-md"
              btnType="submit"
            />
          </div>
          <div className="w-full">
            <div className="flex justify-start items-center">
              <p className="text-sm">Already have an account?</p>
              <Link href={"/login"} className="text-sm pl-2 underline">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegistrationPage;
