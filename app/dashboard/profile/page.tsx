"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerifiedIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";
import { useSession } from "next-auth/react";

const Profile = () => {
  const handleEnableTwoStepVerification = () => {
    console.log("Two Step Verification");
  };
   const session = useSession();
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email: </p>
                  <p className="text-gray-500">{session.data?.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name: </p>
                  <p className="text-gray-500">{session.data?.user?.name}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth: </p>
                  <p className="text-gray-500">01/11/2001</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality: </p>
                  <p className="text-gray-500">Bangladeshi</p>
                </div>
              </div>

              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address: </p>
                  <p className="text-gray-500">Uttara,Dhaka</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City: </p>
                  <p className="text-gray-500">Dhaka</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Postcode: </p>
                  <p className="text-gray-500">1230</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country: </p>
                  <p className="text-gray-500">Bangladesh</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true ? (
                  <Badge className="space-x-2 text-white bg-green-600">
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Enable Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Verify Your Account{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm
                      handleSubmit={handleEnableTwoStepVerification}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
