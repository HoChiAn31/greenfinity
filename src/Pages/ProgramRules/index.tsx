import { FC } from "react";
import ItemVoucher from "../../components/ItemVoucher";
import { Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

const ProgramRules: FC = ({}) => {
  const navigate = useNavigate();
  const hanldeBack = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-[1268px] mx-auto ">
      <section className="text-center">
        <div className="h-[167px] flex-col justify-start items-center gap-5 inline-flex ">
          <div className="flex-col justify-start items-center gap-5 flex">
            <div className="text-center text-[#009383] text-[64px] font-bold  uppercase leading-[76.80px]">
              THỂ LỆ CHƯƠNG TRÌNH
            </div>
            <div className="h-[68px] px-5 bg-[#15bdd6] rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-[40px] font-bold  uppercase leading-[48px]">
                TÁI SINH CHAI NHỰA CÙNG CỘNG ĐỒNG SÓNG XANH
              </div>
            </div>
          </div>
          <div className="text-[#494949] text-lg font-semibold ">
            (Diễn ra từ ngày 30/07/2023 đến hết ngày 30/12/2023)
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="w-[1267px]">
          <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
            1. Đối tượng tham gia:
          </p>
          <p className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
            Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội
            chủ nghĩa Việt Nam, và trên 18 tuổi.
            <br />
          </p>
          <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
            2.1 Cách thức tham gia chương trình:
          </p>
          <p className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
            Người chơi tham gia chương trình bằng cách thực hiện theo các bước
            dưới đây:
          </p>
          <p className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              Bước 1:{" "}
            </span>
            Người chơi đến địa điểm đặt “Trạm Tái Sinh” của Aquafina để tham gia
            vào chương trình trình “Tái sinh chai nhựa cùng cộng đồng sóng
            xanh”. (sau đây được gọi tắt là “Chương Trình”)Người chơi quét mã QR
            code bằng điện thoai để đăng ký/ đăng nhập.
          </p>
          <p className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              Bước 2:{" "}
            </span>
            Người chơi thực hiện đầy đủ theo các bước hướng dẫn trên màn hình
            LCD của máy để tham gia vào chương trình đổi chai nhựa rỗng vàtích
            điểm thưởng theo các bước sau:
            <br />
            <p>
              1. Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái và chờ hệ thống
              xử lý.
            </p>
            <p>
              2. Hoàn tất quá trình bỏ chai, trên màn hình sẽ hiện 1 mã QR code
              và điểm số người chơi quy đổi được. Quét mã QR bằng điện thoại để
              dẫn vềwebsite:{" "}
            </p>
          </p>
          <p>
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              http://aquafina.pepsishop.vn/.
              <br />- Chai Aquafina:
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              2 điểm Aquafina
            </span>
          </p>
          <p>
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              - Không phải chai Aquafina:
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              1 điểm Aquafina
              <br />
            </span>
          </p>
          <p>
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              Bước 3:{" "}
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              Người chơi đăng nhập vào website theo thông tin đã được đăng ký.
            </span>
          </p>
          <p>
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              Bước 4:
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              Người chơi tiến hành quy đổi điểm thưởng ra các phần quà, có hai
              hình thức đổi thưởng:
            </span>
          </p>
          <p>
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              Hình thức 1:
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              Người chơi đổi trực tiếp số điểm Aquafina của mình ra voucher ví
              điện tử MOMO tương ứng. Số voucher đổi được sẽ được lưu về ví điện
              tử MOMO trong mỗi tài khoản tham gia chơi. Điểm được đổi bắt đầu
              tính từ 00 giờ 00 phút ngày 30/7/2023.
            </span>
          </p>
          <p>
            <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
              Hình thức 2:
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              Người chơi tham gia “Cộng đồng sóng xanh”, đổi điểm Aquafina để
              mua sắm sản phẩm trang điểm cho nhân sản của mình trong Chương
              Trình để có cơ hội nhận được những phần quà theo thứ hạng trong
              tuần của mình. Điểm Aquafina chi tiêu để mua sản phẩm theo hình
              thức này được gọi là “Điểm Chi Tiêu”. Căn cứ vào thứ hạng Điểm Chi
              Tiêu hàng tuần, người chơi sẽ có cơ hội được nhận các phần quà giá
              trị từ Chương Trình. Mỗi tuần (tính từ 00 giờ 00 phút Chủ Nhật
              tuần này đến 23 giờ 59 phút ngày Thứ bảy tuần kế tiếp), căn cứ vào
              số lượng người chơi và Điểm Chi Tiêu, SPVB sẽ công bố bảng xếp
              hạng người chơi có Điểm Chi Tiêu cao nhất tuần để được nhận các
              phần quà giá trị từ Chương Trình. Bảng xếp hạng chi tiêu tuần đầu
              tiên được bắt đầu tính từ 00 giờ 00 phút ngày 30/7/2023 đến 23 giờ
              59 phút ngày 05/8/2023. <br /> Cơ cấu quà tặng từ Chương Trình
              được quy định ở Mục 2.3 của Thể lệ này. Kết quả bảng xếp hạng
              người chơi có Điểm Chi Tiêu cao nhất tuần sẽ được công bố tại
              website{" "}
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal underline leading-[27px]">
              http://aquafina.pepsishop.vn/
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              và trên fanpage{" "}
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal underline leading-[27px]">
              https://www.facebook.com/Aquafinavietnam
            </span>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              {" "}
              muộn nhất vào 20 giờ 00 phút ngày thứ 4 của tuần kế tiếp trong
              thời gian diễn ra Chương Trình.
              <br />
            </span>
          </p>
          <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
            Bước 5:{" "}
          </span>
          <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
            Người chơi vẫn có thể tiếp tục chơi và tích lũy điểm Aquafina ở các
            tuần tiếp theo để có cơ hội nhận được các phần quà trong thời gian
            diễn ra chương trình.
            <br />
          </span>
          <span className="text-[#3f3f3f] text-2xl font-semibold leading-9">
            2.2 Những quy định về chương trình:
            <br />
          </span>
          <ul className="text-[#3f3f3f] text-lg font-normal leading-[27px] pl-5">
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Số điểm Aquafina tích lũy còn lại sau khi trừ đi Điểm Chi Tiêu và
              điểm Aquafina mà người chơi đã sử dụng để đổi voucher MOMO sẽ được
              tiếp tục cộng dồn trong suốt thời gian diễn ra chương trình.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Danh sách người chơi có Điểm Chi Tiêu hàng tuần (tính từ 00 giờ 00
              phút Chủ Nhật tuần này đến 23 giờ 59 phút ngày Thứ bảy tuần kế
              tiếp) cao nhất sẽ được xác định để nhận được quà tặng giá trị từ
              Chương Trình.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Khi chương trình kết thúc, số điểm Aquafina không được sử dụng sẽ
              không còn giá trị.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Quà tặng không có giá trị quy đổi thành tiền mặt.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Do số lượng quà tặng có giới hạn, SPVB có quyền thay đổi quà tặng
              nhưng đảm bảo sẽ giữ nguyên giá trị đã cam kết.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Số lượng quà tặng được trao thực tế sẽ dựa trên số lượng người
              tham gia nhưng không vượt quá số lượng giải hằng tuần theo cơ cấu
              chương trình. Chương trình có thể kết thúc sớm khi số lượng quà
              tặng đã được quy đổi hết.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Nếu số lượng quà tặng trao cho khách hàng trong tuần không được sử
              dụng hết theo cơ cấu Chương Trình trong các trường hợp bao gồm
              nhưng không giới hạn như người chơi trúng giải nhưng bỏ giải,
              không nhận giải, không đủ số lượng người tham gia, SPVB không liên
              hệ được người trúng giải do người chơi cung cấp thông tin không
              chính xác, thì số lượng quà tặng còn lại của tuần đó sẽ không được
              cộng dồn qua các tuần tiếp theo.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Đối với các trường hợp BTC không thể liên hệ để trao quà trong
              vòng 45 ngày, phần thưởng sẽ mất hiệu lực và chương trình sẽ không
              giải quyết bất kỳ khiếu nại xảy ra sau thời gian này.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Các điểm số BTC đánh giá là có dấu hiệu bất thường và không hợp
              lệ, số điểm được quy đổi tại vị trí máy không thuộc hệ thống danh
              sách máy chính thức của chương trình, BTC được quyền từ chối trao
              giải.
            </li>
            <li className="relative before:content-['-'] before:absolute before:-left-5 before:top-0 before:font-medium before:text-[#3f3f3f]">
              Các phiếu quà tặng voucher điện tử có hiệu lực trong vòng 30 ngày
              kể từ ngày khách hàng kích hoạt quà tặng tại ví Momo (voucher có
              thể hiện thời hạn hiệu lực trong ví của khách hàng sau khi kích
              hoạt). Mọi vấn đề phát sinh trong quá trình sử dụng phiếu quà tặng
              không thuộc quyền & giới hạn xử lý từ Aquafina. BTC có trách nhiệm
              kết nối với đối tác Momo để hỗ trợ khách hàng xử lý các vấn đề
              trong quá trình sử dụng.
            </li>
          </ul>

          <span className="text-[#3f3f3f] text-2xl font-semibold leading-9">
            2.3 Số lượng quà tặng:
            <br />
          </span>
          <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
            Số lượng quà tặng và điểm Aquafina cần thiết để quy đổi được quy
            định chi tiết theo bảng dưới đây: Số lượng giải thưởng hàng tuần
            (tính từ 00 giờ 00 phút Chủ Nhật tuần này đến 23 giờ 59 phút ngày
            Thứ bảy tuần kế tiếp) trong giai đoạn từ ngày 30/07/2023 đến
            30/12/2023 như sau:
          </span>
          {/* item */}
          <div className="grid grid-cols-3 gap-5 my-5">
            <ItemVoucher />
            <ItemVoucher />
            <ItemVoucher />
            <ItemVoucher />
            <ItemVoucher />
            <ItemVoucher />
          </div>
          {/* 2.4 -> 3 */}
          <div className="w-[1267px]">
            <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              2.4 Cách thức nhận quà tặng:
            </p>
            <ul className="text-[#3f3f3f] text-lg font-normal leading-[27px] list-none">
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Hàng tuần, SPVB sẽ công bố bảng xếp hạng người chơi có Điểm Chi
                Tiêu cao nhất trong tuần (Điểm Chi Tiêu để tính xếp hạng được
                xác định tính từ 00 giờ 00 phút Chủ Nhật tuần này đến 23 giờ 59
                phút ngày Thứ bảy tuần kế tiếp) theo cơ cấu tại thể lệ này kèm
                theo hướng dẫn cách thức nhận giải trên fanpage Aquafina và trên
                website&nbsp;
                <a
                  href="http://aquafina.pepsishop.vn/"
                  className="font-semibold underline text-[#3f3f3f]"
                >
                  http://aquafina.pepsishop.vn/
                </a>
                &nbsp;muộn nhất vào lúc 20 giờ 00 phút ngày thứ 4 của mỗi tuần
                tiếp theo trong thời gian diễn ra Chương Trình.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Người chơi cần làm theo hướng dẫn để được nhận quà tặng. Việc
                người chơi cung cấp thông tin cá nhân cho SPVB theo mục đích này
                được hiểu là hành động cho phép SPVB thu thập và sử dụng thông
                tin cá nhân của người chơi theo mục đích đã nêu. Trong mọi
                trường hợp, việc người chơi gửi thông tin nhận quà sau thời gian
                quy định là không hợp lệ, và được xem là người chơi từ bỏ việc
                nhận quà.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Quà tặng sẽ được Bên thứ 3 – phụ trách việc vận chuyển quà cho
                SPVB vận chuyển đến địa chỉ mà người chơi đã cung cấp trong vòng
                30 ngày kể từ ngày kết thúc Chương Trình. Trong trường hợp bất
                khả kháng như thiên tai, dịch bệnh, việc vận chuyển có thể bị
                ảnh hưởng và thời gian trao quà sẽ kéo dài hơn so với thời hạn
                đã cam kết nêu trên. SPVB sẽ không chịu trách nhiệm nếu thông
                tin nhận quà mà người chơi cung cấp không chính xác.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Người chơi có trách nhiệm ký tên trên phiếu giao hàng, biên bản
                bàn giao quà tặng, vận đơn bưu điện hoặc một tài liệu có tên gọi
                khác nhằm xác định đã nhận quà từ Chương Trình.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Mỗi cá nhân có quyền thắng nhiều hơn 1 giải trong thời gian diễn
                ra chương trình với điều kiện không thắng giải trong cùng 1 thời
                điểm.
              </li>
            </ul>

            <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              3. Quy định chung:
            </p>
            <ul className="text-[#3f3f3f] text-lg font-normal leading-[27px] list-none">
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                SPVB có quyền cập nhật và thay đổi thể lệ chương trình này để
                phù hợp hơn với người chơi và thông báo công khai đến người
                chơi. Trong trường hợp có sự thay đổi về thể lệ cũng như thời
                gian tổ chức, SPVB sẽ thông báo trên trang fanpage của chương
                trình tại&nbsp;
                <a
                  href="https://www.facebook.com/Aquafinavietnam"
                  className="font-semibold underline text-[#3f3f3f]"
                >
                  https://www.facebook.com/Aquafinavietnam
                </a>
                .
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Mọi thắc mắc liên quan đến Chương Trình, người chơi có thể nhắn
                tin vào hộp thư trang fanpage của chương trình tại&nbsp;
                <a
                  href="https://www.facebook.com/Aquafinavietnam"
                  className="font-semibold underline text-[#3f3f3f]"
                >
                  https://www.facebook.com/Aquafinavietnam
                </a>
                &nbsp;hoặc gọi điện theo số tổng đài{" "}
                <span className="font-semibold">1900545441</span>. SPVB chỉ chịu
                trách nhiệm giải quyết những khiếu nại, tranh chấp được gửi đến
                SPVB trong thời hạn từ lúc bắt đầu Chương Trình cho đến khi hoàn
                tất việc trao quà tặng đến những người chơi đã quy đổi quà tặng
                hợp lệ theo quy định tại Điều 2.4 nêu trên.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Trong mọi trường hợp, nếu có tranh chấp về việc thực hiện Chương
                Trình (bao gồm nhưng không giới hạn việc xác định người chơi
                chiến thắng theo bảng xếp hạng tuần, quy đổi quà tặng hợp lệ),
                thì quyền quyết định cuối cùng sẽ thuộc về SPVB.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                SPVB cam kết thực hiện đúng và hoàn toàn chịu trách nhiệm về
                chương trình trên theo các quy định của pháp luật hiện hành.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Theo quy định của pháp luật, SPVB có quyền chấm dứt hoặc huỷ
                chương trình này trong trường hợp bất khả kháng và sẽ thông báo
                công khai phù hợp với quy định pháp luật.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Nếu phát hiện có dấu hiệu gian lận, sử dụng công cụ, phần mềm hỗ
                trợ, tài khoản của người chơi sẽ bị khóa đến hết thời gian diễn
                ra chương trình, mọi quà tặng sẽ bị thu hồi.
              </li>
              <li className="relative pl-5 before:content-['-'] before:absolute before:left-0 before:top-0 before:font-bold before:text-[#3f3f3f]">
                Quy định về chính sách quyền riêng tư và bảo mật của SPVB.
              </li>
            </ul>

            <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ VÀ BẢO MẬT CỦA SPVB:
            </p>
            <span className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              Bằng việc tham gia Chương Trình và cung cấp các dữ liệu cá nhân
              của mình, Người Tham Gia đồng ý với các Điều Kiện và Điều Khoản
              của chương trình, và cho phép SPVB thu thập và xử lý dữ liệu tin
              cá nhân của Người Tham Gia, cũng như việc chia sẻ các dữ liệu cho
              bất kỳ bên thứ ba trong và ngoài nước dựa trên các chính sách và
              quyết định của riêng SPVB, bao gồm nhưng không giới hạn ở các nội
              dung sau đây:
              <br />
            </span>
            <span className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              DỮ LIỆU CÁ NHÂN SPVB XỬ LÝ:
              <br />
            </span>
            <div className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              <p>
                SPVB có thể thu thập hoặc xử lý các loại thông tin sau về Người
                Tham Gia. Dữ liệu cá nhân cụ thể mà SPVB thu thập về Người Tham
                Gia sẽ khác nhau tùy thuộc vào cách thức và kết quả Người Tham
                Gia tham gia Chương Trình, bao gồm nhưng không giới hạn ở các
                thông tin sau đây:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Thông tin liên hệ và thông tin nhận dạng cá nhân, bao gồm
                  nhưng không giới hạn ở họ tên, địa chỉ, địa chỉ email, số
                  chứng minh nhân dân (CMND) hoặc căn cước công dân (CCCD), mã
                  số thuế, hình ảnh cá nhân, số điện thoại và tên người dùng
                  hoặc tài khoản mạng xã hội của Người Tham Gia.
                </li>
                <li>
                  Số nhận dạng thiết bị, bao gồm nhưng không giới hạn ở thông
                  tin về thiết bị của Người Tham Gia như địa chỉ MAC, địa chỉ IP
                  hoặc các số nhận dạng trực tuyến khác.
                </li>
                <li>
                  Thông tin thanh toán, bao gồm các thông tin cá nhân nhạy cảm
                  như phương thức thanh toán và thông tin thanh toán ngân hàng
                  (bao gồm số tài khoản, địa chỉ giao hàng và địa chỉ thanh
                  toán) của Người Tham Gia.
                </li>
              </ul>
            </div>

            <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              DỮ LIỆU CÁ NHÂN SPVB XỬ LÝ:
            </p>
            <div className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              <p>SPVB có thể sử dụng thông tin về Người Tham Gia mà SPVB có:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  Cho mục đích thực hiện Chương Trình, chẳng hạn như xử lý, quản
                  lý việc tham gia Chương Trình của Người Tham Gia, thực hiện
                  các nghĩa vụ của SPVB liên quan tới Chương Trình (lưu trữ, báo
                  cáo, phục vụ hoạt động kế toán, kiểm toán, thanh tra, hậu kiểm
                  theo quy định của pháp luật v.v.).
                </li>
                <li>
                  Cho mục đích liên lạc với Người Tham Gia, bao gồm cả việc
                  thông báo về Chương Trình, trả lời các câu hỏi hoặc khiếu nại
                  của Người Tham Gia.
                </li>
                <li>
                  Cho các mục đích pháp lý và bảo mật, chẳng hạn như để phát
                  hiện, ngăn chặn và truy tố các hoạt động gây thiệt hại, gian
                  lận hoặc bất hợp pháp, ngăn ngừa tổn thất, xác định và sửa lỗi
                  trên trang web hoặc ứng dụng di động của SPVB và để tuân thủ
                  các yêu cầu pháp lý hiện hành, các tiêu chuẩn ngành liên quan
                  và chính sách của SPVB.
                </li>
                <li>
                  Cho mục đích tiếp thị và quảng cáo, chẳng hạn như gửi cho
                  Người Tham Gia thư bưu điện, tin nhắn văn bản, email, thông
                  báo hoặc các tin nhắn khác.
                </li>
              </ul>
            </div>

            <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              CÁCH SPVB CHIA SẺ THÔNG TIN:
              <br />
            </p>
            <div className="text-[#3f3f3f] text-lg font-normal leading-[27px]">
              <p>
                {" "}
                Cho mục đích xử lý dữ liệu cá nhân nêu trên, SPVB có thể chia sẻ
                thông tin cá nhân của Người Tham Gia với:
              </p>
            </div>
            <ul className="text-[#3f3f3f] text-lg font-normal leading-[27px] list-disc pl-5 mt-2 space-y-2">
              <li>Nhãn hàng khác của SPVB.</li>
              <li>
                Các công ty con và công ty liên kết của SPVB. SPVB có thể chuyển
                dữ liệu cá nhân của Người Tham Gia cho các công ty con và công
                ty liên kết của SPVB trên cơ sở cần biết cho các mục đích được
                xác định trong chính sách về quyền riêng tư và bảo mật này.
              </li>
              <li>
                Các nhà cung cấp dịch vụ. SPVB có thể chuyển dữ liệu cá nhân của
                Người Tham Gia cho các nhà cung cấp dịch vụ thay mặt SPVB thực
                hiện dịch vụ dựa trên hướng dẫn của SPVB. SPVB không cho phép
                các nhà cung cấp dịch vụ này sử dụng hoặc tiết lộ thông tin trừ
                khi cần thiết để thực hiện các dịch vụ thay mặt SPVB hoặc tuân
                thủ các yêu cầu pháp lý. Ví dụ về các nhà cung cấp dịch vụ này
                bao gồm các nhà cung cấp dịch vụ cung cấp chức năng trang web và
                ứng dụng, kiểm toán, tư vấn, bưu điện, v.v.
              </li>
              <li>
                Các bên thứ ba khác mà SPVB chỉ định để hỗ trợ thực hiện chương
                trình khuyến mại.
              </li>
              <li>
                Để làm rõ, các thực thể trên có thể nằm trong hoặc ngoài lãnh
                thổ Việt Nam.
              </li>
            </ul>

            <p className="text-[#3f3f3f] text-2xl font-semibold leading-9">
              QUYỀN VÀ NGHĨA VỤ CỦA NGƯỜI THAM GIA:
            </p>
            <ul className="text-[#3f3f3f] text-lg font-normal leading-[27px] list-disc pl-5 mt-2 space-y-2">
              <li>
                Người Tham Gia hiểu và đồng ý rằng việc cung cấp các dữ liệu
                theo các nội dung nêu trên hoàn toàn trên cơ sở tự nguyện. Người
                Tham Gia có thể đồng ý hoặc không đồng ý một phần hoặc toàn bộ
                các nội dung nêu trên. Tuy nhiên, chỉ khi Người Tham Gia đồng ý
                với toàn bộ các nội dung bên trên mới thỏa mãn điều kiện tham
                gia Chương Trình của SPVB.
              </li>
              <li>
                Người Tham Gia có toàn bộ các quyền và nghĩa vụ liên quan đến dữ
                liệu cá nhân của mình theo quy định pháp luật.
              </li>
              <li>
                Nếu Người Tham Gia có bất kỳ câu hỏi hoặc nhận xét nào về các
                nội dung này hoặc nếu Người Tham Gia muốn thực hiện các quyền
                của mình, Người Tham Gia có thể liên hệ với SPVB bằng cách gửi
                email cho SPVB theo địa chỉ:{" "}
                <span className="text-[#3f3f3f] text-lg font-semibold leading-[27px]">
                  compliance.ethics@suntorypepsico.vn.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-5 flex justify-center items-center">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#009383",
              },
            }}
          >
            <Button type="primary" className="px-10 py-5 " onClick={hanldeBack}>
              <p className="text-white text-lg font-semibold">Đã hiểu</p>
            </Button>
          </ConfigProvider>
        </div>
      </section>
    </div>
  );
};

export default ProgramRules;
