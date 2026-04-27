import { isFeatureEnabled } from '@/config/features';
import { PlanCard } from '@/modules/billing/components/plan-card';

export default function BillingPage() {
  if (!isFeatureEnabled('billing')) {
    return <div className="rounded-xl bg-white p-6">Billing is disabled by feature flag.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Billing</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <PlanCard name="Free" price="$0/mo" description="Best for getting started." />
        <PlanCard name="Pro" price="$29/mo" description="Advanced features for growing teams." />
      </div>
      <form action="/api/billing/checkout" method="post">
        <button className="rounded bg-primary px-4 py-2 text-white" type="submit">
          Upgrade to Pro
        </button>
      </form>
    </div>
  );
}
