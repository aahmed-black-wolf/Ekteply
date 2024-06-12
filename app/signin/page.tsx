"use client";

import SignBannerImage from '@/public/assets/signin-banner.svg';
import AuthLayout from '@/src/components/Auth/AuthLayout';
import SignForm from '@/src/components/Auth/Signin/SignForm';

export default function page() {
  return (
    <AuthLayout src={SignBannerImage} slug={true}>
      <SignForm />
    </AuthLayout>
  );
}
