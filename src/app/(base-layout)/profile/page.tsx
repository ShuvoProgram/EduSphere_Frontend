"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "../../redux/hook";
import Profile from "../../components/profile/Profile";
import ProtectedRoutes from "../../components/protectedRoutes/ProtectedRoutes";
import Meta from "../../utils/Meta";

const ProfilePage = () => {
  const { user }: any = useAppSelector((state) => state.auth);

  return (
    <ProtectedRoutes>
      <div>
        <Meta title={`${user?.name} - EduSphere`} />
        <Profile user={user} />
      </div>
    </ProtectedRoutes>
  );
};

export default ProfilePage;
