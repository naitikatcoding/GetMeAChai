import React from "react";
import Paymentpage from "@/components/Paymentpage";
import { fetchUser, fetchpayments } from "@/actions/Useraction";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { username } = await params;
  return {
    title: `Support @${username} - GetMeAChai`,
    description: `Buy a chai for @${username} and support their creative journey.`,
  };
}

const Username = async ({ params }) => {
  const { username } = await params;
  const user = await fetchUser(username);
  const payments = await fetchpayments(username);

  return (
    <Paymentpage
      username={username}
      initialUser={user}
      initialPayments={payments || []}
    />
  );
};

export default Username;