export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-brand-stroke bg-brand-panel p-5">
      <label className="text-sm">Name<input className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Email<input type="email" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Question<textarea className="mt-1 min-h-24 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <button className="min-h-11 rounded-lg bg-brand-accent/25 font-semibold">Send Inquiry</button>
    </form>
  );
}

export function ProductRequestForm() {
  return (
    <form action="/api/product-request" method="post" className="grid gap-4 rounded-2xl border border-brand-stroke bg-brand-panel p-5">
      <label className="text-sm">Name<input name="name" required className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Preferred Contact Method<select name="contactMethod" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5"><option>Phone</option><option>Email</option><option>Either</option></select></label>
      <label className="text-sm">Phone or Email<input name="contact" required className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Requested Product<input name="product" required className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Brand<input name="brand" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Category<input name="category" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Additional Notes<textarea name="notes" className="mt-1 min-h-24 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="notify" /> Notify me when available</label>
      <button className="min-h-11 rounded-lg bg-brand-accent/25 font-semibold">Submit Request</button>
    </form>
  );
}
