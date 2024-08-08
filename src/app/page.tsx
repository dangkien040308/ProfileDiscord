import Image from "next/image";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
   <div className="flex items-center justify-center h-screen">
      <Profile />
   </div>
  );
}
