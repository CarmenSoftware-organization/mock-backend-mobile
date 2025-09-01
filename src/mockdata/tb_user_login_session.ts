export interface UserLoginSession {
  id: string;
  token: string;
  token_type: string;
  user_id: string;
  expired_on: string;
}

export const userLoginSessions: UserLoginSession[] = [
  // ตาราง tb_user_login_session ไม่มีข้อมูลในขณะนี้
  // แต่โครงสร้างพร้อมสำหรับการใช้งานในอนาคต
];
