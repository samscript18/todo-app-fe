import { CustomButton } from "@/components/ui/CustomButton";

const ForgotPasswordPage = () => {
  return (
    <div className="flex justify-center items-center sm:px-6">
      <div className="sm:w-full md:w-[35vw] h-auto sm:mt-[50%] md:mt-[3.5rem] p-6 bg-white border border-gray-100 rounded-md shadow-md">
        <h2 className="text-blue-700 text-2xl font-bold">Reset Password</h2>
        <form action="" method="post">
          <div className="flex flex-col my-2">
            <label htmlFor="email" className="text-sm mt-3 mb-2">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              className="border-2 border-gray-200 px-2 py-3.5 text-sm rounded-md outline-none"
              required
            />
          </div>
          <div className="w-full mt-6">
            <CustomButton
              text="SUBMIT"
              containerStyles="w-full border-none bg-[#84cfe5] p-3 rounded-md"
              btnType="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
