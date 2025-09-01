export interface SubscriptionDetail {
  id: string;
  subscription_id: string;
  business_unit_id: string;
  module_id: string;
  created_at: string;
  created_by_id: string;
  updated_at: string;
  updated_by_id: string | null;
}

export const subscriptionDetails: SubscriptionDetail[] = [
  // ตาราง tb_subscription_detail ไม่มีข้อมูลในขณะนี้
  // แต่โครงสร้างพร้อมสำหรับการใช้งานในอนาคต
];
