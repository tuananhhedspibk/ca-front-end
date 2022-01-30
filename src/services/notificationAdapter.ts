import { NotificationService } from '../application/ports';

export const useNotifier = (): NotificationService => {
  return {
    notify: (message: string) => window.alert(message),
  };
}
