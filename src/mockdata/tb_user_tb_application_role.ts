export interface UserApplicationRole {
  id: string;
  user_id: string;
  application_role_id: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const userApplicationRoles: UserApplicationRole[] = [
  // ตาราง tb_user_tb_application_role ไม่มีข้อมูลในขณะนี้
  // แต่โครงสร้างพร้อมสำหรับการใช้งานในอนาคต
];
