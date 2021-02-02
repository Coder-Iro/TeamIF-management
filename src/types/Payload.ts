export interface CodeType {
  readonly discriminator: string;
  readonly id: string;
  readonly jobs: string[];
  readonly level: string;
  readonly nickname: string;
  readonly username: string;
}

export interface ProfileType {
  readonly discord: number;
  readonly email: string;
  readonly github: string;
  readonly id: string;
  readonly jobs: string[];
  readonly level: string;
  // eslint-disable-next-line camelcase
  readonly mailgun_id: number;
  readonly nickname: string;
}
