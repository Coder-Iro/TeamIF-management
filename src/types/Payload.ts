export interface CodeType {
  readonly discriminator: string;
  readonly id: string;
  readonly jobs: string[];
  readonly level: string;
  readonly nickname: string;
  readonly username: string;
}
