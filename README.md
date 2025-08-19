# Mock Backend Mobile API

Modern, minimal website สำหรับ Mock Backend Mobile API ที่สร้างด้วย Next.js 15.4.7, TypeScript 5.9.2, และ TailwindCSS 4.1.12

## ✨ คุณสมบัติ

- **Modern Design**: Clean, minimal UI ที่ออกแบบตาม modern design principles
- **Responsive**: รองรับทุกขนาดหน้าจอ (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, animations, และ smooth transitions
- **Performance**: Optimized ด้วย Next.js 15.4.7 และ TypeScript 5.9.2
- **Accessibility**: รองรับ keyboard navigation และ screen readers

## 🚀 การเริ่มต้นใช้งาน

### Prerequisites

- Node.js 18+ หรือ Bun 1.2.20+
- Package manager: npm, yarn, หรือ bun

### การติดตั้ง

1. Clone repository:
```bash
git clone <repository-url>
cd mock-backend-mobile
```

2. ติดตั้ง dependencies:
```bash
bun install
# หรือ
npm install
# หรือ
yarn install
```

3. รัน development server:
```bash
bun run dev
# หรือ
npm run dev
# หรือ
yarn dev
```

4. เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3b82f6) และ Purple (#8b5cf6)
- **Background**: Subtle gradients จาก slate ไปยัง blue/indigo
- **Text**: Dark gray สำหรับ readability ที่ดี

### Typography
- **Font Family**: Geist Sans (modern, clean)
- **Hierarchy**: Clear heading levels และ spacing
- **Responsive**: Font sizes ที่ปรับตามหน้าจอ

### Components
- **Hero Section**: Eye-catching header พร้อม gradient text
- **Features Grid**: 3-column layout สำหรับคุณสมบัติหลัก
- **Interactive Cards**: Hover effects และ animations
- **Modern Buttons**: Gradient backgrounds และ smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.7 (App Router)
- **Language**: TypeScript 5.9.2
- **Styling**: TailwindCSS 4.1.12
- **UI Components**: shadcn/ui
- **Icons**: Lucide React 0.540.0
- **Animations**: CSS animations + Tailwind utilities
- **Package Manager**: Bun 1.2.20

## 📱 Responsive Design

Website ออกแบบมาให้รองรับทุกขนาดหน้าจอ:

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: 2-column grid สำหรับ features
- **Desktop**: Full 3-column layout พร้อม enhanced spacing

## 🎭 Animations & Interactions

- **Fade In**: Smooth entrance animations
- **Hover Effects**: Interactive elements ที่ตอบสนองต่อ user
- **Smooth Transitions**: Consistent timing functions
- **Loading States**: Progressive content reveal

## 🔧 การปรับแต่ง

### Colors
ปรับสีหลักได้ใน `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
  }
}
```

### Animations
เพิ่ม custom animations ใน `globals.css`:

```css
@keyframes customAnimation {
  /* animation definition */
}
```

## 📚 API Documentation

เข้าถึง Swagger UI ได้ที่ `/swagger` endpoint สำหรับการทดสอบ API endpoints

## 🚀 Latest Updates

### Packages Updated to Latest Versions:
- **Next.js**: 15.4.7
- **React**: 19.1.1
- **TypeScript**: 5.9.2
- **TailwindCSS**: 4.1.12
- **ESLint**: 9.33.0
- **Node Types**: 24.3.0
- **All other dependencies**: Latest stable versions

### Next.js 15 Improvements:
- Optimized build process
- Enhanced performance
- Better TypeScript support
- Improved viewport handling
- Modern metadata API

## 🤝 Contributing

1. Fork repository
2. สร้าง feature branch
3. Commit changes
4. Push to branch
5. สร้าง Pull Request

## 📄 License

MIT License - ดูรายละเอียดใน LICENSE file

## 🆘 Support

หากมีปัญหาหรือคำถาม กรุณาสร้าง issue ใน GitHub repository

---

สร้างด้วย ❤️ โดย Carmen Software Team
