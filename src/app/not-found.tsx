import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PAGE NOT FOUND",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
