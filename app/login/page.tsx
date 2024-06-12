import LoginBannerImage from '@/public/assets/login-banner.svg';
import AuthLayout from '@/src/components/Auth/AuthLayout';
import LoginForm from '@/src/components/Auth/Login/LoginForm';

export default function page() {
  return (
    <AuthLayout src={LoginBannerImage}>
      <LoginForm />
    </AuthLayout>
  );
}
