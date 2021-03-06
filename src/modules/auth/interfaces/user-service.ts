import type {Context, OffsetQueryResult, Service} from '@core';
import type {GenerateTokenCommand} from './generate-token-command';
import type {RegisterWithTokenCommand} from './register-with-token-command';
import type {RegisterCommand} from './register-command';
import type {EmailExistsQuery} from './email-exists-query';
import type {User} from './user';
import type {UsernameExistsQuery} from './username-exists-query';

export type UserService = Service<string, User, OffsetQueryResult<string, User>> & {
  registerWithToken: (command: RegisterWithTokenCommand, context: Context) => Promise<void>;
  generateToken: (
    command: GenerateTokenCommand,
    context: Context,
  ) => Promise<{loginToken: string; refreshToken: string; accessToken: string}>;
  register: (
    command: RegisterCommand,
    context: Context,
  ) => Promise<{loginToken: string; refreshToken: string; accessToken: string}>;
  emailExists: (query: EmailExistsQuery, context: Context) => Promise<boolean>;
  usernameExists: (query: UsernameExistsQuery, context: Context) => Promise<boolean>;
};
