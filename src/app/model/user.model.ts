export class User {
  private name: string;
  private email: string;
  private verified: boolean;
  private status: string;
  private lastLogin: Date;
  private photUrl: string;
  constructor() {}

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Getter $verified
   * @return {boolean}
   */
  public get $verified(): boolean {
    return this.verified;
  }

  /**
   * Getter $status
   * @return {string}
   */
  public get $status(): string {
    return this.status;
  }

  /**
   * Getter $lastLogin
   * @return {Date}
   */
  public get $lastLogin(): Date {
    return this.lastLogin;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Setter $verified
   * @param {boolean} value
   */
  public set $verified(value: boolean) {
    this.verified = value;
  }

  /**
   * Setter $status
   * @param {string} value
   */
  public set $status(value: string) {
    this.status = value;
  }

  /**
   * Setter $lastLogin
   * @param {Date} value
   */
  public set $lastLogin(value: Date) {
    this.lastLogin = value;
  }

  /**
   * Getter $photUrl
   * @return {string}
   */
  public get $photUrl(): string {
    return this.photUrl;
  }

  /**
   * Setter $photUrl
   * @param {string} value
   */
  public set $photUrl(value: string) {
    this.photUrl = value;
  }
}
