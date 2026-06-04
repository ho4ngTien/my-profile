export function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-800 bg-slate-950/90 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-400">About</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Giới thiệu</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Tôi là Hoàng Tiến, hiện đang theo học chuyên ngành Công nghệ thông tin. Tôi đam mê lập trình Web và có kinh nghiệm xây dựng cả ứng dụng Frontend lẫn hệ thống Backend, hướng tới trở thành Fullstack Developer trong tương lai.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Học vấn & Cá nhân</h3>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li><strong>Họ tên:</strong> Hoàng Tiến</li>
              <li><strong>Ngày sinh:</strong> 14/07/2005</li>
              <li><strong>Đại học:</strong> ĐH Giao thông vận tải TP.HCM</li>
              <li><strong>Niên khóa:</strong> 2023 - Hiện tại</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Mục tiêu</h3>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">Mong muốn gia nhập đội ngũ phát triển Web với vai trò Intern/Fresher, học hỏi nhanh công nghệ mới và đóng góp giá trị thực tế cho các dự án.</p>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Lĩnh vực yêu thích</h3>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">Thiết kế UI/UX responsive, xây dựng các ứng dụng Web tối ưu hiệu năng, kiến trúc Component-based và hệ thống Backend với Spring Boot.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
