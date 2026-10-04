// تابعی که آمار نمره‌های کلاس را حساب می‌کند
function getClassStats(grades) {
  // مقدار اولیه را اولین نمره می‌گذاریم
  let highest = grades[0];
  let lowest = grades[0];
  let sum = 0;

  // فقط یک حلقه for...of
  for (const grade of grades) {
    if (grade > highest) {
      highest = grade; // نمره بالاتر پیدا شد
    }
    if (grade < lowest) {
      lowest = grade; // نمره پایین‌تر پیدا شد
    }
    sum += grade; // جمع کردن نمره‌ها
  }

  // میانگین = مجموع تقسیم بر تعداد
  const average = sum / grades.length;

  // برگرداندن نتیجه به شکل آبجکت
  return { highest, lowest, average };
}

// تست تابع
const result = getClassStats([88, 95, 72, 91, 65]);
console.log(result);