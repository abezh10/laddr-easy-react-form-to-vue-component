export default function ProfileForm() {
  return (
    <form className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <label className="grid gap-1 text-sm text-slate-700">
        <span className="font-medium">Display name</span>
        <input className="rounded-lg border border-slate-300 px-3 py-2" defaultValue="Taylor Rivers" />
      </label>
      <label className="grid gap-1 text-sm text-slate-700">
        <span className="font-medium">Bio</span>
        <textarea className="min-h-24 rounded-lg border border-slate-300 px-3 py-2" defaultValue="Legacy React starter form." />
      </label>
    </form>
  );
}
