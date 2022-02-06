import { UserName } from '../domain/user';
import { useAuth } from '../services/authAdapter';
import { useUserStorage } from '../services/storageAdapter';
import { AuthenticationService, UserStorageService } from './ports';

type AuthenticateDependencies = {
  storage: UserStorageService;
  auth: AuthenticationService;
}

const authenticate = async (
  name: UserName,
  email: Email,
  dependencies: AuthenticateDependencies,
) => {
  const { storage, auth } = dependencies;
  const user = await auth.auth(name, email);
  storage.updateUser(user);
}

export const useAuthenticate = () => {
  const auth = useAuth();
  const storage = useUserStorage();

  return {
    authenticate: (name: UserName, email: Email) => (
      authenticate(name, email, {
        storage,
        auth
      })
    ),
    user: storage.user,
  };
}
