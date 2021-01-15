export interface CodeType {
  readonly discriminator: string;
  readonly id: string;
  readonly jobs: string[];
  readonly level: string;
  readonly nickname: string;
  readonly username: string;
}

export interface ProfileType {
  // TODO: GET /member 엔드포인트 결과
}
