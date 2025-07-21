Request -> Middleware -> Guard -> Interceptor -> Route Handler -> Interceptor -> Response

Request →
  Middleware →
    Filter →
      Guard →
        Pipe →
          Controller (Route Handler) →
            Interceptor →
                Service →
                    Response

TỔNG KẾT LUỒNG REQUEST TOÀN BỘ:
Client →
  Middleware →
    Exception Filter →
      Guard →
        Interceptor (before) →
          Pipe →
            Controller (Route Handler) →
              Service →
            Interceptor (after) →
                Response →
                    Exception Filter (nếu lỗi)

Luồng Nếu Xảy Ra Lỗi

→ Controller
     ↳ throw new HttpException()
         ↳ Filter xử lý lỗi
             ↳ Response lỗi về client
Tổng Kết Bảng So Sánh

Thành phần	    Vai trò chính	Thời điểm gọi
Middleware	    Ghi log, xác thực sơ cấp	Trước tất cả
Filter	        Bắt và xử lý lỗi	Khi có lỗi xảy ra
Guard	          Kiểm tra quyền	Trước controller, sau filter
Interceptor	    Ghi log, format response	Trước & sau controller
Pipe	          Biến đổi, validate dữ liệu	Trước khi vào controller
Controller	    Xử lý chính	Khi dữ liệu đã qua tất cả lớp trên
Service	        Business logic / DB	Được gọi từ controller