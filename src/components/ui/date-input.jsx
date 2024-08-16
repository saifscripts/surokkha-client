import { cn } from '@/lib/utils';

export function DateInput({ field }) {
  return (
    <input
      onChange={(e) => {
        field.onChange(e.target.value);
      }}
      defaultValue={field.value}
      type="date"
      className={cn(
        'px-3 py-2 text-left font-normal border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 rounded-md',
        !field.value && 'text-muted-foreground'
      )}
    />
  );
}
