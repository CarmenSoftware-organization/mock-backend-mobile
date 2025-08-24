# Mock Data Structure

โครงสร้าง Mock Data ที่แยกตาม Prisma Tables เพื่อความเป็นระเบียบและง่ายต่อการจัดการ

## โครงสร้างไฟล์

```
src/mockdata/
├── README.md                    # คู่มือนี้
├── index.ts                     # Entry point หลัก
├── users.ts                     # Legacy user data และ main exports
├── legacy-types.ts              # Types สำหรับ backward compatibility
├── const.ts                     # Constants
└── tables/                      # Mock tables แยกตาม Prisma schema
    ├── index.ts                 # Tables entry point
    ├── types.ts                 # Types สำหรับ tables ทั้งหมด
    ├── utils.ts                 # Utility functions
    ├── tb-user-profile.ts       # User profiles table
    ├── tb-department.ts         # Departments table  
    ├── tb-department-user.ts    # Department-User relationships
    ├── tb-application-config.ts # Application configurations
    ├── tb-application-user-config.ts # User-specific configurations
    ├── tb-location.ts           # Locations table
    └── tb-user-location.ts      # User-Location relationships
```

## การใช้งาน

### แบบใหม่ (แนะนำ)

```typescript
// Import CRUD functions
import { 
  tbUserProfileCrud,
  tbDepartmentCrud,
  tbDepartmentUserCrud,
  getUserWithDepartment 
} from '@mockdata/tables';

// สร้าง User Profile ใหม่
const newUser = tbUserProfileCrud.create({
  firstname: "John",
  lastname: "Doe",
  bio: {}
});

// หา User Profile
const user = tbUserProfileCrud.findByUserId("user-id");

// สร้าง Department ใหม่
const dept = tbDepartmentCrud.create({
  name: "IT Department",
  description: "Information Technology",
  is_active: true
});

// รับข้อมูล User พร้อม Department
const userWithDept = getUserWithDepartment("user-id");
```

### แบบเก่า (Backward Compatible)

```typescript
// ยังใช้งานได้ปกติ
import { mockUsers, getUserProfileResponse } from '@mockdata/users';

const users = mockUsers;
const profile = getUserProfileResponse("user-id");
```

## CRUD Functions ที่มีให้

### User Profiles
- `tbUserProfileCrud.create(data)`
- `tbUserProfileCrud.findByUserId(userId)`
- `tbUserProfileCrud.findAll()`
- `tbUserProfileCrud.update(userId, data)`
- `tbUserProfileCrud.delete(userId)`

### Departments
- `tbDepartmentCrud.create(data)`
- `tbDepartmentCrud.findById(id)`
- `tbDepartmentCrud.findAll()`
- `tbDepartmentCrud.findByName(name)`
- `tbDepartmentCrud.update(id, data)`
- `tbDepartmentCrud.delete(id, deletedById?)` (soft delete)

### Department Users
- `tbDepartmentUserCrud.create(data)`
- `tbDepartmentUserCrud.findByUserId(userId)`
- `tbDepartmentUserCrud.findByDepartmentId(departmentId)`
- `tbDepartmentUserCrud.findHodByDepartmentId(departmentId)`
- `tbDepartmentUserCrud.update(id, data)`
- `tbDepartmentUserCrud.delete(id, deletedById?)`

### Application Config
- `tbApplicationConfigCrud.create(data)`
- `tbApplicationConfigCrud.findByKey(key)`
- `tbApplicationConfigCrud.getBusinessUnits()`
- `tbApplicationConfigCrud.update(key, data)`

### User Config
- `tbApplicationUserConfigCrud.upsert(userId, key, value, updatedById?)`
- `tbApplicationUserConfigCrud.findByUserAndKey(userId, key)`
- `tbApplicationUserConfigCrud.findByUserId(userId)`

### Locations
- `tbLocationCrud.create(data)`
- `tbLocationCrud.findById(id)`
- `tbLocationCrud.findAll()`
- `tbLocationCrud.findByName(name)`
- `tbLocationCrud.update(id, data)`
- `tbLocationCrud.delete(id, deletedById?)`

### User Locations
- `tbUserLocationCrud.create(data)`
- `tbUserLocationCrud.findByUserId(userId)`
- `tbUserLocationCrud.findByLocationId(locationId)`
- `tbUserLocationCrud.findByUserAndLocation(userId, locationId)`
- `tbUserLocationCrud.update(id, data)`
- `tbUserLocationCrud.delete(id, deletedById?)`

## Relationship Functions

```typescript
// รับข้อมูล User พร้อม Department
const userWithDept = getUserWithDepartment("user-id");

// รับข้อมูล Department พร้อม Users
const deptWithUsers = getDepartmentWithUsers("dept-id");
```

## Features

- ✅ **Static Mock Data**: ไม่ต้องใช้ Database
- ✅ **Full CRUD Operations**: Create, Read, Update, Delete
- ✅ **Soft Delete**: สำหรับ tables ที่รองรับ
- ✅ **Relationships**: จัดการความสัมพันธ์ระหว่าง tables
- ✅ **Type Safety**: TypeScript types ครบถ้วน
- ✅ **UUID Generation**: สร้าง UUID อัตโนมัติ
- ✅ **Timestamp Management**: จัดการ created_at, updated_at
- ✅ **Validation**: Built-in validation และ error handling
- ✅ **Backward Compatibility**: รองรับ API เดิม

## การเพิ่ม Table ใหม่

1. สร้างไฟล์ `tb-table-name.ts` ใน `/tables/`
2. เพิ่ม interface ใน `types.ts`
3. สร้าง mock data และ CRUD functions
4. Export ใน `tables/index.ts`
5. อัปเดต main `index.ts` และ `users.ts`

ตัวอย่าง:

```typescript
// tables/tb-new-table.ts
import { TbNewTable } from './types';
import { generateUuid, getCurrentTimestamp } from './utils';

export let mockTbNewTable: TbNewTable[] = [];

export const tbNewTableCrud = {
  create: (data) => { /* implementation */ },
  findById: (id) => { /* implementation */ },
  // ... other CRUD methods
};
```
