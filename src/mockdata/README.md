# Mock Data

โฟลเดอร์นี้เก็บ mock data สำหรับการทดสอบและพัฒนา API

## ไฟล์ที่มีอยู่

### `users.ts`
Mock data สำหรับ user 10 คนพร้อมกับ business unit relationships

#### โครงสร้างข้อมูล

**User Interface:**
```typescript
interface User {
  id: string;           // UUID
  email: string;        // อีเมล
  password: string;     // รหัสผ่าน
  first_name: string;   // ชื่อ
  middle_name?: string; // ชื่อกลาง (optional)
  last_name: string;    // นามสกุล
  is_active: boolean;   // สถานะการใช้งาน
  created_at: string;   // วันที่สร้าง
  updated_at: string;   // วันที่อัปเดต
}
```

**UserBusinessUnit Interface:**
```typescript
interface UserBusinessUnit {
  id: string;                    // UUID
  user_id: string;              // User ID
  business_unit_id: string;      // Business Unit ID
  role: 'admin' | 'user';       // บทบาท
  is_default: boolean;           // เป็น business unit หลักหรือไม่
  is_active: boolean;            // สถานะการใช้งาน
  created_at: string;            // วันที่สร้าง
  updated_at: string;            // วันที่อัปเดต
}
```

#### ข้อมูล Mock Users

1. **สมชาย ใจดี** - Admin (HQ) - email : admin@carmensoftware.com
2. **สมหญิง รักดี สุขใจ** - Manager (HQ) - email : manager@carmensoftware.com
3. **วิชัย ซื้อของ** - Purchaser (HQ) - email : purchaser@carmensoftware.com
4. **สมศรี บัญชี เงินทอง** - Accountant (HQ) - email : accountant@carmensoftware.com
5. **สมศักดิ์ คลังสินค้า** - Warehouse (HQ) - email : warehouse@carmensoftware.com
6. **สมปอง ขายของ รุ่งเรือง** - Sales (Bangkok) - email : sales@carmensoftware.com
7. **สมพร ทรัพยากร** - HR (HQ) - email : hr@carmensoftware.com
8. **สมชาย ไอที เทคโนโลยี** - IT (HQ) - email : it@carmensoftware.com
9. **สมหญิง การตลาด โฆษณา** - Marketing (Bangkok) - email : marketing@carmensoftware.com
10. **สมศักดิ์ ลูกค้า** - Support (HQ) - email : support@carmensoftware.com


#### Business Units

- **Headquarters** - สำนักงานใหญ่
- **Bangkok** - กรุงเทพฯ
- **Chiangmai** - เชียงใหม่
- **Phuket** - ภูเก็ต

#### ฟังก์ชัน Helper

```typescript
// ดึงข้อมูล user profile ตาม ID
getUserProfile(userId: string): UserProfile | null

// ดึงข้อมูล users ทั้งหมดพร้อม business units
getAllUsersWithBusinessUnits(): UserProfile[]

// ดึงข้อมูล users ตาม business unit
getUsersByBusinessUnit(businessUnitId: string): UserProfile[]
```

## วิธีการใช้งาน

### Import ในไฟล์อื่น

```typescript
// Import ทั้งหมด
import { mockUsers, getUserProfile } from '../mockdata/users';

// Import default
import users from '../mockdata/users';

// Import จาก index
import { mockUsers } from '../mockdata';
```

### ตัวอย่างการใช้งาน

```typescript
// ดึงข้อมูล user ทั้งหมด
const allUsers = getAllUsersWithBusinessUnits();

// ดึงข้อมูล user profile ตาม ID
const userProfile = getUserProfile('user-id-here');

// ดึงข้อมูล users ตาม business unit
const hqUsers = getUsersByBusinessUnit('headquarters-id');
```

## การอัปเดตข้อมูล

เมื่อต้องการเพิ่มหรือแก้ไข mock data:

1. แก้ไขไฟล์ `users.ts`
2. เพิ่มข้อมูลใหม่ใน array `mockUsers` หรือ `mockUserBusinessUnits`
3. อัปเดต interfaces ถ้าจำเป็น
4. ทดสอบ API endpoints ที่เกี่ยวข้อง

## หมายเหตุ

- ข้อมูลทั้งหมดเป็น mock data สำหรับการทดสอบเท่านั้น
- UUID เป็นค่าคงที่ที่กำหนดไว้ล่วงหน้า ไม่เปลี่ยนแปลงเมื่อ restart server
- ข้อมูลถูกออกแบบให้สอดคล้องกับ OpenAPI specification ของระบบ
