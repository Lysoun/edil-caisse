import {httpResource} from '@angular/common/http';

export function apiHttpResource(url: string) {
  return httpResource(() => `/api/${url}`);
}
