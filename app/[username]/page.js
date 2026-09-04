import React, { Suspense } from "react";
import Paymentpage from "@/components/Paymentpage";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
      <Paymentpage username={username} />
    </Suspense>
  );
};

export default Username;