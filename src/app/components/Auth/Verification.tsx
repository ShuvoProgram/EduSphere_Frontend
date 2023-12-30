import { useAppSelector } from "../../redux/hook";
import { styles } from "../../styles/style";
import { useState, useRef, useEffect } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useActivationMutation } from "../../redux/api/auth/authApi";
import toast from "react-hot-toast";

type VerifyNumber = {
  0: string;
  1: string;
  2: string;
  3: string;
};

const Verification = ({ setRoute }: { setRoute: (route: string) => void }) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      setRoute("Login");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
      }
    }
  }, [isSuccess, error, setRoute]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");

    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }

    await activation({
      activationToken: token,
      activationCode: verificationNumber,
    });
  };

  return (
    <div>
      <h1 className={`${styles.title} dark:text-white`}>Verify Your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div className=" m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputRefs[index]}
            className={`${styles.verifictionInput} ${
              invalidError ? "shake border-red-500" : "border-[#0000004a]"
            } ${
              verifyNumber[index as keyof VerifyNumber]
                ? "border-[#497DF2]"
                : ""
            }`}
            placeholder=""
            maxLength={1}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />

      <div>
        <button className={`${styles.button}`} onClick={verificationHandler}>
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
        Go back to sign in?
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setRoute("Login")}
        >
          Sign in
        </span>
      </h5>
    </div>
  );
};

export default Verification;
