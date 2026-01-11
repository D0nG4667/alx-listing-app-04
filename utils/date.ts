import { format } from 'date-fns';

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatDDMMYY(date: Date): string {
  return format(date, 'dd/MM/yy');
}
