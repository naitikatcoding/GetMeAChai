import React from "react";
import Paymentpage from "@/components/Paymentpage";

const Username = async ({ params }) => {
  const { username } = await params;

  return <Paymentpage username={username} />;
};

export default Username;