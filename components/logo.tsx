import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={40} height={40} alt="logo" className="" />
    </Link>
  );
};

export default Logo;
