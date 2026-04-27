export function PlanCard({ name, price, description }: { name: string; price: string; description: string }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-2xl font-bold">{price}</p>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}
