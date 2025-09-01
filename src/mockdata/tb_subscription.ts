export interface Subscription {
  id: string;
  cluster_id: string;
  subscription_number: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const subscriptions: Subscription[] = [
  // ตาราง tb_subscription ไม่มีข้อมูลในขณะนี้
  // แต่โครงสร้างพร้อมสำหรับการใช้งานในอนาคต
];
