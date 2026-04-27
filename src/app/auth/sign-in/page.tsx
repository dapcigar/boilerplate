import { SignInForm } from '@/modules/auth/components/sign-in-form';

export default function SignInPage() {
  return (
    <div className="mx-auto mt-24 max-w-md p-6">
      <h1 className="mb-4 text-2xl font-bold">Sign in</h1>
      <SignInForm />
    </div>
  );
}
