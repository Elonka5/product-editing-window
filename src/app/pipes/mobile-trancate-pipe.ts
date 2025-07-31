import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileTrancate',
  pure: false,
})
export class MobileTrancatePipe implements PipeTransform {
  transform(value: string | number, limit: number): string {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const str = String(value);
    
    if (!isMobile) {
      return str;
    }

    return str.length > limit ? str.substring(0, limit) + '...' : str;
  }
}
