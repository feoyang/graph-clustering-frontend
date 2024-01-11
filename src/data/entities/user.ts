export interface User {
  /**
   * 账号
   * @description 2 - 16 位
   */
  account: string;

  /**
   * 用户昵称：1 - 16 位
   * @default Genius
   */
  nickname: string;

  /**
   * 头像链接
   * url
   * @default 服务端生成
   */
  avatar: string;

  /**
   * 用户注册时间
   */
  createTime: string;
}
